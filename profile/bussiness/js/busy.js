//display company name
function check_cmp() {
    if (localStorage.getItem("company") != null) {
        document.getElementById("model").remove();
        var key_data = localStorage.getItem("company");
        var cmp_data = JSON.parse(key_data);
        var brand_name = document.getElementById("create");
        brand_name.innerHTML = cmp_data.cmp_name;
        brand_name.style.color = "red";
        brand_name.style.fontFamily = "Righteous";
        var upload = document.getElementById("company-icon");
        upload.className = "fa fa-upload animated infinite flash";
        upload.title = "Upload company logo";
        upload.onclick = function() {
            var input = document.createElement("INPUT");
            input.type = "file";
            input.accept = "images/*";
            input.click();
            input.onchange = function() {
                if (this.files[0].size > 51200) {
                    var upload_notice = document.getElementById("upload-notice");
                    upload_notice.className = "fa fa-warning";
                    upload_notice.innerHTML = "upload less than 512kb image";
                } else {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function() {
                        //alert(reader.result); //property of filereader()
                        localStorage.setItem("company-logo", reader.result);
                        window.location = location.href;
                    }
                }
            }
        }
        brand_name.onclick = function() {
            window.location = "business_assest/accounts_only.html";
        }
    }
}
check_cmp();

//show company logo
function show_company_logo() {
    var upload = document.getElementById("company-icon");
    if (localStorage.getItem("company-logo") != null) {
        upload.className = "";
        upload.style.background = "url(" + localStorage.getItem("company-logo") + ")";
        upload.style.backgroundSize = "cover";
        upload.onclick = function() {
            return false;
        }
    }

}
show_company_logo();

//delete company
function delete_company() {
    var del = document.getElementById("delete");
    del.onclick = function() {
        var del_notice = document.getElementById("delete-notice");
        if (localStorage.getItem("company") != null) {
            del_notice.style.display = "block";
            del_notice.className = "animated fadeInDown";


            var ok_btn = document.getElementById("ok-btn");
            ok_btn.onclick = function() {
                localStorage.removeItem("company");
                localStorage.removeItem("company-logo");
                window.location = location.href;
            }
            var cancle = document.getElementById("cancle-btn");
            cancle.onclick = function() {
                del_notice.style.display = "none";
            }

        } else {
            del_notice.style.display = "block";
            del_notice.className = "animated fadeInDown";
            del_notice.innerHTML = "No compant found";
            setTimeout(function() {
                del_notice.style.display = "none";
            }, 3000);
        }
    }
}
delete_company();

//logout coding
function logout() {
    var log_out = document.getElementById("logout");
    log_out.onclick = function() {
        sessionStorage.clear();
        var logout_notice = document.getElementById("logout-notice");
        logout_notice.style.display = "block";
        setTimeout(function() {
            window.location = "../../index.html";
        }, 2000)

    }
}
logout();

//show profile pic
function show_profile_pic() {
    var pic_box = document.getElementById("pic-box");
    var image_name = localStorage.getItem(sessionStorage.getItem("user_mail") + "image_url");
    pic_box.style.background = "url(" + image_name + ")";
    pic_box.style.backgroundRepeat = "no-repeat";
    pic_box.style.backgroundSize = "cover";

}
show_profile_pic();

//button hover effect 
function button_hover_effect() {
    var button = document.getElementsByTagName("BUTTON");
    var i;
    for (i = 0; i < button.length; i++) {

        button[i].onmouseover = function() {
            this.className = "animated pulse";
        }

        button[i].onmouseout = function() {
            this.className = "";
        }
    }

}
button_hover_effect();
//open create company form
function open_form() {
    var button = document.getElementsByTagName("BUTTON")[0];
    var model = document.getElementById("model");
    button.onclick = function() {
        if (model.offsetHeight == 0) {
            model.style.display = "block";
            model.style.height = "440px";
            model.className = "animated fadeInDown";
            this.innerHTML = "Close Form";
        } else {
            model.className = "animated fadeOut";
            model.style.height = "  0";
            this.innerHTML = "Create Company";
        }
    }
}
open_form();