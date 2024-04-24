$(document).ready(function() {
    $(".newTaskBtn").click(function() {
        $(".emptyScreen").hide();
        //$(".overlay").fadeIn();
        $(".newTask").fadeIn();
    });
});

$(document).ready(function() {
    $(".send").click(function() {
        $(".newTask").hide();
        //$(".overlay").fadeIn();
        $(".priority").fadeIn();
    });
});

$(document).ready(function() {
    $(".cancel").click(function() {
        $(".priority").hide();
        $(".homeScreen").fadeIn();
    });
});

$(document).ready(function(){
    $(".save").click(function() {
        $(".priority").hide();
        $(".homeScreen").fadeIn();

        var nome = document.querySelector('#nomeInput').value;
        var prioridade = selectedPriority;

        if (!isNaN(prioridade) && nome.trim() !== '') {
            var taskDiv = document.createElement('div');
            taskDiv.classList.add('task');
            taskDiv.textContent = nome + prioridade;

            document.querySelector('.unfinTask').appendChild(taskDiv);
        }
    });
});

var selectedPriority = null;

function toggleButton(priority) {
    var buttons = document.querySelectorAll('.prtBtn');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });
    var btn = document.querySelector('.prtBtn' + priority);
    btn.classList.add('selected');
    selectedPriority = priority;
}



function savePriority() {
    if (selectedPriority !== null) {
        console.log('Priority selected:', selectedPriority);
        selectedPriority = null;
    } else {
        console.log('No priority selected.');
    }
}

function renderTaskList() {
    console.log("passou");
    taskList.sort((a, b) => a.prioridade - b.prioridade);

    var finiTaskDiv = document.querySelector('.finiTask');
    var unfinTaskDiv = document.querySelector('.unfinTask');
    
    finiTaskDiv.innerHTML = '';
    unfinTaskDiv.innerHTML = '';

    taskList.forEach(function(task, index) {
        var taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.textContent = task.nome + ' - Prioridade: ' + task.prioridade;

        var finishCheckbox = document.createElement('input');
        finishCheckbox.setAttribute('type', 'checkbox');
        finishCheckbox.checked = task.finalizada;
        finishCheckbox.addEventListener('change', function() {
            taskList[index].finalizada = !taskList[index].finalizada;
            renderTaskList();
        });
        taskDiv.appendChild(finishCheckbox);

        if (task.finalizada) {
            finiTaskDiv.appendChild(taskDiv);
        } else {
            unfinTaskDiv.appendChild(taskDiv);
        }
    });
}
