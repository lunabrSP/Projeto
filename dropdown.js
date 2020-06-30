var templateUSR = `<div class="row rowuser">
                        <div class="col-md-6 comborda">
                            <h3> **NOME** </h3>
                            Racf: **RACF** <br>
                            Email: **EMAIL** <br>
                        </div>
                        
                        <div class="col-mf-4 comborda">
                            <h4>**NOMEDEPTO**</h4>
                            Unidade: **UNIDADE** <br>
                            Andar: **ANDAR**
                        </div>
                    </div>`;


var templategente = `<div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Parceiro
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="parceiro1.html">Parceiro 1</a>
<a class="dropdown-item" href="parceiro2.html">Parceiro 2</a>
<a class="dropdown-item" href="parceiro3.html">Parceiro 3</a>
</div>
`

function carregaParceiros(){

    fetch("http://localhost:8080/nomeagentes")
        .then(res => res.json())
        .then(res => preenche(res));
}

function preenche(resJson){
    console.log(resJson);
    var contSTR ="";
    for(i=0; i<resJson.length; i++){
        var user = resJson[i];

        var novaLinha = templateUSR.replace("**NOME**",user.id_agente)
                                    .replace("**LINKFOTO**",user.nome_agente);
                                            
        contSTR = contSTR + novaLinha;
    }
    document.getElementById("conteudo").innerHTML = contSTR;

}