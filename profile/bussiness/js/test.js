//create company  form validation
function form_val() {
    if (localStorage.getItem("company") === null) {

        var cmp_name = document.getElementById("cmp-name");
        var mailing_name = document.getElementById("mailing-name");
        var fine_year = document.getElementById("financial-year");
        var address = document.getElementById("address");
        var number = document.getElementById("phone-number");
        var fax = document.getElementById("fax-number");
        var email = document.getElementById("email");
        var website = document.getElementById("website");
        var stock_type = document.getElementById("stock-type");
        cmp_name.onchange = function() {
            if (isNaN(this.value)) {
                mailing_name.onchange = function() {
                    if (this.value == cmp_name.value) {
                        this.value = "whoose ! Company and Mailing Name should't same ";
                        this.className = "animated infinite pulse";
                        this.style.color = "red";
                        this.style.borderColor = "red";
                        this.onclick = function() {
                            this.value = "";
                            this.className = "";
                            this.style.color = "inherit";
                            this.style.borderColor = "inherit";

                        }

                    } else {
                        if (this.value.indexOf(cmp_name.value + ".pvt.ltd") != -1 || this.value.indexOf(cmp_name.value + ".govt.ltd") != -1) {

                            fine_year.onchange = function() {
                                var current_date = new Date();
                                var selected_date = new Date(fine_year.value);
                                if (selected_date.getFullYear() >= current_date.getFullYear()) {
                                    if (selected_date.getMonth() + 1 == 4) {
                                        if (selected_date.getDate() == 1) {
                                            var cmp_details = {
                                                cmp_name: cmp_name.value,
                                                mailing_name: mailing_name.value,
                                                address: address.value,
                                                phone: number.value,
                                                fax: fax.value,
                                                email: email.value,
                                                website: website.value,
                                                fine: fine_year.value,
                                                stock_type: stock_type.value
                                            }

                                        } else {
                                            this.type = "text";
                                            this.className = "animated infinite pulse";
                                            this.style.color = "red";
                                            this.style.borderColor = "red";
                                            this.value = "whoose ! only 1st date allow";
                                            this.onclick = function() {
                                                this.className = "";
                                                this.style.color = "inherit";
                                                this.style.borderColor = "inherit";
                                                this.value = "";
                                                this.type = "date";
                                            }

                                        }


                                    } else {
                                        this.type = "text";
                                        this.className = "animated infinite pulse";
                                        this.style.color = "red";
                                        this.style.borderColor = "red";
                                        this.value = "whoose ! only fourth month allow";
                                        this.onclick = function() {
                                            this.className = "";
                                            this.style.color = "inherit";
                                            this.style.borderColor = "inherit";
                                            this.value = "";
                                            this.type = "date";
                                        }

                                    }

                                } else {
                                    this.type = "text";
                                    this.className = "animated infinite pulse";
                                    this.style.color = "red";
                                    this.style.borderColor = "red";
                                    this.value = "whoose !  passed year not allowed";
                                    this.onclick = function() {
                                        this.className = "";
                                        this.style.color = "inherit";
                                        this.style.borderColor = "inherit";
                                        this.value = "";
                                        this.type = "date";
                                    }

                                }
                            }
                        } else {
                            this.value = "Type company name .pvt.ltd or company name .govt.ltd";
                            this.className = "animated infinite pulse";
                            this.style.color = "red";
                            this.style.borderColor = "red";
                            this.onclick = function() {
                                this.value = "text";
                                this.className = "";
                                this.style.color = "inherit";
                                this.style.borderColor = "inherit";
                                this.type = "";
                            }
                        }

                    }
                }
            } else {
                this.value = "whoose ! Number is o allowed";
                this.className = "animated infinite pulse";
                this.style.color = "red";
                this.style.borderColor = "red";
                this.onclick = function() {
                    this.value = "";
                    this.className = "";
                    this.style.color = "inherit";
                    this.style.borderColor = "inherit";

                }
            }

        }
    }
}
form_val();

function createCompany() {

    var cmp_name = document.getElementById("cmp-name");
    var mailing_name = document.getElementById("mailing-name");
    var fine_year = document.getElementById("financial-year");
    var address = document.getElementById("address");
    var number = document.getElementById("phone-number");
    var fax = document.getElementById("fax-number");
    var email = document.getElementById("email");
    var website = document.getElementById("website");
    var stock_type = document.getElementById("stock-type");


    // alert(stock_type.value);
    // return false;

    var cmp_details = {
        cmp_name: cmp_name.value,
        mailing_name: mailing_name.value,
        address: address.value,
        phone: number.value,
        fax: fax.value,
        email: email.value,
        website: website.value,
        fine: fine_year.value,
        stock_type: stock_type.value
    }

    localStorage.setItem("company", JSON.stringify(cmp_details));
    localStorage.setItem("company", JSON.stringify(cmp_data));
    document.getElementById("form").innerHTML = "<center> <i class='fa fa-check' style='text-align:center;font-size:100px;color:red;'></i><br><h1 style='font-size:50px;font-famiy:sans-serif;padding:0;margine:0;text-align:center;color:yellow'>Company Created Successfully</h1><br><button id='click-here'></button></center>";
    document.getElementById("click-here").onclick = function() {
        window.location - location.href;
    }
    return false;
}