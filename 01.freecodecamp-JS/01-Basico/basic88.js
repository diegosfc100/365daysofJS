/* Testando objetos para propriedades

Às vezes é útil verificar se a propriedade de um determinado objeto existe ou não.
Podemos usar o método .hasOwnProperty(propname) de objetos para determinar se aquele objeto
tem o nome de propriedade fornecido. 
.hasOwnProperty() retorna verdadeiro ou falso se a propriedade for encontrada ou não. */

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false


/* Modifique a função checkObj para testar se um objeto passado para a função(obj) contém
uma propriedade específica (checkProp). Se a propriedade for encontrada, retorne o valor dessa propriedade.
Caso contrário, retorne "Not Found".*/ 

function checkObj(obj, checkProp) {
   if(obj.hasOwnProperty(checkProp)){
       return obj[checkProp];
     }else{
     }  return "Not Found"
   }
  


