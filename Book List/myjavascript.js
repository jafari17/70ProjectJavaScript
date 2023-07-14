const inputText = document.querySelector("#add-book input")
const link = document.querySelector(".button")
const ul = document.querySelector("ul")
const checkBox = document.querySelector('#hide input')
const spanDelete = `<span class="delete">حذف</span>`

link.addEventListener('click', function(e){
    const spanName = document.createElement("span")
    spanName.className = 'name'
    spanName.textContent = inputText.value;

    const li = document.createElement('li')

    li.appendChild(spanName)

    li.innerHTML += spanDelete
    ul.appendChild(li)

    storeToLocalStorage(inputText.value)
    
    inputText.value = ''
    e.defaultPrevented
})

ul.addEventListener('click', function(e){
    if(e.target.className === 'delete'){
        console.log(e.target.parentElement.children[0].textContent)
        e.target.parentElement.remove()
        removeFromLocalStorage(e.target.parentElement.children[0].textContent)
    }
    
})


document.addEventListener('DOMContentLoaded', function(e){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else  {
        tasks = localStorage.getItem('tasks').split(',');
    }
    for(item of tasks){

        const spanName = document.createElement("span")
        spanName.className = 'name'
        spanName.textContent = item ;

        const li = document.createElement('li')

        li.appendChild(spanName)

        li.innerHTML += spanDelete
        ul.appendChild(li)

    }

})

checkBox.addEventListener('change', function(e){
    if(checkBox.checked === true){

        ul.style.display = 'none';
    }else{

        ul.style.display = 'block';
    }
});

function storeToLocalStorage(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else  {
        tasks = localStorage.getItem('tasks').split(',');
    }

    tasks.push(task)
    localStorage.setItem('tasks', tasks)
    }

function removeFromLocalStorage(task){

    let tasks
    if(localStorage.getItem('tasks') === null){
        tasks = []
    }else  {
        tasks = localStorage.getItem('tasks').split(',');
    }

    for(i=0; i<tasks.length; i++){
        if(tasks[i] === task){
            tasks.splice(i,1);
        }
    }

    if (tasks.length === 0){
        localStorage.clear();
    } else {
        localStorage.setItem('tasks' , tasks);
    }

}


console.log(inputText)