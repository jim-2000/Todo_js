//selector 

const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filteroption = document.querySelector('.filter-todo');



// even listener 
todobutton.addEventListener("click",addTodo);
todolist.addEventListener("click",deletCheck);
filteroption.addEventListener("click",filtertodo);

function addTodo(event){
	//
	event.preventDefault();
	
	// Todo Div 
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');
	

	// Create li 
	const newTodo = document.createElement('li');
	newTodo.innerText = todoinput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	

	// compleate button 
	const completebutton = document.createElement('button'); 
	completebutton.innerHTML = '<li class = "fas fa-check"> </li>';
	completebutton.classList.add("complete-btn");
	todoDiv.appendChild(completebutton);


	// compleate button 
	const deletbutton = document.createElement('button'); 
	deletbutton.innerHTML = '<li class = "fas fa-trash"> </li>';
	deletbutton.classList.add("trash-btn");
	todoDiv.appendChild(deletbutton);


	//appent this todo list 
	todolist.appendChild(todoDiv);
	//
	todoinput.value = "";
}

function deletCheck(e){
	const item = e.target;
	// Dlet Todo 
	if (item.classList[0] === 'trash-btn') {
		const todo = item.parentElement;
		//animation for delet item 
		todo.classList.add("fall")
		todo.addEventListener('transitionend',function (){
		todo.remove()
		});
		
	}
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle("completed")
	}
}

function filtertodo(e){
	const todos = todolist.childNodes;
	todos.forEach (function(todo){
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains('completed')) {
					todo.style.display = "flex";
				}else{
					todo.style.display = "none";
				}
				break;

		}




	})
}
