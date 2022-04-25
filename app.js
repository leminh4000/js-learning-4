const form=document.querySelector('#task-form');

const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
console.log(filter);

taskInput=document.querySelector('#task');
console.log(taskInput);

function addTask(e) {
    if(taskInput.value===''){
        alert('Add a task');
    }
    const li=document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const a=document.createElement('a');
    a.className='delete-item secondary-content';
    a.innerHTML='<i class="fa fa-remove"></i>';
    li.appendChild(a);
    console.log(li);
    taskList.appendChild(li);
    taskInput.value='';
   e.preventDefault();
}

function loadEventListeners() {
    form.addEventListener('submit',addTask);

}

loadEventListeners();
