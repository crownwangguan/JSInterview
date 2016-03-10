+++++++++++++++++++++++++++++++++++++++HTML+++++++++++++++++++++++++++++++++++++++

1. doctype
Question: What is doctype? Why do u need it?
Answer: doctype is an instruction to the browser to 
		inform about the version of html document and how browser should render it.
<!DOCTYPE html>
<meta charset="UTF-8">

2. data-*
Question: What is the use of data- attribute?
Answer: allow you to store extra information/ data in the DOM.
		u can write valid html with embedded private data. 
		You can easily access data attribute by using javascript 
		and hence a lot of libraries like knockout uses it.
<div id="myDiv" data-user="jsDude" data-list-size="5" data-maxage="180">

3. keygen
Question: How can u generate public key in html?
Answer: html has a keygen element that facilitate generation of key and submission via a form.
<keygen name="name" challenge="challenge string" keytype="type" keyparams="pqg-params">

4. bdo
Question: How can u change direction of html text?
Answer: use bdo (bidirectional override) element of html.
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
ltr: left to right.

5. mark
Question: How can u highlight text in html?
Answer: use mark element.
<p>Some part of this paragraph is <mark>highlighted</mark> by using mark element.</p>


6. scoped
Question: Can u apply css rule to a part of html document?
Answer: yes. by using "scopped" in the style tag.
<style scoped>

7. download order
Question: Does style1.css have to be downloaded and parsed before style2.css can be fetched?
<head>
    <link href="style1.css" rel="stylesheet">
    <link href="style2.css" rel="stylesheet">
<head>
Answer: No

Question: Does style2.css have to be downloaded and parsed before Paragraph 1 is rendered on the page?
<head>
    <link href="style1.css" rel="stylesheet">
<body>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <link href="style2.css" rel="stylesheet">
Answer: yes

8. self closing tag
Question: What are optional closing tag? and why would u use it?

Answer: p, li, td, tr, th, html, body, etc. 
		you dont have to provide end tag. 
		Whenever browser hits a new tag it automatically ends the previous tag. 
		However, you have to be careful to escape it.
reason: you can save some byte and reduce bytes needs to be downloaded in a html file.

9. span vs div
Question: What is the difference between span and div?
Answer: div is a block element and span is inline element.
Extra: It is illegal to put block element inside inline element. 
		div can have a p tag and a p tag can have a span. 
		However, span cannot have a div or p tag inside.

10. div, section & article
Question: When should you use section, div or article?
Answer: 
<section>, group of content inside is related to a single theme, 
			and should appear as an entry in an outline of the page. 
			It’s a chunk of related content, like a subsection of a long article, 
			a major part of the page (eg the news section on the homepage), 
			or a page in a webapp’s tabbed interface. 
			A section normally has a heading (title) and maybe a footer too.

<article>, represents a complete, or self-contained, composition in a document, 
			page, application, or site and that is, in principle, independently 
			distributable or reusable. 

<div>, on the other hand, does not convey any meaning, aside from any found in its class, 
			lang and title attributes.

11. svg vs canvas
Scalable Vector Graphics. 
canvas is pixel

12. multiple languages
Question: How to serve a page content in multiple languages?
Answer: CMS could be used to deliver content in different language with 
		same structure and style.

13. standard & quirks mode
Question: Difference between standard/ strict mode and quirks mode?
Answer: quirks mode in browser allows u to render page foR as old browsers. 
		This is foR backward compatibility.
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">

14. MIME type & MIME
A media type (also MIME type and content type) is a two-part identifier foR file formats 
and format contents transmitted on the Internet.
	
	As an example, an HTML file might be designated "text/html; charset=UTF-8." 
	In this example "text" is the type, "html" is the subtype, and "charset=UTF-8" is an 
	optional parameter indicating the character encoding.
	
	Common examples:
		"application/json"
		"application/x-www-form-urlencoded"
		"multipart/form-data"
		"text/html"

Multipurpose Internet Mail Extensions (MIME) is an Internet standard that extends the format of email to support.

15. XHTML & HTML5
In XHTML, all tags, once opened, must be closed. HTML is less strict.
	XHTML elements must be properly nested
	XHTML elements must always be closed
	XHTML elements must be in lowercase
	XHTML documents must have one root element
	
	Attribute names must be in lower case
	wrong: <table WIDTH="100%">
	right: <table width="100%">
	Attribute values must be quoted
	wrong: <table width=100%>
	right: <table width="100%">
	Attribute minimization is forbidden
	wrong: <input type="checkbox" name="vehicle" value="car" checked />
	right: <input type="checkbox" name="vehicle" value="car" checked="checked" />

16. semantic
Question: What is semantic HTML?
Answer: Semantic HTML, or "semantically-correct HTML", is HTML where the tags 
		used to structure content are selected and applied appropriately to the 
		meaning of the content.

