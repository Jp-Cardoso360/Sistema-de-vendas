
//////// CONFIGURAÇÕES ///////////////
var total = [];
pagar = () => {
  document.querySelector(".conteiner").style = 'display: none;';
  document.querySelector(".conteinerTwo").style = 'display: inline '
}
back = () => {
  document.querySelector(".conteiner").style = 'display: inline ;';
  document.querySelector(".conteinerTwo").style = 'display: none'
}

cancelar = () => {
  document.querySelector(".cancel").style = 'display: flex'

}
sim = () => {
  total = []
  uni = 0
  document.getElementById("valor").innerHTML = 'R$00,00';
  document.getElementById("valorTwo").innerHTML = 'R$00,00';
  document.querySelector(".listaDeProdutos").innerHTML = '';
  document.getElementById("imgP").src = 'https://images.endeavor.org.br/images/posts/1658695_813131615366941_515418874_o.jpg'
  document.getElementById("codigo").value = '';
  document.querySelector("#unidades").innerHTML = '0 Unidades';
  document.querySelector("#unidadesTwo").innerHTML = '0 Unidades';
  document.querySelector(".cancel").style = 'display: none;'
  document.querySelector(".conteinerTwo").style = 'display: none'
  document.querySelector(".conteiner").style = 'display: inline ;';
  const faltante = document.getElementById("faltante").innerHTML = 'R$ 00,00'
  faltante.style = 'color: #171760;'
  const troco = document.getElementById('troco').innerHTML = 'R$ 00,00';
  const valorRecebido = document.getElementById("valorRecebido").innerHTML = 'R$ 00,00';
  let valorQr = document.getElementById('valorQr');
  document.getElementById('qr').style = 'display:none;'
  valorQr.innerHTML = '00,00';
 

}
não = () => {
  document.querySelector(".cancel").style = 'display: none;'
}
ok = () => {
  document.querySelector(".codeErrado").style = 'display: none;'
}

abrirMenu = () => {
  document.querySelector(".menu").style = 'display:flex';
}
fecharMenu = () => {
  document.querySelector(".menu").style = 'display:none;';
}
logar = () => {
  document.querySelector(".conteiner").style = 'display: none;'
  document.querySelector(".login").style = 'display: flex;'
  document.querySelector(".menu").style = 'display:none;'
  document.getElementById('parent').style = 'background-color: gainsboro;'
}
backLogin = () => {
  document.querySelector(".conteiner").style = 'display: inline;'
  document.querySelector(".login").style = 'display: none;'
  document.getElementById("erroPassword").innerHTML = "";
  document.getElementById('parent').style = 'background-color:white;'
}
entrarVendas = () => {
  document.querySelector(".conteinerTree").style = 'display: inline;'
  document.querySelector(".conteiner").style = 'display: none;'
  document.querySelector(".menu").style = 'display:none;'
}
backVendas = () => {
  document.querySelector(".conteinerTree").style = 'display: none;'
  document.querySelector(".conteiner").style = 'display: inline;' 
}
openTheList = () =>{
  document.querySelector(".listProduct").style = 'display:flex;'
   document.querySelector(".menu").style = 'display:none;'
}
closeTheList = () =>{
  document.querySelector(".listProduct").style = 'display:none;'
  document.querySelector('.suporte').style = 'display: none;'
}
pixBtn = () =>{
  document.querySelector('.pixCode').style = 'display: flex'
   document.querySelector('.di').style = 'border: none;'
   document.querySelector('.pix').style = 'border: 2px solid yellow;'
  document.querySelector('.pagamentoDinheiro').style = 'display: none'
}
dinheiroBtn = () =>{
   document.querySelector('.pixCode').style = 'display: none'
    document.querySelector('.pix').style = 'border: none;'
    document.querySelector('.di').style = 'border: 2px solid yellow;'
  document.querySelector('.pagamentoDinheiro').style = 'display: flex'
}
suporte = () =>{
   document.querySelector('.suporte').style = 'display: flex;'
}
openChat = () =>{
  document.querySelector('#chatConteiner').style = 'display: flex;'
  document.querySelector('.suporte').style = 'display: none;'
}
encerrar = () =>{
 document.querySelector('#chatConteiner').style = 'display: none;'
}
/////// adicionando valores //////
tradicionaisSoma = () => {
  total.push(15.99)
}

