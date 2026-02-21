Answer to the question that were mentioned before:-
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans: 1.getElementById: Gets one specific element by ID.
2.getElementsByClassName: Gets a list of all elements with that class.
3.querySelector: Gets the first match only.
4.querySelectorAll: Gets a list of all matches using CSS styles.

2.How do you create and insert a new element into the DOM?
ans: Create: let div = document.createElement('div')
Insert: parent.appendChild(div); (adds it to the end) or parent.prepend(div); (adds it to the start).


3.What is Event Bubbling? And how does it work?
ans: When you click a child element, the click "bubbles up" and triggers the click event on all its parent elements, one by one, like a bubble rising in water.

4.What is Event Delegation in JavaScript? Why is it useful?
ans: Instead of putting an event listener on every single button, you put one listener on the parent element and also it saves memory{i've found this info on google:) }

5.What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault(): Stops the action.

stopPropagation(): Stops the travel.
