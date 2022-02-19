//url copy and paste security

function url_secure()
{
    if(sessionStorage.length<=0)
    {
        var page = document.getElementById("profile-bg");
        page.style.display = "none";
        document.body.style.background="red";
        document.body.innerHTML="<h1>Illegal action perform</h1>"

    }
}
url_secure();



function upload_pic()
{
    var input = document.getElementById("profile-pic-upload");
    if(input.files[0].size<1000000)
    {
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function(event)
    {
        var image_url = event.target.result;
        var show = document.getElementById("upload-btn");
        show.style.background = "url("+event.target.result+")";     
        show.style.backgroundRepeat = "no-repeat";
        show.style.backgroundSize="cover";
        var icon = document.getElementById("upload-icon");
        icon.style.display = "none";

        var ficon = document.getElementById("nexticon");
        ficon.style.display="block";
        ficon.onclick = function()
        {
            localStorage.setItem(sessionStorage.getItem('user_mail') +"image_url" , image_url);
            var hide_uploadbox = document.getElementById("profile-bg");
            hide_uploadbox.style.display="none";
            window.location= location.href  ;
            
        }

    }
    }
    else{alert("please upload upto 1mb of pic");}

}
function profile_name()
{
    var result = document.getElementById("welcome");
    var user_mail= sessionStorage.getItem("user_mail");
    var user_detail = localStorage.getItem(user_mail);
    var user_data = JSON.parse(user_detail);
    var full_name = user_data.name;
    result.innerHTML=atob(full_name);
}
profile_name();

//stop showing upload
function stop_upload()
{
    if(localStorage.getItem(sessionStorage.getItem('user_mail') +"image_url") != null)
    {
        var hide_uploadbox = document.getElementById("profile-bg");
        hide_uploadbox.style.display="none";
    }
}
stop_upload();

//start coding of app-content
function showing_pic_name()
{
    var username = document.getElementById("profile-name");
    var user_mail = sessionStorage.getItem("user_mail");
    var udetail = localStorage.getItem(user_mail);
    var user_data = JSON.parse(udetail);
    var fullname= user_data.name;
    username.innerHTML= fullname;

    var pic_box = document.getElementById("profile-pic");
    var image_name = localStorage.getItem(sessionStorage.getItem("user_mail")+"image_url");
    pic_box.style.background = "url("+image_name+")";
    pic_box.style.backgroundRepeat="no-repeat";
    pic_box.style.backgroundSize="cover";
}
showing_pic_name()

//logout coding
function logout()
{alert();
    sessionStorage.clear();
    document.getElementById("profile-notice").style.display="block";
    setTimeout(function(){
        window.location="../../index.html";
    },2000);
}
