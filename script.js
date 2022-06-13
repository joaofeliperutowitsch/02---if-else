let nome = "rammos"
let captcha = "humano"
let idade = 20
let aniversario = "maio"

if (idade > 18){
    console.log("bem vindo ao nosso site")
} else{
    console.log("Esse site e para maiores de 18 anos. volte quando ter 19 anos")
}

if((idade > 18) && (captcha === "humano")){
    console.log ("Você é um humano maior de idade. Parabéns Pode passar.")
} else{
    console.log ("Tente novamente se você não e um robô.")
}

if((aniversario === "janeiro") || (aniversario === "dezembro")){
    console.log (`Você nasceu em ${birthday}. Parabéns!`)
} else{
    console.log (`Poxa você não nasceu em dezembro ou janeiro. mas você é de ${aniversario}. Parabéns!`)
}