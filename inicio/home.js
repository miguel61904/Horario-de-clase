let consultaO = document.getElementById("consultaH")
let seccion1 = document.getElementById("consultaHorario")
let agregarH = document.getElementById("agregarH")
let agregarP = document.getElementById("agregarProfe")
let formAgregarH = document.querySelector(".formAgregarH")
let formAgregarP = document.querySelector(".formAgregarP")
let btnCerrar = document.getElementById("cerrarvtn")
let table = document.getElementById("tabla")
let seccion2 = document.getElementById("gestionGrupos")
let seccion3 = document.getElementById("gestionProfes")
let presskey = true

let newgrupo = []
let aggHorario = [{}]
function addlist(Aid, Agrado, Agrupo, Ajornada, AnroEstu){
    aggHorario ={
        id: Aid,
        grado: Agrado,
        grupo: Agrupo,
        jornada: Ajornada,
        nroEstu: AnroEstu
    }
    newgrupo.push(aggHorario)
}


let aggProfe ={
    id: "",
    nombre: "",
    apellido: "",
    asignatura: "",
    aula: ""
}

consultaO.addEventListener("click", ()=>{
    if (presskey ==false){
        seccion1.style.display = "none"
        presskey = true
        
    }else{
        seccion1.style.display = "inline-block"
        presskey = false
        nuevoGrupo()
    }
    
})

gestionG.addEventListener("click", ()=>{
    if (presskey ==false){
        seccion2.style.display = "none"
        presskey = true
    }else{
        seccion2.style.display = "inline-block"
        presskey = false
    }
    
})

gestionP.addEventListener("click", ()=>{
    if (presskey ==false){
        seccion3.style.display = "none"
        presskey = true
    }else{
        seccion3.style.display = "inline-block"
        presskey = false
    }
    
})

agregarH.addEventListener("click", ()=>{
    formAgregarH.showModal()
})

btnCerrar.addEventListener("click", ()=>{
    let id = document.getElementById("id").value
    let grado = document.getElementById("grado").value
    let grupo = document.getElementById("grupo").value
    let jornada = document.getElementById("jornada").value
    let nestudiante = document.getElementById("nestudiante").value
    addlist(id, grado, grupo, jornada,nestudiante)
    localStorage.setItem("nuevoHorario", JSON.stringify(newgrupo))
    console.log(aggHorario)
    nuevoGrupo()
    formAgregarH.close()
})

function nuevoGrupo(){
    let table = document.getElementById("tabla");
    let cuerpotable = document.getElementById("cuerpoTabla");
    let tr = document.createElement("tr");
    let newdata = document.createElement("td");
    newdata.innerText = aggHorario.id;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggHorario.grado;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggHorario.grupo;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggHorario.jornada;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggHorario.nroEstu;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerHTML = "<button>Editar</button> <button>Eliminar</button";
    tr.appendChild(newdata);

    cuerpotable.appendChild(tr)

   table.appendChild(cuerpotable);
}



agregarP.addEventListener("click", ()=>{
   
    formAgregarP.showModal()
})

let btnProfe = document.getElementById("cerrarProfe")
btnProfe.addEventListener("click", ()=>{
    let id = document.getElementById("idProfe").value
    let nombre = document.getElementById("nombreProfe").value
    let apellido = document.getElementById("apellidoProfe").value
    let asignatura = document.getElementById("Asignatura").value
    let aula = document.getElementById("AulaProfe").value
    let nuevoprofe = [id, nombre, apellido, asignatura, aula]
    aggProfe.id = nuevoprofe[0]
    aggProfe.nombre = nuevoprofe[1]
    aggProfe.apellido = nuevoprofe[2]
    aggProfe.asignatura = nuevoprofe[3]
    aggProfe.aula = nuevoprofe[4]
    localStorage.setItem("nuevoHorario", JSON.stringify(aggProfe))
    nuevoProfe()
    formAgregarP.close()
})

function nuevoProfe(){
    let table = document.getElementById("tablaProfe");
    let cuerpotable = document.createElement("tbody");
    let tr = document.createElement("tr");
    let newdata = document.createElement("td");
    newdata.innerText = aggProfe.id;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggProfe.nombre;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggProfe.apellido;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggProfe.asignatura;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerText = aggProfe.aula;
    tr.appendChild(newdata);

    newdata = document.createElement("td");
    newdata.innerHTML = "<button>Editar</button> <button>Eliminar</button";
    tr.appendChild(newdata);

    cuerpotable.appendChild(tr)

   table.appendChild(cuerpotable);
}