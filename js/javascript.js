/* javacript */

function validar() {

    // campo primeiro nome
    var cnome = document.forms["wmform"]["first_name"].value;
    if(cnome === ""){
        alert("Por favor, preencha o campo primeiro nome.");
        document.form.first_name.focus();
        return false;
    }

    // campo sobrenome
    var csobrenoe = document.forms["wmform"]["last_name"].value;
    if(csobrenoe === ""){
        alert("Por favor, preencha o campo sobrenome.");
        document.form.last_name.focus();
        return false;
    }

    // campo mensagem
    var cmensagem = document.forms["wmform"]["message"].value;
    if(cmensagem === ""){
        alert("Por favor, preencha o campo mensagem.");
        document.form.message.focus();
        return false;
    }

    // campo e-mail
    var cemail = document.forms["wmform"]["email"].value;
    if(cemail==="" || cemail.indexOf("@")===-1 || cemail.indexOf(".")===-1){
        alert("E-mail inválido. Por favor, informe outro e-mail!");
        document.form.email.focus();
        return false;
    }

}