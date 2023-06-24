var jogadores = [];
var numeros_sorteados = [];



function CriarCartela (jogador){

  GerarNumeros();



  var pai_das_cartelas = document.querySelector('.cartelas-geradas');

 var div_cartelas = document.createElement ('div');
 div_cartelas.className = 'Bloco2';
  
 pai_das_cartelas.appendChild(div_cartelas);

 var nome_jogador = document.createElement('h4');
 nome_jogador.innerText = jogador.nome;

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
 td.innerText = jogador.cartela[j][i];
 tr.appendChild(td)
 }


tbody.appendChild(tr)
}

tabela.appendChild(thead);
tabela.appendChild(tbody);
}

function gerarColuna(quantidade, inicio, fim ){
   var coluna = [];

   while(coluna.length < quantidade){
   var aleatorio = Math.floor(Math.random()*(fim - inicio) + inicio);
   if(!coluna.includes(aleatorio)){
   coluna.push(aleatorio);
    
   }


   }

  return coluna;


}

function GerarNumeros(){

  var cartela = [
  gerarColuna(5, 1, 15), 
  gerarColuna(5, 16, 30), 
  gerarColuna(5, 31, 45),
  gerarColuna(5, 46, 60),
  gerarColuna(5, 61, 75)];

 return cartela;

}

function inscreverJogador(){
 const nome = prompt('digite o nome do jogador:');

 if(nome.length < 4 ){
  alert('nome precisa de mais que 4 caracteres');
  return;
 }
 const cartela = GerarNumeros();

const jogador = {
 nome: nome,
 cartela: cartela

}
jogadores.push(jogador);
CriarCartela(jogador);

}

function jogar(){
  if(jogadores.length < 2){
  alert('É preciso pelo menos 2 jogadores!');
  return;
  }

  const intervalo = setInterval(function(){
   

  while(true){
    var aleatorio = Math.floor(Math.random()*75 + 1);
  if(!numeros_sorteados.includes(aleatorio)){
   numeros_sorteados.push(aleatorio);
   break;


  }


  }
  const body_numeros = document.querySelector('.sortear-numero');
  const span = document.createElement('span');
  span.innerText = aleatorio;

  body_numeros.appendChild(span);
  console.log(numeros_sorteados);
  }, 1000)
}