Good: Search Engine Optimization, accessibility, repurposing, light code.
Many visually impaired person rely on browser speech and semantic tag helps to interpret page content clearly.
Search engine needs to understand page content to rank and semantic tag helps.

17. meta
The <meta> tag provides metadata about the HTML document. Metadata will not be displayed on the page, but will be machine parsable.
	(1)Define keywords foR search engines:
		<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

	(2)Define a description of your web page:
		<meta name="description" content="Free Web tutorials on HTML and CSS">

	(3)Define the author of a page:
		<meta name="author" content="Hege Refsnes">

	(4)Refresh document every 30 seconds:
		<meta http-equiv="refresh" content="30">

18. input
The type attribute specifies the type of <input> element to display.
The default type is: text.
Tip: This is not a required attribute, but we think you should always include it.

<input type="value">
"button"	Defines a clickable button (mostly used with a JavaScript to activate a script)
"checkbox"	Defines a checkbox
"color"	Defines a color picker
"date"	Defines a date control (year, month and day (no time))
"datetime"	The input type datetime has been removed from the HTML standard. Use datetime-local instead.
"datetime-local"	Defines a date and time control (year, month, day, hour, minute, second, and fraction of a second (no time zone)
"email"	Defines a field for an e-mail address
"file"	Defines a file-select field and a "Browse..." button (for file uploads)
"hidden"	Defines a hidden input field
"image"	Defines an image as the submit button
"month"	Defines a month and year control (no time zone)
"number"	Defines a field for entering a number
"password"	Defines a password field (characters are masked)
"radio"	Defines a radio button
"range"	Defines a control for entering a number whose exact value is not important (like a slider control)
"reset"	Defines a reset button (resets all form values to default values)
"search"	Defines a text field for entering a search string
"submit"	Defines a submit button
"tel"	Defines a field for entering a telephone number
"text"	Default. Defines a single-line text field (default width is 20 characters)
"time"	Defines a control for entering a time (no time zone)
"url"	Defines a field for entering a URL
"week"	Defines a week and year control (no time zone)


+++++++++++++++++++++++++++++++++++++++CSS+++++++++++++++++++++++++++++++++++++++

1. float
Question: What does float do?
Answer: float pushes an element to the sides of a page with text wrapped around it. 
		you can create entire page or a smaller area by using float. 
		if size of a floated element changes, text around it will re-flow to accommodate 
		the changes. You can have float left, right, none or inherit.

2. clear
Question: How can you clear sides of a floating element?
Answer: If you clear a slide of an element, floating elements will not be accepted on 
		that side. With 'clear' set to 'left', an element will be moved below any 
		floating element on the left side. clear is used to stop wrap of an element 
		around a floating element.

3. rapid fire
Question: Does css properties are case sensitive?
Answer: no.

Question: Why css selectors mixed up with cases dont apply the styles?
Answer: because, html ID and classes are case sensitive.

Question: Does margin-top or margin-bottom has effect on inline element?
Answer: no.

Question: Does padding-top or padding-bottom has effect on inline element?
Answer: no.

Question: Does padding-left or padding-right or margin-left or margin-right has effect on inline element?
Answer: yes.

Question: If you have a <p> element with font-size: 10rem, will the text be responsive when the user resizes / drags the browser window?
Answer: no.

Question: The pseudo Class:checked will select inputs with type radio or checkbox, but not <option> elements.
Answer: False
<input type="checkbox" id="ossm" name="ossm"> 
<label for="ossm">CSS is Awesome

Question: In a HTML document, the pseudo Class :root always refers to the <html> element.
Answer: True

4. units
Question: Which one would you prefer among px, em % or pt and why?
Answer: it depends on what you are trying to do.

"px" gives fine grained control and maintains alignment because 1 px or multiple of 1 px 
	is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px 
	and child 16px. child would be 16px.

"em" maintains relative size. you can have responsive fonts. em is the width of the letter 
	'm' in the selected typeface. However, this concept is tricky. 1em is equal to the 
	current font-size of the element or the browser default. if u sent font-size to 16px 
	then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal 
	to 10px). em is cascade

"%" sets font-size relative to the font size of the body. Hence, you have to set font-size 
	of the body to a reasonable size. this is easy to use and does cascade. for example, 
	if parent font-size is 20px and child font-size is 50%. child would be 10px.

"pt(points)" are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.


5. position
Question: How absolute, relative, fixed and static position differ?
Answer:

"absolute", place an element exactly where you want to place it. absolute position is 
			actually set relative to the elements parent. if no parent available then 
			relatively place to the page itself.

"relative", is position an element relative to itself (from where the element would be 
			placed, if u dont apply relative positioning). for example, if u set position 
			relative to an element and set top: 10px, it will move 10px down from where it would be normally.

"fixed", element is positioned relative to viewport or the browser window itself. 
		viewport doesnt changed if u scroll and hence fixed element will stay right in 
		the same position.

