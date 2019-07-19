let nome = (prompt('Digite seu nome .')); {
    confirm("Este é seu nome " + nome + "?");

}

let apos = window.confirm('Você é aposentado');
    if(apos){
    alert("Se você é aposentado entrada gratuita");
    }

let idade = Number(prompt('Digite sua idade .')); {
    confirm("Voce tem " + idade + " anos.");

    if (idade >= 60) {
            alert("Se você é aposentado entrada gratuita");;
        
    }
    else if(idade >=0 && idade <=12){
        alert("Sua entrada custa R$10,00.");
    }

    else if(idade >=13 && idade <=17){
        alert("Sua entrada custa R$15,00.");
    }
    else if(idade >=0 && idade <=12){
        alert("Sua entrada custa R$10,00.");
    }
    else if(idade >=18 && idade <=59){
        let estu = window.confirm("Você é estudante")
        if(estu){
            alert("Você paga meia R$17,50")
        }
        else{
            alert("Voce não é estudante então paga R$35,00")
        }
    }

}