duettoSoma = () => {
  total.push(19.99)
}
seleçõesSoma = () => {
  total.push(17.99)
}

marviSoma = () => {
  total.push(6.99)
}
///Valor total////

unidade = () => {
  uni++
}
var uni = 0;

Buscar = () => {
  const code = document.getElementById("codigo");
  const barras = Number(code.value);
  const valor = document.getElementById("valor");
  const listDeProdutos = document.querySelector(".listaDeProdutos");
  const valorTwo = document.getElementById("valorTwo");
  const imgProduto = document.getElementById("imgP");
  const un = document.querySelector("#unidades");
  const unTwo = document.querySelector("#unidadesTwo");
  code.value = ''

  //////// imagens dos produtos///////
  function imgTradicionais() {
    imgProduto.src = 'https://oggisorvetes.com.br/wp-content/uploads/2019/09/topo-produtos-tradicionais-interna-1536x864.jpg';
  }
  function imgDuetto() {
    imgProduto.src = 'https://oggisorvetes.com.br/wp-content/uploads/2019/09/topo-produtos-duetto-interna-1536x864.jpg'
  }
  function imgSeleções() {
    imgProduto.src = 'https://oggisorvetes.com.br/wp-content/uploads/2019/09/topo-produtos-selecoes-2-interna-1536x864.jpg'
  }
  /// PROCESSO DE RECONHECIMENTO DO PRODUTO//////////
  // lista de produtos//  
  switch (barras) {
    case 7898006950206:
      let Creme = 15.99;
      listDeProdutos.innerHTML += `<li>Creme 2LT ${Creme}</li>`
      tradicionaisSoma()
      imgTradicionais()
      unidade()
      break
    case 7898006950220:
      let napolitano = 15.99;
      listDeProdutos.innerHTML += `<li>Napolitano 2LT ${napolitano}</li>`
      tradicionaisSoma()
      imgTradicionais()
      unidade()
      break
    case 7898006950237:
      let morango = 15.99;
      listDeProdutos.innerHTML += `<li>Morango 2LT ${morango}</li>`
      tradicionaisSoma()
      imgTradicionais()
      unidade()
      break
    case 432:
      let chocolateT = 19.99;
      listDeProdutos.innerHTML += `<li>Chocolate com trufa 2LT ${chocolateT}</li>`
      duettoSoma()
      imgDuetto()
      unidade()
      break
    case 436:
      let mousseDeM = 19.99;
      listDeProdutos.innerHTML += `<li>Mousse de Maracujá 2LT ${mousseDeM}</li>`
      duettoSoma()
      imgDuetto()
      unidade()
      break
    case 438:
      let leitinho = 19.99;
      listDeProdutos.innerHTML += `<li>Leitinho Trufado 2LT ${leitinho}</li>`
      duettoSoma()
      imgDuetto()
      unidade()
      break
    case 437:
      let frutasV = 19.99;
      listDeProdutos.innerHTML += `<li>Frutas Vermelhas2LT ${frutasV}</li>`
      duettoSoma()
      imgDuetto()
      unidade()
      break
    case 433:
      let churros = 19.99;
      duettoSoma()
      listDeProdutos.innerHTML += `<li>Churros Com Doce de Leite 2LT ${churros}</li>`
      imgDuetto()
      unidade()
      break
    case 446:
      let carioca = 17.99;
      listDeProdutos.innerHTML += `<li>Carioca 2LT ${carioca}</li>`
      seleçõesSoma()
      imgSeleções()
      unidade()
      break
    case 450:
      let coco = 17.99;
      listDeProdutos.innerHTML += `<li>Coco 2LT ${coco}</li>`
      seleçõesSoma()
      imgSeleções()
      unidade()
      break
    case 452:
      let chocolate = 17.99;
      listDeProdutos.innerHTML += `<li>Chocolate 2LT ${chocolate}</li>`
      seleçõesSoma()
      imgSeleções()
      unidade()
      break
    case 448:
      let flocos = 17.99;

      listDeProdutos.innerHTML += `<li>Flocos 2LT ${flocos}</li>`
      seleçõesSoma()
      imgSeleções()
      unidade()
      break
    case 449:
      let passas = 17.99;
      listDeProdutos.innerHTML += `<li>Passas ao rum 2LT ${passas}</li>`
      seleçõesSoma()
      imgSeleções()
      unidade()
      break
    case 4056:
      let casquinha = 6.99;
      listDeProdutos.innerHTML += `<li>Casquinha 10Un ${casquinha}</li>`
      marviSoma()
      unidade()
      imgProduto.src = 'https://http2.mlstatic.com/D_NQ_NP_802717-MLB45482747505_042021-O.webp'
      break
    default:
      document.querySelector(".codeErrado").style = 'display:flex;'
      break
  } var filt = total.filter(function (element) {
    return element;
  })
  var soma = filt.reduce(function (prev, curr) {
    return prev + curr;

  })
  var somaT = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  un.innerHTML = `${uni} Unidades`;
  unTwo.innerHTML = `${uni} Unidades`;
  valor.innerHTML = `${somaT}`;
  valorTwo.innerHTML = `${somaT}`;
let valorQr = document.getElementById('valorQr');
 valorQr.innerHTML = somaT;
  enviarValor = () => {
    let receberValue = document.getElementById("receberValue"); 
    let valorEntrada = Number(receberValue.value)
    var valorEntrada2 = valorEntrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    const faltante = document.getElementById("faltante")
    const troco = document.getElementById('troco');
    const valorRecebido = document.getElementById("valorRecebido");

    let soma2 = valorEntrada - soma;
    let somaTotal = soma2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
  let valorQr = document.getElementById('valorQr');

    if (soma2 < 0) {
      faltante.style = 'color: rgb(133, 3, 3);'
       troco.style = 'color: ;'
      faltante.innerHTML = `${somaTotal}`;
      valorRecebido.innerHTML = `${valorEntrada2}`;
      troco.innerHTML = 'R$ 00,00' 
      valorQr.innerHTML = somaTotal;
    }
    else {
       faltante.style = 'color:'
      valorRecebido.innerHTML = `${valorEntrada2}`;
      troco.innerHTML = `${somaTotal}`;
      troco.style = 'color: green;'
      faltante.innerHTML = 'R$ 00,00'
        valorQr.innerHTML = '00,00';
    }
  
    receberValue.value = '';
    console.log(somaTotal)
    zerar = () => {
      troco.innerHTML = "R$ 00,00"
      faltante.innerHTML = "R$ 00,00"
      valorRecebido.innerHTML = "R$ 00,00"
        faltante.style = 'color:'
        troco.style = 'color: ;'
      receberValue.value = '';
     valorQr.innerHTML = somaT
    }
  }
}

lg = () => {
  const user = document.getElementById("user");
  let password = document.getElementById("password");
  const senha = Number(password.value);
    const userId = 'jp@gmail.com';
    const senhaone = 27835651;
    abrirlogin = () =>{
       document.querySelector(".login").style = 'display: none;'
        document.querySelector(".conteiner").style = 'display: inline;'
    }
    if (user == userId) {
      if (senha == senhaone) {
       abrirlogin()
      }
    }
    else {
      document.getElementById("erroPassword").innerHTML = "Usuario ou senha incorretos!"
    }
    console.log(userId)
    console.log(senhaone)
  

  user.value = '';
  password.value = '';
}
GerarQr = () =>{
  var qr = document.querySelector(".qr");
  qr.classList.toggle("mostrar")
  var gerar = document.querySelector('.gerarQR')
gerar.classList.toggle("qrCor")

}   
