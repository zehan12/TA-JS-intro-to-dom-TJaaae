/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);

// not reference
function createInputElm(label,type='text'){
  let input= document.createElement('input');
  input.type=type;
  let lab=document.createElement('label');
  lab.innerText=label;
  lab.append(input);

return lab;
}


function createInputElm(ele,type='text'){
  let elm=`<label>${ele} <input type="${type}"></label>`
  
  return elm;
  }


  function createList(arr){

    let ul=document.createElement('ul');
    for(let i=0;i<arr.length;i++){
      let li=document.createElement('li');
      li.innerText=arr[i];
      ul.append(li); 
    }
   
   return ul;
  }

  function createTodoList(arr){
    let html=`<ul> ${arr.map((todo)=>
    `<li>
     <p>${todo.name}</p>
     <input type='checkbox' ${todo.isDone?"checked":""} name="",id="">
     <span>X</span>
     </li>`
    ).join("")}
    </ul>`;
    return html;
  
  }