"static", element will be positioned based on the normal flow of the document. 
		usually, u will use position static to remove other position might be applied 
		to an element.

6. display vs visibility
Question: What are the differences between visibility hidden and display none?
Answer: 

"display: none" removes the element from the normal layout flow and allow other elements to fill in. 
"visibility: hidden" tag is rendered, it takes space in the normal flow but doesnt show it.


7. inline block
Question: What are the differences between inline, block and inline-block?
Answer:

"inline", elements do not break the flow. think of span it fits in the line. 
		Important points about inline elements, margin/ padding will push other 
		elements horizontally not vertically. Moreover, inline elements ignores 
		height and width.

"block", breaks the flow and dont sits inline. they are usually container like div, 
		section, ul and also text p, h1, etc.

"inline-block", will be similar to inline and will go with the flow of the page. 
		Only differences is this this will take height and width.

8. box model
Question: What are the properties related to box model?
Answer: Everything in a web page is a box where you can control size, position, background, etc. 
		Each box/ content area is optionally surrounded by padding, border and margin. 
		When you set height and width of an element, you set content height and width.

9. overflow
Question: Does overflow: hidden create a new block formatting context?
Answer: overflow property deals with the content if content size exceeds the allocated 
		size for the content. You can make extra content visible, hidden, scroll or auto.

10. media queries
The @media rule is used to define different style rules for different media types/devices.

@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

"width and height of the viewport"
"width and height of the device"
"orientation (is the tablet/phone in landscape or portrait mode?)"
"resolution"

11. pseudo Class
Question: What are the some pseudo classed u have used?
Answer: pseudo Class tells you specific state of an element. 
		allow to style element dynamically. The most popular one is :hover. 
		Besides i have used :visited, :focus, :nth-child, nth-of-type, :link, etc.

pseudo classes is better if you dont want to mess up with javaScript however, 
pseudo-classes is slow to Process and apply rules.

"pseudo elements"
pseudo elements helps you to add cosmetics contents. pseudo elements generates content 
where as pseudo Class deals with state of the element. for example, you can style
 :first-letter of every paragraph. similarly, :first-line and fancy stuff with :before, :after


12. vertical Center
Question: How do you align a p center-center inside a div?
Answer: text-align: centerwill do the horizontal alignment but vertical-align: middle 
		will not work here. there are couple of different ways to solve this problem and 
		one of them are positioning. You make the parent as relative position and child
		as absolute positioning. And then define all position parameter as zero and 
		width 50% and height 30% (sounds messy look at the example and read ref)

13. sprite
An image sprite is a collection of images put into a single image. A web page with many 
images can take a long time to load and generates multiple server requests. Using image 
sprites will reduce the number of server requests and save bandwidth.

14. specificity
Question: What is specificity? How do u calculate specificity?
Answer: is a Process of determining which css rule will be applied to an element. 
		it actually determines which rules will take precedence.

inline style usually wins then ID then Class value (or pseudo-Class or attribute selector), 
universal selector (*) has no specificity. "!important" rule overrides that particular property.

15. shadow DOM
Question: What is shadow DOM?
Answer: encapsulate part of a DOM. hide subtree. you can have same ID in different shadow DOM. 
		Polymers uses it. This way your DOM becomes reusable.

16. transition
Question: What do you know about transition?
Answer: transition allows to add an effect while changing from one style to another. 
		You can set the which property you want to transition, duration, how you want 
		to transit (linear, ease, ease-in, ease-out, cubic-bezier) and delay when 
		transition will start. you can transition more than one property by comma separation.

17. filter
Question: What are the different css filter you can use?
Answer: css filter allows u to render DOM element, image, or video. u can choose from: 
		grayscale, blur, opacity, brightness, contrast.

18.
download resources
Question: On page load, will mypic.jpg get downloaded by the browser?.
<style>
  #test2 {
    background-image: url('mypic.jpg');
    display: none;
  }

<div id="test1">
    <span id="test2">
  
Answer: yes.


Question: On page load, will mypic.jpg get downloaded by the browser?
<style>
  #test1 {
    display: none;
  }
  #test2 {
    background-image: url('mypic.jpg');
    visibility: hidden;
  }

<div id="test1">
    <span id="test2">
  
Answer: No.


+++++++++++++++++++++++++++++++++++++++DOM+++++++++++++++++++++++++++++++++++++++
1. window vs document
Question: Is there any difference between window and document?
Answer: Yes. JavaScript has a global object and everything runs under it. 
		window is that global object that holds global variables, global functions, 
		location, history everything is under it. Besides, setTimeout, ajax call 
		(XMLHttpRequest), console or localStorage are part of window.

		document is also under window. document is a property of the window object. 
		document represents the DOM and DOM is the object oriented representation of 
		the html markup you have written. All the nodes are part of document. 
		Hence you can use getElementById or addEventListener on document. These methods 
		are not present in the window object.


		window.document === document; //true
		window.getElementById; //undefined
		document.getElementById; //function getElementById() { [native code] }
      
