document.querySelector('#addBtn').onclick = function(){
    if(document.querySelector('#taskBoard input').value.length == 0){
        alert("Please enter any task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskName">
                    ${document.querySelector('#taskBoard input').value}
                </span>
                <button id="deleteBtn" class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
    var cur_task = document.querySelectorAll(".delete");
    
    for(var i = 0; i < cur_task.length; i++){
        cur_task[i].onclick = function() {
            this.parentNode.remove();
        }
    }
}
