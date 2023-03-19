function captureEmail(){
    let email = document.querySelector("#email").value;
    let dataEmail = [];
    if(email.length>0){
        dataEmail.push({email})
        console.log('email guardado');
        alert('Hemos recivido su peticion, pronto nos pondermos en contacto con usted')
    }else{
        console.log('Erro! no se ha guardado el email')
        alert('Ha ocurrido un error, por favor vuelva a introducir el correo electronico')
    }
}