//fazer jogador1 digitar um numero
                
//fazer jogador2 digitar outro numero
                
//se forem iguais, mostrar mensagem 'empate' e encerrar o programa
                    
//sortear um numero entre 0 e 1   

//se o numero sorteado for 0, ganha quem escolher o numero MENOR       
            
//se o numero sorteado for 1, ganha quem escolher o numero MAIOR


















// O EXERCÍCIO RESOLVIDO ESTÁ LOGO ABAIXO, RESOLVA PRIMEIRO E DEPOIS COMPARE. //


var player1 = parseInt(prompt("Digite um número: "));

var player2 = parseInt(prompt("Digite um número: "));

if(player1 === player2){
    alert("Empate")
}else{
    var sorteio = parseInt(Math.random() * 2);

    if(sorteio == 0 ){
        if(player1 < player2){
            alert("Parabéns player1, você é o vencedor!")
        }else{ 
            alert("Parabéns player2, você é o vencedor!")
        }
    }else{
        if(player1 > player2){
            alert("Parabéns player1, você é o vencedor!")
        }else{
            alert("Parabéns player2, você é o vencedor!")
        }
    }
}