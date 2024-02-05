const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.task-list');

function addTask(){
    if(taskInput.value === ''){
        alert('Kindly enter a task to be added');
    }else{
        let li = document.createElement("li");
        li.classList.add('task');

        li.innerText = taskInput.value;
        
        let span = document.createElement('span');
        span.innerText = 'X';
        span.classList.add('delete-task-btn');

        li.append(span);

        taskList.append(li);

        taskInput.value = '';
    }

    addData();
}

taskList.addEventListener('click' , (event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('active');
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }

    addData();
} , false);

function addData(){
    localStorage.setItem('data' , taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = taskList.innerHTML + localStorage.getItem('data');
}

window.addEventListener('load' , () => {showData()});