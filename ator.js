// Variáveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)){
     yAtor -= 3;      
  }
  if (keyIsDown(DOWN_ARROW)){
     if (podeMover()) {
       yAtor += 3;
     }     
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i],           comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      retornaParaPosicaoInicial(); 
      somColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }      
    }
  }    
}

function retornaParaPosicaoInicial() {
  yAtor = 366;
}

function placarDosPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);  
}

function marcarPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    somPonto.play();
    retornaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;  
}

function podeMover() {
  return yAtor < 366;
}