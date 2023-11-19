alert  ("Adivinhe o número que estou pensando de 0 a 10")
const pergunta = prompt("Qual número estou pensando?:")
let número = Math.floor(Math.random() * (10 - 0 + 1) + 0);

if(pergunta == número){
    alert ("Boa!Você conseguiu!");
}
else if (pergunta != número){
    const erro1 = prompt ("Que pena! Você errou! tem mais 2 chances:");
    if(erro1 == número){
        alert ("Parabéns conseguiu acertar!!");
    }
    else if (erro1 != número){
        const erro2 = prompt ("Eita! você errou, última chance!:");
        if(erro2 == número){
            alert ("Você conseguiu acertar, nice!")
        }
        else if (erro2 != número){
            alert ("Acabaram suas chances rode o código novamente e tente adivinhar!")
        }
    }
}