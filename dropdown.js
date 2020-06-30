var tptDDLBegin = `<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">`
var tptDDLEnd = `</div>`
var templateAgente = `<a class="dropdown-item" href="dashboard.html?id=**IDAGENTE**">**NOMEAGENTE**</a>`

function carregaParceiros(){
    fetch("http://localhost:8080/nomeagentes")
        .then(res => res.json())
        .then(res => preenche(res)); }

function preenche(resJson){
    var contAgente ="";
    for(i=0; i<resJson.length; i++){       
        var agente = resJson[i];
        contAgente = contAgente + templateAgente.replace("**IDAGENTE**",agente.id_agente).replace("**NOMEAGENTE**", agente.nome_agente);
        console.log("debug " + contAgente);
    }
    console.log("debug 2" + tptDDLBegin + contAgente + tptDDLEnd);
    document.getElementById("conteudo").innerHTML = tptDDLBegin + contAgente + tptDDLEnd;
}