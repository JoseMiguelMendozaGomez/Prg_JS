document.getElementById('taskForm').addEventListener('submit', guardarTarea);

function guardarTarea(){
let titulo = document.getElementById('tittarea').value;
let descp = document.getElementById('descrpTarea').value;


const tarea = {
titulo,
descp 
};

if (localStorage.getItem('tareas') === null) {
let tareas = [];
tareas.push(tarea);
localStorage.setItem('tareas',JSON.stringify(tareas));
} else {
let tareas = JSON.parse(localStorage.getItem('tareas'));
tareas.push(tarea);
localStorage.setItem('tareas',JSON.stringify(tareas));
}

document.getElementById('taskForm').reset();
obtenerTareas();
e.preventDefault();
}

function obtenerTareas() {
let obttarea = JSON.parse(localStorage.getItem('tareas'));
let verTarea = document.getElementById('tareasL');
verTarea.innerHTML = '';

for (let i =0; i < obttarea.length; i++){

let titulo = obttarea[i].titulo;
let descp  = obttarea[i].descp;
    verTarea.innerHTML += `<div class="card mb-3" >
<div class="card-body">
<p>${titulo} - ${descp}</p>
<a class="btn btn-danger" onclick="borrarTarea('${titulo}')">Eliminar</a>



</div>
</div>`
}
}

function borrarTarea(titulo){
let  tareas = JSON.parse(localStorage.getItem('tareas'));
for (let i = 0; i< tareas.length; i++){
    if (tareas[i].titulo == titulo) {
        tareas.splice (i,1);


    } 

}
    localStorage.setItem('tareas',JSON.stringify(tareas));
    obtenerTareas();
}

obtenerTareas();

