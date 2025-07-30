let participantes = [];
function validarParticipante(participante) {
    if (participante === "") {
        alert("El campo no puede estar vacío");
        return false;
    }
    if (participantes.includes(participante)) {
        alert("El participante ya está registrado");
        return false;
    }
    return true;
}
function mostrarParticipante() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    if (participantes.length != 0) {
        for (let i = 0; i < participantes.length; i++) {
            let li = document.createElement("li");
            li.textContent = participantes[i];
            lista.appendChild(li);
        }
    }
}

function agregarAmigo(name) {
    let participante = document.querySelector("#amigo").value;
    if (validarParticipante(participante)) {
        document.querySelector("#amigo").value = "";
        participantes.push(participante);
        if(participantes.length == 1)
        {
            document.getElementById("resultado").innerHTML = ""
        }
        mostrarParticipante();
    }
    return;
}

function sortearAmigo()
{
    let indice = 0;
    if(participantes.length != 0)
    {
        indice = parseInt(Math.random()*participantes.length);
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${participantes[indice]}`;
        participantes = [];
        mostrarParticipante();
    }
}
