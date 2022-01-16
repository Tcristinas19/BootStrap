let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
    txtNome.innerHTML = "Nome Inválido"
    txtNome.style.color = "red"  
} else {
    txtNome.innerHTML = "Nome Válido"
    txtNome.style.color = "green"
    nomeOk = true
}
}

function validaMensagem(){
    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.lenght >= 100){
        txtMensagem.innerHTML = "Número de caractéres inválido."
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else{
        txtMensagem.innerHTML = "Texto válido."
        txtMensagem.style.display = "none"
        nomeOk = true
    }
}

function enviar(){
    if (emailOk == true && nomeOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha os campos corretamente.")
    }
}