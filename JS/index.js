$(document).ready(function() {
    $(".newTaskBtn").click(function() {
        $(".emptyScreen").hide();
        $(".homeScreen").hide();
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
    $(".flag").click(function() {
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

$(document).ready(function() {
    $(".newCategory").click(function() {
        $(".selectCategory").hide();
        $(".indexWrapper").hide();
        $(".addCategory").fadeIn();
    });
});

$(document).ready(function() {
    $(".tag").click(function() {
        $(".newTask").hide();
        $(".category").fadeIn();
        $(".selectCategory").fadeIn();
    });
});

$(document).ready(function() {
    $(".cancelCtg").click(function() {
        $(".addCategory").hide();
        $(".selectCategory").fadeIn();
    })
})  

$(document).ready(function() {
    $(".saveCtg").click(function() {
        $(".addCategory").hide();
        $(".selectCategory").fadeIn();
    })
}) 

$(document).ready(function() {
    $(".AddCategoryBtn").click(function() {
        $(".selectCategory").hide();
        $(".category").hide();
        $(".newTask").fadeIn();
        $(".indexWrapper").fadeIn();
    })
}) 

$(document).ready(function(){
    $(".save").click(function() {
        $(".priority").hide();
        $(".homeScreen").fadeIn();

        var nome = document.querySelector('#nomeInput').value;
        var prioridade = selectedPriority;

        if (!isNaN(prioridade) && nome.trim() !== '') {
            var taskDiv = document.createElement('div');
            taskDiv.classList.add('task');

            var checkBoxDiv = document.createElement('div');
            checkBoxDiv.classList.add('checkBox');
            var checkBoxInput = document.createElement('input');
            checkBoxInput.type = 'checkbox';
            checkBoxInput.id = 'finish';
            checkBoxInput.checked = false;
            checkBoxInput.addEventListener('change', function() {
                if (this.checked) {
                    document.querySelector('.finiTask').appendChild(taskDiv);
                } else {
                    document.querySelector('.unfinTask').appendChild(taskDiv);
                }
            });
            checkBoxDiv.appendChild(checkBoxInput);
            taskDiv.appendChild(checkBoxDiv);

            var nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            var namePara = document.createElement('p');
            namePara.textContent = nome;
            nameDiv.appendChild(namePara);

            var dateDiv = document.createElement('div');
            dateDiv.classList.add('date');

            var now = new Date();
            var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            var yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);

            var dateStr;

            if (now.toDateString() === today.toDateString()) {
                dateStr = "Today";
            } else if (now.toDateString() === yesterday.toDateString()) {
                dateStr = "Yesterday";
            } else {
                dateStr = now.getDate() + "/" + (now.getMonth() + 1);
            }

            var dateString = dateStr + " - " + now.getHours() + ":" + now.getMinutes();

            dateDiv.textContent = dateString;

            nameDiv.appendChild(dateDiv);

            taskDiv.appendChild(nameDiv);

            var classDiv = document.createElement('div');
            classDiv.classList.add('class');

            var taskCategoryDiv = document.createElement('div');
            taskCategoryDiv.classList.add('taskCategory');

            if (botaoSelecionado !== null) {
                var botaoImg = document.createElement('img');
                botaoImg.src = botaoSelecionado.imagem;
                botaoImg.alt = "Ícone selecionado";
                taskCategoryDiv.appendChild(botaoImg);
                
                var categoryNamePara = document.createElement('p');
                categoryNamePara.textContent = botaoSelecionado.categoryName;
                taskCategoryDiv.appendChild(categoryNamePara);

                taskCategoryDiv.style.backgroundColor = selectedColor;
            }

            classDiv.appendChild(taskCategoryDiv);

            var taskPriorityDiv = document.createElement('div');
            taskPriorityDiv.classList.add('taskPriority');

            if (selectedPriority !== null) {
                var priorityPara = document.createElement('p');
                priorityPara.textContent = 'Priority: ' + selectedPriority;
                taskPriorityDiv.appendChild(priorityPara);
            }

            classDiv.appendChild(taskPriorityDiv);

            taskDiv.appendChild(classDiv);

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

var selectedColor = null;
var selectedIcon = null;
var selectedCategoryId = null;
var botaoSelecionado = null;

function adicionarBotao(imagem) {
    var allCategoryDiv = document.getElementById('allCategory');
    var categoryName = document.getElementById('categoryName').value;

    var novoBotao = document.createElement('button');
    novoBotao.className = 'button';
    novoBotao.style.backgroundColor = selectedColor;

    var imagemElement = document.createElement('img');
    imagemElement.src = imagem;
    imagemElement.alt = "Ícone selecionado";
    imagemElement.style.width = '50px';
    imagemElement.style.height = '50px';
    novoBotao.appendChild(imagemElement);

    novoBotao.id = categoryName.toLowerCase().replace(/\s+/g, '-');

    novoBotao.addEventListener('click', function() {
        selectedCategoryId = this.id;
        console.log("Selected category ID:", selectedCategoryId);
        
        botaoSelecionado = {
            id: this.id,
            categoryName: categoryName,
            imagem: imagem
        };
        
        console.log("Botão selecionado:", botaoSelecionado);
    });

    var categoryBtn = document.createElement('div');
    categoryBtn.className = 'categoryBtn';
    categoryBtn.appendChild(novoBotao);

    var categoryNameParagraph = document.createElement('p');
    categoryNameParagraph.textContent = categoryName;
    categoryBtn.appendChild(categoryNameParagraph);

    allCategoryDiv.appendChild(categoryBtn);
}


function showAddCategory() {
    var addCategoryDiv = document.querySelector('.addCategory');
    addCategoryDiv.style.display = 'block';
}

function selectImage() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        var file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var image = document.createElement('img');
                image.src = e.target.result;
                image.alt = "Ícone selecionado";
                image.style.width = '50px';
                image.style.height = '50px';
                selectedIcon = e.target.result; // Atualiza a variável selectedIcon com a URL da imagem
                var iconPreviewDiv = document.querySelector('.iconPreview');
                if (iconPreviewDiv) { 
                    iconPreviewDiv.innerHTML = ''; 
                    iconPreviewDiv.appendChild(image);
                }
            };
            reader.readAsDataURL(file);
        } else {
            alert('Por favor, selecione um arquivo de imagem válido.');
        }
    };
    input.click();
}


function saveCategory() {
    var categoryNameInput = document.getElementById('categoryName');
    var categoryName = categoryNameInput.value;
    if (categoryName && selectedColor && selectedIcon) {
        adicionarBotao(selectedIcon);
        categoryNameInput.value = '';
        var iconPreviewDiv = document.querySelector('.iconPreview');
        if (iconPreviewDiv) {
            iconPreviewDiv.innerHTML = '';
        }
        var addCategoryDiv = document.querySelector('.addCategory');
        if (addCategoryDiv) {
            addCategoryDiv.style.display = 'none';
        }
        selectedColor = null;
        selectedIcon = null;
    } else {
        alert('Por favor, preencha todos os campos para salvar a categoria.');
    }
}


function selectColor(cor) {
    selectedColor = cor;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.newCategory').addEventListener('click', function() {
        showAddCategory();
    });

    document.querySelector('.saveCtg').addEventListener('click', function() {
        saveCategory();
    });
});


