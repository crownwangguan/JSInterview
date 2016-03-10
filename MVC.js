function Model(value){
	this._value = typeof value === 'undefined' ?  '' : value;
	this._listeners = [];
}

Model.prototype.set = function(value) {
	var self = this;
	self._value = value;
	// model中的值改变时，应通知注册过的回调函数
    // 按照Javascript事件处理的一般机制，我们异步地调用回调函数
	setTimeout(function(){
		self._listeners.forEach(function(listener){
			listener.call(self, value);
		});
	});
};

Model.prototype.watch = function(listener){
	// 注册监听的回调函数
	this._listeners.push(listener);
};

// // html代码：
// <div id="div1"><div>
// // 逻辑代码：
// (function () {
//     var model = new Model();
//     var div1 = document.getElementById('div1');
//     model.watch(function (value) {
//         div1.innerHTML = value;
//     });
//     model.set('hello, this is a div');
// })();
Model.prototype.bind = function(node){
	// 将watch的逻辑和通用的回调函数放到这里
	this.watch(function(value){
		node.innerHTML = value;
	});
};

// // html代码：
// <div id="div1"><div>
// <div id="div2"><div>
// // 逻辑代码：
// (function () {
//     var model = new Model();
//     model.bind(document.getElementById('div1'));
//     model.bind(document.getElementById('div2'));
//     model.set('this is a div'); 
// })();

function Controller(callback) {
    var models = {};
    // 找到所有有bind属性的元素
    var views = document.querySelectorAll('[bind]');
    // 将views处理为普通数组
    views = Array.prototype.slice.call(views, 0);
    views.forEach(function (view) {
        var modelName = view.getAttribute('bind');
        // 取出或新建该元素所绑定的model
        models[modelName] = models[modelName] || new Model();
        // 完成该元素和指定model的绑定
        models[modelName].bind(view);
    });
    // 调用controller的具体逻辑，将models传入，方便业务处理
    callback.call(this, models);
}

// html:
<div id="div1" bind="model1"></div>
<div id="div2" bind="model1"></div>
// 逻辑代码：
new Controller(function (models) {
    var model1 = models.model1;
    model1.set('this is a div');
});


// html:
<span bind="hour"><span> : <span bind="minute"><span> : <span bind="second"><span>
// controller:
new Controller(function (models) {
    function setTime() {
        var date = new Date();
        models.hour.set(date.getHours());
        models.minute.set(date.getMinutes());
        models.second.set(date.getSeconds());
    }
    setTime();
    setInterval(setTime, 1000);
});