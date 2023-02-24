function validacao(){
    let email=document.getElementById("email");
    let senha=document.getElementById("senha");

    if (email.value =="dodoca@gmail.com" && senha.value =="123"){
        return true;    
    }
    else{
        alert("erro de validação");
        return false;
    }
}