2. window.onload vs document.onload
Question: Does document.onload and window.onload fire at the same time?
Answer: 
	window.onload is fired when DOM is ready and all the contents including images, 
	css, scripts, sub-frames, etc. finished loaded. This means everything is loaded.

	document.onload is fired when DOM (DOM tree built from markup code within the document)
	is ready which can be prior to images and other external content is loaded.

3. attribute vs property
Question: Is attribute similar to property?
Answer: attributes are just like attribute in your html tag (XML style attribute) inside 
		the starting tag. html attributes are exposed to the DOM via property. Hence, 
		a property is created when DOM is parsed for each attribute in the html tag. 
		If you change an attribute only the value of the property will change. 
		However, the value of attribute will remain same.

<input id="my-input" type="text" value="Name:">

var myInput = document.getElementById('my-input');
myInput.getAttribute('value'); //"Name:"
myInput.value; //'my dude'

4. DOM Query
Question: What are the different ways to get an element from DOM?
Answer: You can use the following methods in document

"getElementById" to get a element that has the provided Id.
"getElementsByClassName" to get a nodelist (nodelist is not an array, rather it is array-like object) by providing a Class name.
"getElementsByTagName" to get a nodelist by the provided tag name.
"querySelector" you will pass css style selector (jquery style) and this will retrurn first matched element in the DOM.
"querySelectorAll" will return a non-live nodelist by using depth-first pre order traversal of all the matched elements. 

5. Fastest way to Query DOM
Question: What is the fastest way to select elements by using css selectors?
Answer: It depends on what you are selecting. If you have an ID of an element getElmentById is the fastest way to select an element. 
		However, you should not have so many ID in you document to avoid style repetition. css Class getElementsByClassName 
		is the second quickest way to select an element

Here is the list: 

