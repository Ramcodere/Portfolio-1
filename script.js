function sendMail (){
    let parms = {
        name : document.getElementById("inputName").value, 
        email : document.getElementById("inputEmail4").value, 
        subject : document.getElementById("inputSubject").value, 
        message : document.getElementById("inputMessage").value, 

    }

    emailjs.send("service_h4ks1j7", "template_6k9csq5",parms).then (alert("Email Sent!!"))
}

let url = "mongodb+srv://Ram123:Ram123@cluster0.tzbfqo2.mongodb.net/Ram321retryWrites=true&w=majority"