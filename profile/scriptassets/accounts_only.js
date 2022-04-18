// showing profile picture
function show_profile_pic(){
		var pic_box = document.getElementById("pic-box");
		var image_name = localStorage.getItem(sessionStorage.getItem("user_mail")+"image_url");
		pic_box.style.background="url("+image_name+")";
		pic_box.style.backgroundRepeat="no-repeat";
		pic_box.style.backgroundSize="cover";
}

show_profile_pic();

// showing company logo

function show_company_logo(){
	var logo = document.getElementById("brand");
	logo.style.backgroundImage="url("+localStorage.getItem("company-logo")+")";
	logo.style.backgroundSize="cover";
	var cmp_name = document.getElementById("brand-name");
	var string = localStorage.getItem("company");
	var company_details = JSON.parse(string);
	cmp_name.innerHTML = company_details.cmp_name;

}

show_company_logo();