ID (#myID)
Class (.myClass)
Tag (div, p)
Sibling (div+p, div~p) //after & preceded
child (div>p)
Descendant (div p)
Universal (*)
Attribute (input[type="checkbox"])
Pseudo (p:first-child)


6. Use forEach on NodeList
Question: How come, I cannot use forEach or similar array methods on a NodeList?
Answer: Yeah. Both array and nodeList have length and you can loop through elements but they are not same object.

	Both are inherited from Object. However array has different prototype object than nodeList. 
	forEach, map, etc are on array.prototype which doesnt exist in the NodeList.prototype object. 
	Hence, you dont have forEach on a nodeList

var myNodeList = document.querySelectorAll('.my-class');
var nodesArray = Array.prototype.slice.call(myNodeList);

//use array method on nodeList
nodesArray.forEach(function(el, idx){
  console.log(idx, el);
});

7. getElementsByAttribute
Question: If you need to implement getElementByAttribute, how would you implement it?
Answer: First, get all the elements in the DOM. You can either get it by Tag Name '*' and then check whether 
		they have the particular attribute. In this case, even if attribute is null that will be captured. If you need to check the value, 
		you should be able to do it by passing one extra parameter and comparing it in the if block.


function getElementsByAttribute2(attr){
  var found = [], 
      child;

  function getNodeText(node){
      if(node && node.childNodes && node.childNodes.length){
          for(var i = 0, len = node.childNodes.length; i<len; i++){
              child = node.childNodes[i];
              if(child && child.getAttribute && child.getAttribute(attr)){
                 found.push(child);
              }
              getNodeText(child);
          }
      }
      else{
          if(node.getAttribute && node.getAttribute(attr)){
             found.push(node);
          }
     }
  }
  getNodeText(document.body);
  return found;
}

8. add Class
Question: How would you add a Class to an element by query selector?
Answer: get the element and add the classname to the classlist.


function addClass(selector, className){
   var elm = document.querySelector(selector);
   if (elm){
      elm.classList.add(className);
   }
}

9. Check Descendant
Question: How could I verify whether one element is child of another?
Answer: First check whether the passed parent is the direct parent of the child. 
		If not, keep moving upward to the root of the tree.


function isDescendant(parent, child){ 
  while(child.parentNode ){ 
    if(child.parentNode == parent)
      return true;
    else
      child = child.parentNode;
  }
  return false;
}

10. innerHTML vs appendChild
Question: What is the best way to create a DOM element? Set innherHTML or use createElement?
Answer: When you set innerHTML property, browser removes all the current children of the elements. 
Parse the string and assign the parsed string to the element as children.

var ul = document.getElementById('myList');
el.innerHTML = '<li>Only one item</li>';   

appendChild

On the other hand, while using appendChild, you create a new Element. Since you are creating it, 
browser doesnt have to parse string and there is no invalid html. And you can pass the child to 
the parent and child will be appended to the parent.

var li = document.createElement("li");
var text = document.createTextNode('Only one Item');

li.appendChild(text);
ul.appendChild(li);


11. CrateDocumentFragment
Question: What is createDocumentFragment and why you might use it?
Answer: documentFragment a very lightweight or minimal part of a DOM or a subtree of a DOM tree. 
		It is very helpful when you are manipulating a part of DOM for multiple times. 
		It becomes expensive to hit a certain portion of DOM for hundreds time. You might cause 
		reflow for hundred times.

//bad practice. you are hitting the DOM every single time
var list = ['foo', 'bar', 'baz', ... ],
    el, text;
for (var i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    document.body.appendChild(el);
}

//good practice. you causing reflow one time
var fragment = document.createDocumentFragment(),
    list = ['foo', 'bar', 'baz', ...],
    el, text;
for (var i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    fragment.appendChild(el);
}
document.body.appendChild(fragment);


12. reflow
Question: What is reflow? What causes reflow? How could you reduce reflow?
Answer:
	reflow: When you change size or position of an element in the page, all the elements 
			after it has to change their position according to the changes you made. 
			Hence, flow of the elements in the page is changed and this is called reflow.

Why reflow is bad: Reflows could be very expensive and it might have a performance hit 
			specially in the smaller devices like phone. As it might causes changes in the 
			portion (or whole) layout of the page.


Reasons to reflow: The following cases causes reflow:
	
	change layout (geometry of the page)
	resize the window
	change height/width of any element
	changing font
	change font size
	move DOM element (animation)
	adding or removing stylesheet
	calculating offset height or offset width
	display: none;

How to avoid: To avoid reflow, try to avoid doing things in the above list and some more in the below

	avoid setting multiple inline style
	apply animation to the elements that are positioned fixed or absolute
	avoid tables for layout

13. repaint
Question: What is repaint and when does this happen?
Answer: repaint happens when you change the look of an element without changing the size and shape. 
		This doesnt cause reflow as geometry of the element didnt changed.

How it happens:

	change background color
	change text color
	visibility hidden

14. DOM ready
Question: How could you make sure to run some javaScript when DOM is ready like $(document).ready?
Answer: There are four different ways

	option-1: Put your script in the last tag of html body element. DOM would be ready by the time browser hits the script tag.
	option-2: Place your code inside a DOMContentLoaded handler. This event will be fired when DOM is completely loaded.
	document.addEventListener('DOMContentLoaded', function(){   
	   //put your script here
	});
	option-3: Watch changes in the readyState of the document. And the last state is "complete" state, you can put your code there.
	document.onreadystatechange = function () {  
	  if (document.readyState == "complete") {
	    //put your script here
	  }
	}
	option-4: Search jquery source code and copy dom ready function. In that case you have a ready function that works in the older 
			browsers as well without loading the whole jquery library.


15. Event bubble
Question: What is event bubble? How does event flows?

	Capture: When you clicked, browser knows a click event occurred. 
			It starts from the window (lowest level/root of your website), 
			then goes to document, then html root tag, then body, then table... 
			its trying to reach the the as lowest level of element as possible.
			This is called capture phase (phase -1).
	Target: When browser reach the lowest level of element. In this case, you have 
			clicked on a table cell (table data) hence target would be "td" tag. 
			Then browser checks whether you have any click handler attached to this element. 
			If there is any, browser executes that click hander. 
			This is called target phase (phase -2).
	Bubbling: After firing click hander attached to "td", browser walks toward root. 
			One level upward and check whether there is any click handler 
			attached with table row ("tr" element). If there is any it will execute that. 
			Then it goes to tbody, table, body, html, document, window. 
			In this stage its moving upward and this is called event bubbling or bubbling phase (phase-3). 


16. Event Delegate
Question: How would you destroy multiple list items with one click handler?

<ul id="listToDestroy">
    <li><a href="#">first item</a></li>
    <li><a href="#">second item</a></li>
    <li><a href="#">third item</a></li>
    <li><a href="#">forth item</a></li>
    <li><a href="#">Fifth item</a></li>

document.getElementById('listToDestroy').addEventListener('click', function (e) { 
    var elm = e.target.parentNode; 
        elm.parentNode.removeChild(elm);
        e.preventDefault();
});

17. destroy button
Question: Create a button that is destroyed by clicking on it but two new buttons are created in its place.

<div id="doubleHolder">
  <button class="double">double</button>
</div>
        

document.getElementById('doubleHolder').addEventListener('click', function (e) {   
   if(e.target.classList.contains('double')){
      var btn = document.createElement('button');
      btn.setAttribute('class', 'double');
      btn.innerHTML = 'double';

      var btn2 = document.createElement('button');
      btn2.setAttribute('class', 'double');
      btn2.innerHTML = 'double';
     
      this.appendChild(btn);
      this.appendChild(btn2);
      this.removeChild(e.target);   
    }
  }); 

18. Capture all click
Question: How could you capture all clicks in a page?

Answer: You can leverage, event bubble to capture all the clicks. As all the clicks will be bubbled up to the body.

document.querySelector('body').addEventListener('click', function(e){
  console.log('body clicked', e.target);
});

//or
window.onclick =function(e){
  console.log('someone clicked', e.target)
}

19. All text in a page
Question: How can you get all the texts in a web page?
Answer: The easiest way to get all the text is to get the innerText of body tag.

document.body.innerText;


20. defer vs async
Question: What is defer and async keyword does in a script tag?
Answer: HTML parser will ignore defer and async keyword for inline script (script that does not have a src attribute).

	normal: When you have a plain script tag (no defer or async keyword), parser will pause parsing, 
			script would be downloaded and exectuted. After that parsing resume.
	defer: defer keyword in the script tag will defer the execution of the script. Hence script will be executed when DOM is available. 
			Important point is, defer is not supported by all major major browsers.
	async: If possible, set the execution of the script, asynchronously. async keyword has no effect on inline script.

+++++++++++++++++++++++++++++++++++++++JavaScript+++++++++++++++++++++++++++++++++++++++


1. null vs undefined
Question: What are the differences between null and undefined?
Answer: JavaScript has two distinct values for nothing, null and undefined.

undefined means, value of the variable is not defined. JavaScript has a global variable undefined 
		whose value is "undefined" and typeof undefined is also "undefined". Remember, undefined is 
		not a constant or a keyword. undefined is a type with exactly one value: undefined. Assigning 
		a new value to it does not change the value of the type undefined.

null means empty or non-existent value which is used by programmers to indicate “no value”. 
		null is a primitive value and you can assign null to any variable. null is not an object, 
		it is a primitive value. For example, you cannot add properties to it. Sometimes people 
		wrongly assume that it is an object, because typeof null returns "object".

Btw, null == undefined


2. == Vs ===
Question: What are the differences between == and ===?
Answer: The simplest way of saying that, == will not check types and === will check whether both sides are of same type. 
		So, == is tolerant. But under the hood it converts to its convenient type to have both in same type and then do the comparison.

=== compares the types and values. Hence, if both sides are not same type, answer is always false. 

If both operands are same type use ===
undefined == null
If one operands is string another is number, convert string to number
If one is boolean and another is non-boolean, convert boolean to number and then perform comparison
While comparing a string or number to an object, try to convert the object to a primitive type and then try to compare
Be careful while comparing objects, identifiers must reference the same objects or same array.


3. Object Equality
Question: How would you compare two objects in JavaScript?
Basics: JavaScript has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, 
		while objects like arrays, dates, and user defined objects are compared by their reference. This means it compares whether 
		two objects are referring to the same location in memory.

Answer: Equality check will check whether two objects have same value for same property. To check that, you can get the keys for 
		both the objects. If the number of properties doesnt match, these two objects are not equal. Secondly, you will check each 
		property whether they have the same value. If all the properties have same value, they are equal


function isEqual(a, b) {
    var aProps = Object.getOwnPropertyNames(a),
        bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

4. True Lies
Question: 11+ true false related questions that will trick you.

falsy: In javascript 6 things are falsy and they are- false, null, undefined, '', 0, NaN
truthy: There are only two truthy things- true and everything that is not false


5. Truthy isnt Equal to true
Question: As [] is true, []==true should also be true. right?

Answer: You are right about first part, [], empty array is an object and object is always truthy. 
		Hence, if you use if([]){console.log('its true')} you will see the log.

		However, special case about == (double equal) is that it will do some implicit coercion.
		Since left and right side of the equality are two different types, JavaScript cant compare 
		them directly . Hence, under the hood, JavaScript will convert them to compare. 
		first right side of the equality will be cooereced to a number and number of true would be 1.

		After that, JavaScript implementation will try to convert [] by usingtoPrimitive 
		(of JavaScript implementation). since [].valueOf is not primitive will use toString and will get "" 
		Now you are comparing "" == 1 and still left and right is not same type. 
		Hence left side will be converted again to a number and empty string will be 0.

		Finally, they are of same type, you are comparing 0 === 1 which will be false.

6. Extend Core Object
Question: How could you write a method on instance of a date which will give you next day?
Answer: I have to declare a method on the prototype of Date object. To get access to the current 
		value of the instance of the date, i will use this

		Date.prototype.nextDay = function(){
		  var currentDate = this.getDate();
		  return new Date(this.setDate(currentDate +1));
		}

		var date = new Date(); 
		date; //Fri May 16 2014 20:47:14 GMT-0500 (Central Daylight Time)
		date.nextDay();//Sat May 17 2014 20:47:14 GMT-0500 (Central Daylight Time)


7. bind
Question: If you want to use an arbitrary object as value of this, how will you do that?
Answer: There are at least three different ways to doing this by using bind, call and apply. 

		var monica = {
		  name: 'Monica Geller',
		  total: 400,
		  deductMontlyFee: function(fee){
		     this.total = this.total - fee;
		     return this.name + ' remaining balance is '+ this.total; 
		  }
		}
        
		var rachel = {name: 'Rachel Green', total: 1500};
		var rachelFeeDeductor = monica.deductMonthlyFee.bind(rachel, 200);

		rachelFeeDeductor(); //"Rachel Green remaining balance is 1300"
		rachelFeeDeductor(); //"Rachel Green remaining balance is 1100"
        
		bind allows you to borrow a method and set the value of this without calling the function. 
		It simply returns an exact copy of the Function with new value of this. 
		You can reuse the same Function with new value of this without harming the old one.


		var ross = {name:'Ross Geller', total:250};
		var rossFeeDeductor = monica.deductMonthlyFee.bind(ross, 25);
		rossFeeDeductor(); //"Ross Geller remaining balance is 225"
		rossFeeDeductor(); //"Ross Geller remaining balance is 200"

		rachelFeeDeductor(); //"Rachel Green remaining balance is 900"
        
Question: If an older browser dont have bind function, how will you shim it
Answer:

	Function.prototype.bind = Function.prototype.bind || function(context){
	  var self = this;
	  return function(){
	    return self.apply(context, arguments);
	  };
	}


8. arguments and call
Question: Write a simple Function to tell whether 2 is passed as parameter or not?
Basics: arguments is a local variable, available inside all functions that provides a 
		collection of all the arguments passed to the function. arguments is not an array 
		rather an array like object. It has length but doesnt have the methods like forEach, 
		indexOf, etc.
Answer: First convert arguments to an array by calling slice method on an array and 
		pass arguments. After that simply use indexOf.

	function isTwoPassed(){
	  var args = Array.prototype.slice.call(arguments);
	  return args.indexOf(2) != -1;
	}

	isTwoPassed(1,4) //false
	isTowPassed(5,3,1,2) //true

9. apply
Question: How could you use Math.max to find the max value in an array?
Answer: Use apply on Math.max and pass the array as apply takes an array of arguments. 
		Since we are not reading anything from this or using it at all. We can simply 
		pass null as first parameter.

	function getMax(arr){
	  return Math.max.apply(null, arr);  
	}
Extra: call and apply, both takes the value of this as first parameter. However, call takes a collection of arguments 
after first parameter whereas apply use an array of arguments as second parameter.

10. this
Question: What the heck is "this" in JavaScript?
Answer: At the time of execution of every function, JavaScript engine sets a property 
		to the Function called "this" which refer to the current execution context. 
		"this" is always refer to an object and depends on how Function is called. 

11. log prefix
Question: How could you set a prefix before everything you log? for example, 
		if you log('my message') it will log: "(app) my message"
Answer: Just get the arguments, convert it to an array and unshift whatever prefix you 
		want to set. Finally, use apply to pass all the arguments to console.


	function log(){
	  var args = Array.prototype.slice.call(arguments);
	  args.unshift('(app)');
	  console.log.apply(console, args);
	}

	log('my message'); //(app) my message
	log('my message', 'your message'); //(app) my message your message 


12. Scope and hoisting
Question: What will you see in the console for the following example?
	
	var a = 1; 
	function b() { 
	    a = 10; 
	    return; 
	    function a() {} 
	} 
	b(); 
	console.log(a);          
        
Answer: 1

Explanation:

Function declaration function a(){} is hoisted first and it behaves like 
		var a = function () {};. Hence in local scope variable a is created.
If you have two variables with same name (one in global another in local), 
		local variable always get precedence over global variable.
		When you set a = 10;, you are setting the local variable a , not the global one. 
		Hence, the value of global variable remain same and you get, 1 in the log. 
Extra: If you didnt have a Function named as "a", you will see 10 in the log.


13. Closures Inside Loops
Question: Look at the code below, you have a for loop if you have setTimeout inside it. 
		If log the loop counter inside setTimeout, what will be logged?

  	for(var i = 0; i < 10; i++) {
	    setTimeout(function() {
	      console.log(i);  
	    }, 10);
	}
Answer: The above will not output the numbers 0 through 9, but will simply print the number 10 ten times.

Explanation: The console log is inside the anonymous Function of setTimeout and 
			setTimeout is executed when current call stack is over. So, the loop finishes 
			and before setTimeout get the chance to execute. However, anonymous functions keep 
			a reference to i by creating a closure. Since, the loop is already finished, 
			the value i has been set to 10. When setTimeout use the value of i by reference, 
			it gets the value of i as 10. Hence, you see 10 ten times.

Solution: You can fix it by avoiding closure. it will create its own scope and you can pass i to the function. 
		In that case i will be a local variable (will not refer to i in the closure) 
		and value of the i in every loop will be preserved.

		for(var i = 0; i < 10; i++) {
		    setTimeout((function(i) {
		      console.log(i);
		    })(i), 10)
		}

Alternative Solution: Look at the code below and use your brain (if any).

		for(var i = 0; i < 10; i++) {
		  setTimeout(console.log.bind(console, i), 10);
		}

14. delete can delete but
Question: Look at the code below, I have a property in a object 
		and I am creating a new object where I am setting it to a new value. 
		If I delete that property what will i get if I try to access that property?

		var myObject = {
		    price: 20.99,
		    get_price : function() {
		        return this.price;
		    }
		};
		var customObject = Object.create(myObject);
		customObject.price = 19.99;

		delete customObject.price;
		console.log(customObject.get_price());
        
Answer: You will see 20.99

Explanation: When you create object.create(myObject) you are creating new object 
		where the myObject will be the parent of the newly created object. 
		Hence the price property will be at the parent.

		When you are assigning some value to customObject.price, you are creating 
		a new property on the child. This means, when you delete customObject.price 
		it deletes the price property in the customObject (in the child). However, 
		when you call the method getprice, first it looks for this.price in the 
		child since the customObject doesnt have price property, JavaScript executor 
		walks through the prototype chain towards the parent. Since customObject was 
		inherited from myObject and myObject has a price property, the get_price method 
		returns the price from parent. Hence, you are getting 20.99


15. Pass by value or by reference
Question: Does JavaScript pass parameter by value or by reference?
Answer: Primitive type (string, number, etc.) are passed by value and objects are passed by reference. 
		If you change a property of the passed object, the change will be affected. However, you assign 
		a new object to the passed object, the changes will not be reflected.


		var num = 10,
		    name = "Addy Osmani",
		    obj1 = {
		      value: "first value"
		    },
		    obj2 = {
		     value: "second value"
		    },
		    obj3 = obj2;
		 
		function change(num, name, obj1, obj2) {
		    num = num * 10;
		    name = "Paul Irish";
		    obj1 = obj2;
		    obj2.value = "new value";
		}
		 
		change(num, name, obj1, obj2);
		 
		console.log(num); // 10
		console.log(name);// "Addy Osmani"
		console.log(obj1.value);//"first value"
		console.log(obj2.valuee);//"new value"
		console.log(obj3.valuee);//"new value"    


16. memoization
Question: How could you implement cache to save calculation time for a recursive fibonacci function?
Answer: You could use poor mans memoization with a global variable. If fibonacci is already calculated 
		it is served from the global memo array otherwise it is calculated.

	var memo = [];
	function _fibonacci(n) {
	   if(memo[n]){    
	    return memo[n];
	   }
	   else if (n < 2){
	     return 1;
	   }else{
	     fibonacci(n-2) + fibonacci(n-1);
	   }
	}

17. Cache Function execution
Question: How could you cache execution of any function?
Answer: You could have a method where you will pass a Function and it will internally 
		maintain a cache object where calculated value will be cached. When you will 
		call the Function with same argument, the cached value will be served.


	function cacheFn(fn) {
	    var cache={};
	    
	    return function(arg){
	        if (cache[arg]){
	           return cache[arg];
	        }
	        else{
	           cache[arg] = fn(arg);
	            return cache[arg];
	        }
	    }
	}

18. JQuery style chaining
Question: If you need to implement the following chaining with call back, 
		how will you implement it?

	var obj = {   // every method returns obj---------v
	    first: function() { console.log('first');   return obj; },
	    second: function() { console.log('second'); return obj; },
	    third: function() { console.log('third');   return obj; }
	}

	obj.first().second().third();

19. Animation
Question: How could you implement moveLeft animation?
Answer: Use setInterval that will place the element to the left 
		position by some pixels in every 10ms. Hence, you will see 
		the element moving towards the desired position. When you call 
		setInterval, it returns a timeId. After reaching the desired location, 
		you have to clear the time interval so that Function will not be called 
		again and again in every 10ms.


	function moveLeft(elem, distance) {
	  var left = 0;

	  function frame() {
	    left++;
	    elem.style.left = left + 'px';

	    if (left == distance)
	      clearInterval(timeId)
	  }

	  var timeId = setInterval(frame, 10); // draw every 10ms
	}


20. Currying
Question: How would you implement currying for any functions?
What is curring: Curring is partial invocation of a function. 
		Currying means first few arguments of a Function is pre-processed and a 
		Function is returned. The returning Function can add more arguments 
		to the curried function. Its like if you have given one or two spice 
		to the curry and cooked little bit, still you can add further spice to it. 
		A simple example will look like


		function addBase(base){
		  return function(num){
		    return base + num;
		  }
		}

		var addTen = addBase(10);
		addTen(5); //15
		addTen(80); //90
		addTen(-5); //5
        
Explanation: You are creating a closure that return a function. 
	When you are curring with a new number, new number is added to the base you 
	have provided.











