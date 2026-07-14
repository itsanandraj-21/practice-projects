let todoList=[];

function renderTodoList()
{
  let todoListHTML=``;

  for(let i=0; i< todoList.length; i++){
      const todoListobject= todoList[i];


   todoListHTML += `
   <div>${todoList.name}</div>
   <div>${todoList.dueDate}</div>
   <button onclick="deleteTodo(${i})" >Delete</button>
   `;
  }
   document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}


function addTodo() {

const todoinput = document.querySelector('.js-todo-input');
const name =todoinput.value ;

const dueDateinput = document.querySelector('.js-todo-dueDate');
const dueDate = dueDateinput.value;



todoList.push({
  name,
  dueDate 
});
renderTodoList();

todoinput.value=``;

dueDateinput.value=``;


};
 

function deleteTodo(i) {
 
  todoList.splice(i,1);

renderTodoList();
};
