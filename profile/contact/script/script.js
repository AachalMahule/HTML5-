window.onload = function()
{
    var x = document.getElementById("contacts").children.length;
    if(x==0){
        document.getElementById("c-list").innerHTML = "No contact found !";

    }
}



function show_profile_pic()
{
    var pic_box = document.getElementById("pic_box");
    var image_name = localStorage.getItem(sessionStorage.getItem("user_mail")+"image_url");
    pic_box.style.background="url("+image_name+")";
    pic_box.style.backgroundRepeat="no-repeat";
    pic_box.style.backgroundSize="cover";
}
show_profile_pic();

function add_contacts()
{
var fullname = document.getElementById("fullname").value;
var pnum = document.getElementById("pnum").value;
var snum = document.getElementById("snum").value;
if(fullname != "" && pnum != "" && snum != "")
{
    if(isNaN(pnum)){
        alert("please enter a valid  primary number");
    }
    else{
        if(isNaN(snum)){
            alert("please enter a valid secondary number");
        }
        else{
                  var user = {fullname:fullname , pnum:pnum , snum:snum};
                  var user_details =JSON.stringify(user);
                  localStorage.setItem(fullname+"contact" ,user_details);
                  var form =document.getElementById("add-form");
                  form.reset();
                  document.getElementById("saved").style.display="block";
                  setTimeout(function(){document.getElementById("saved").style.display="none";},2000);
                  window.location=Location.href;
        }
    }
}
else{
    alert("some fields are empty");
}
}

function show_contact()
{
    var i;
    for(i=0 ; i<=localStorage.length ; i++)
    {
        var keys =localStorage.key(i);
        if(keys.match("contact"))
        {
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var con = document.getElementById("contacts");
            var fieldset = document.createElement("FIELDSET");
            var legend =document.createElement("LEGEND");
            var ol = document.createElement("OL");
            var li_one = document.createElement("LI");
            var li_two = document.createElement("LI");
            var trash = document.createElement("I");
            trash.setAttribute("class" , "fa fa-trash");
            trash.setAttribute("id" , "delete_icon");
            trash.setAttribute("tittle" , "Delete contact");
            con.appendChild(fieldset);
            fieldset.appendChild(legend);
            fieldset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            ol.appendChild(trash);
            legend.appendChild(document.createTextNode(json_extract.fullname));
            li_one.appendChild(document.createTextNode(json_extract.pnum));
            li_two.appendChild(document.createTextNode(json_extract.snum));
            del_contact(keys , trash);
    
           
    }
}
}
show_contact();

function del_contact(contact_name , del_btn)
{
    del_btn.onclick = function()
    {
        if(answer==true){
        var answer = confirm("Do you want to delete your contact ?");
        var ol = this.parentElement;
        fieldset.remove();
        localStorage.removeItem(contact_name);
        var x = document.getElementById("contacts").children.length;
        if(x==0){
        document.getElementById("c-list").innerHTML = "No contact found !";
        
    }
    }
    }

}

