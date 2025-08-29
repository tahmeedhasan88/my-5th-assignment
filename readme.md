1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
=>
getElementById is a way to select or call one element which is “id”.

getElementsByClassName is a thing by which we can select or call more then one elements like “class”.

querrySelector is a thing by which we can select one css element. here querrySelector select only first one element.
querrySelectorAll is as like as querrySelector. querrySelector select first one element but querrySelectorAll select all elements which are matched as requirement or call.


2. How do you **create and insert a new element into the DOM**?
=>
1st i will create element by
document.createElement(tagName)
then i set an attribute
setAttribute()
and lastly i insert it into DOM
with .appendChild()

3. What is **Event Bubbling** and how does it work?
=>
Event Bubbling is that when an event starts work from its target element which i clicked and then bubbles up by its parent until it reach to document.

4. What is **Event Delegation** in JavaScript? Why is it useful?
=>
Event Delegation is a technique 
by which you can attach an eventListener with a parents instead of it’s many child.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
=>
preventDefault() is a way bu which we can stop default action of an element 
but stopPropagation() is the way to stop the event from bubbling up the DOM tree.