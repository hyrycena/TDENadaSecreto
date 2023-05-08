function pergunta1(){
for(let i = 0; i<=100; i++){
        if(i %2 ===0){
            console.log(i)
        }
}

}

function pergunta2(array) {
    let soma = 0;
    
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    
    return soma;
  }
  
  function pergunta3(array) {
    return array.filter(function(num) {
      return num >= 0;
    });
  }



  function pergunta4(array) {
    var novoArray = [];
    
    for (var i = 0; i < array.length; i++) {
      var numero = array[i];
      var resultado = numero * 2;
      novoArray.push(resultado);
    }
    
    return novoArray;
  }
  
  

  pergunta1()

  const numeros = [1, 2, 3, 4, 5];
  
  const resultado = pergunta2(numeros);
  console.log("o reasultado da soma é" ,resultado); 




  var n = [1, -2, 3, -4, 5, -6];
  var numerosSemNegativos = pergunta3(n);
  
  console.log("numeros sem negativo",numerosSemNegativos);




  var s = [1, 2, 3, 4, 5];
  var numerosMultiplicados = pergunta4(s);
  
  console.log("numneros multiplicados",numerosMultiplicados);
