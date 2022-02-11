// start signup coding
function sign_up()
{alert();
    var name =btoa(document.getElementById("name").value);
    var email = btoa(document.getElementById("email").value);
    var mobile = btoa(document.getElementById("mobile").value);
    var password = btoa(document.getElementById("password").value);

    if(name !="" && email !="" && mobile!= "" && password != "")
    {
        var user_input = {name:name , email:email , mobile:mobile , password:password};
        var user_data= JSON.stringify(user_input);
        localStorage.setItem(email,user_data);
        document.getElementById("signup_success").innerHTML="sign up success";
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("mobile").value="";
        document.getElementById("password").value="";
        setTimeout(function(){document.getElementById("signup_success").innerHTML=""},2000)
       
        return false;
    }
    
}
function user_existed()
{
    var email= btoa(document.getElementById("email").value);
    if(localStorage.getItem(email) != null)
    {
        document.getElementById("user-found").innerHTML = "user already existed";
        document.getElementById("mobile").disabled=true;
        document.getElementById("password").disabled=true;
        document.getElementById("signup").disabled=true;
        document.getElementById("email").style.background="black";
        document.getElementById("email").style.color="white";
        document.getElementById("email").classList.add("swing");
        document.getElementById("email").onclick = function()
            {
                this.value="";
                this.style.background="";
                this.style.color=""; 
                document.getElementById("user-found").innerHTML = "user already existed";       
                document.getElementById("mobile").disabled=false;
                document.getElementById("password").disabled=false;
                document.getElementById("signup").disabled=false;    

            }
         }
}
// start user login coding

function login(){
var password = btoa(document.getElementById("passwd").value);
var username = btoa(document.getElementById("uname").value);
var login_input = {username:username , password:password};
var login_data = JSON.stringify(login_input);
sessionStorage.setItem(username , login_data);
var session_data = sessionStorage.getItem(username);
var user_detail = JSON.parse(session_data);
if(localStorage.getItem(user_detail.username) == null)
{
    alert("user not found");
}
else{
    if(localStorage.getItem(user_detail.username).match(user_detail.password))
    {
        location.replace("profile/profile.html");
        sessionStorage.setItem('user_mail' , username);
        return false;
        
        
    }
    else
    {
        alert("password not match");
    }
}
}