
function post_new_task() {
    const new_task = document.getElementById('new_task').value;
    console.log("user input task: " + new_task);

    let taskList = getListFromLocalStorage();
    addElementToListFromLocalStorage(new_task, taskList);

    console.log("save new task");
    console.log("taskList = " + taskList);

    document.location.reload();
}

function deleteAll(){
    localStorage.setItem("task_list", JSON.stringify([]));
    console.log("deleteAll");
    document.location.reload();
}

function getListFromLocalStorage(){
    if (localStorage.getItem("task_list")) {
        return JSON.parse(localStorage.getItem("task_list"));
    } else {
       return [];
    }
}

function addElementToListFromLocalStorage(element, list) {
    list.push(element);
    localStorage.setItem("task_list", JSON.stringify(list));
}

document.getElementById('btn_add_task').addEventListener("click", post_new_task);
document.getElementById('btn_del_all').addEventListener("click", deleteAll);


window.onload = () => {
    let taskList = getListFromLocalStorage();
    if (taskList.length !== 0){

        // SHOW TABLE
        document.getElementById('taskList').style.display = 'block';

        // UPDATE TABLE
        taskList.forEach(el => {
            document.getElementById("taskListTable").innerHTML += "<tr><td id='tmp'>" + el + "</td></tr>"
            document.getElementById('tmp').setAttribute('id', el);
            console.log("add new line");
            console.log(document.getElementById(el));
        });



    } else {
        // HIDE TABLE
        document.getElementById('taskList').style.display = 'none';
    }
}