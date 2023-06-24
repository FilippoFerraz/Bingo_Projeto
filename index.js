



function CriarCartela (){

  GerarNumeros();



  var pai_das_cartelas = document.querySelector('.cartelas-geradas');

 var div_cartelas = document.createElement ('div');
 div_cartelas.className = 'Bloco2';
  
 pai_das_cartelas.appendChild(div_cartelas);

 var nome_jogador = document.createElement('h4');
 nome_jogador.innerText = "nome Jogador";

 div_cartelas.appendChild(nome_jogador);

 var tabela = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');



var thB = document.createElement ('th');
var thI = document.createElement ('th');
var thN = document.createElement ('th');
var thG = document.createElement ('th');
var thO = document.createElement ('th');

thB.innerText = 'B';
thI.innerText = 'I';
thN.innerText = 'N';
thG.innerText = 'G';
thO.innerText = 'O';

thead.appendChild(thB);
thead.appendChild(thI);
thead.appendChild(thN);
thead.appendChild(thG);
thead.appendChild(thO);



div_cartelas.appendChild(tabela)

for( var i = 0; i < 5; i++){

var tr = document.createElement ('tr');

 for( var j = 0; j < 5; j++){
  var td = document.createElement('td');
 td.innerText = 'X';
 tr.appendChild(td)
 }


tbody.appendChild(tr)
}
















tabela.appendChild(thead);
tabela.appendChild(tbody);
}

function GerarNumeros(){

  var cartela = [];

 while(cartela.length < 25){
  var aleatorio = Math.floor(Math.random()*75 
  + 1);
 if(!cartela.includes(aleatorio)){
  cartela.push(aleatorio);

 }
}



  console.log(cartela);
 return cartela;

}





  