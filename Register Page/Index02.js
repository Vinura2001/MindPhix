function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Useranme*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="At least six letters*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits*";
        return false;
    }
}