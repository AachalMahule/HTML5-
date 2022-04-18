// showing profile picture
function show_profile_pic() {
    var pic_box = document.getElementById("pic-box");
    var image_name = localStorage.getItem(sessionStorage.getItem("user_mail") + "image_url");
    pic_box.style.background = "url(" + image_name + ")";
    pic_box.style.backgroundRepeat = "no-repeat";
    pic_box.style.backgroundSize = "cover";
}

show_profile_pic();

// showing company logo

function show_company_logo() {
    var logo = document.getElementById("brand");
    logo.style.backgroundImage = "url(" + localStorage.getItem("company-logo") + ")";
    logo.style.backgroundSize = "cover";
    var cmp_name = document.getElementById("brand-name");
    var string = localStorage.getItem("company");
    var company_details = JSON.parse(string);
    cmp_name.innerHTML = company_details.cmp_name;

}

show_company_logo();




//set unit of meaassure
function unit_of_measure() {
    var unit_btn = document.getElementById("unit-of-measure");
    var pri_con = document.getElementById("primary-content");
    var sec_con = document.getElementById("secondary-content");
    var close = document.getElementById("close-icon");
    var form = document.getElementById("unit-form");
    unit_btn.onclick = function() {
        this.style.webkitTransform = "rotateX(360deg)";
        this.style.transform = "rotateX(360deg)";
        this.style.webkitTransition = "1s";
        this.style.transition = "1s";
        pri_con.style.display = "none";
        setTimeout(function() {
            sec_con.style.display = "block";
            sec_con.style.webkitTransform = "rotateX(-360deg)";
            sec_con.style.transform = "rotateX(-360deg)";
            close.onclick = function() {
                unit_btn.className = "animated flipInX";

                unit_btn.innerHTML = "<i class='fa fa-balance-scale' style='font-size:25px;float:left'></i> &nbspUnit of measure";
            }

            form.onsubmit = function() {
                var input = sec_con.getElementsByTagName("INPUT");
                var Symbol = input[0].value;
                var formal_name = input[1].value;
                unit_object = { Symbol: Symbol, formal_name: formal_name };
                unit_details = JSON.stringify(unit_object);
                localStorage.setItem("unit_of_measure_" + Symbol, unit_details)
            }
        }, 500);
    }

}
unit_of_measure();

//sales voucher
function sales_voucher() {
    var sales_btn = document.getElementById("sales-btn");
    var sales_voucher = document.getElementById("sales-voucher");
    sales_btn.onclick = function() {
        sales_voucher.style.display = "block";
        sales_voucher.className = "animated slideInDown";
    }
}
sales_voucher();

//close voucher
function close_voucher() {
    var close_btn = document.getElementById("voucher-close");
    var sales_voucher = document.getElementById("sales-voucher");
    close_btn.onclick = function() {
        sales_voucher.className = "animated slideOutUp";
    }


}
close_voucher();

//show voucher details and logo
function voucher_logo_details() {
    var voucher_logo = document.getElementById("voucher-logo");
    voucher_logo.style.background = "url(" + localStorage.getItem("company-logo") + ")";
    voucher_logo.style.backgroundSize = "cover";
    var voucher_details = document.getElementById("voucher-details");
    var string = localStorage.getItem("company");
    var company_details = JSON.parse(string);
    voucher_details.innerHTML = "<div style='font-size:35px;text-transform:capitalize;font-family:Righteous;font-weight:bold'>" + company_details.cmp_name + "</div><address style='margin-bottom:5px;margine-left:2px;font-size:18px'>Venue:" + company_details.address + "</address>" + "Call:" + company_details.phone;
}
voucher_logo_details();

//adding items
function add_item() {
    var product_table = document.getElementById("product-table");
    var tr = document.createElement("TR");
    var td_item = document.createElement("TD");
    var td_price = document.createElement("TD");
    var td_qty = document.createElement("TD");
    var td_amount = document.createElement("TD");
    var td_delete = document.createElement("TD");
    var input_item = document.createElement("INPUT");
    input_item.type = "text";
    input_item.placeholder = "Item Description";
    input_item.className = "item";
    var input_price = document.createElement("INPUT");
    input_price.type = "number";
    input_price.disabled = true;
    input_price.placeholder = "0.00";
    var input_qty = document.createElement("INPUT");
    input_qty.type = "number";
    input_qty.disabled = true;
    input_qty.placeholder = "1";
    var input_amount = document.createElement("INPUT");
    input_amount.type = "number";
    input_amount.placeholder = "0.00";
    input_amount.className = "amount";
    var del_icon = document.createElement("I");
    del_icon.className = "fa fa-trash";
    del_icon.id = "delete-row";
    product_table.append(tr);
    tr.append(td_item);
    tr.append(td_price);
    tr.append(td_qty);
    tr.append(td_amount);
    tr.append(td_delete);
    td_item.append(input_item);
    td_price.append(input_price);
    td_qty.append(input_qty);
    td_amount.append(input_amount);
    td_delete.append(del_icon);
    td_delete.align = "center";
    del_icon.onclick = function() {
        var del_icon_td = this.parentElement;
        var remove_element = del_icon_td.parentElement;
        remove_element.remove();
    }
    input_amount.onkeydown = function() {

        return false;
    }
    input_amount.oncontextmenu = function() {
        return false;
    }

    input_item.oninput = function() {
        input_price.disabled = false;
        input_price.oninput = function() {
            input_qty.disabled = false;
            input_qty.oninput = function() {
                input_amount.value = input_price.value * input_qty.value;
                var amount_input = document.getElementsByClassName("amount");
                var i;
                var previous_amount = 0;
                for (i = 0; i < amount_input.length; i++) {
                    previous_amount = previous_amount + Number(amount_input[i].value);
                    document.getElementById("subtotal").innerHTML = "<i class=  'fa fa-rupee'></i>" + previous_amount;


                }
                this.onkeydown = function(event) {
                    if (event.keyCode == 13) {
                        document.getElementById("add-product").click();
                        var items = document.getElementsByClassName("item");
                        items[items.length - 1].focus();
                    }
                }
            }
        }
    }


}


function adding_item() {
    document.getElementById("add-product").onclick = function() {
        add_item();
    }
}
adding_item();

//showing date
function showing_date() {
    var date = new Date();
    var current_date = date.toLocaleDateString();
    document.getElementById("date").innerHTML += current_date;
}
showing_date();

//tax setup
function tax_setup() {
    var tax_btn = document.getElementById("tax-btn");
    var tax_link = document.getElementById("tax-link");
    var display_form = document.getElementById("tax-form");
    tax_link.onclick = function() {
        if (tax_btn.offsetHeight == 65) {
            tax_btn.style.height = "250px";
            tax_btn.style.webkitTransition = "0.5s";
            tax_btn.webkitTransition = "0.5s";
            display_form.style.display = "block";
        } else {
            tax_btn.style.height = "65px";
            tax_btn.style.webkitTransition = "0.5s";
            tax_btn.webkitTransition = "0.5s";
            display_form.style.display = "";

        }
        var tax_name = document.getElementById("tax-name");
        tax_name.onchange = function() {
            if (this.value.indexOf("tax") != -1) {
                tax.oninput = function() {
                    if (tax.value.charAt(0).indexOf("%") == -1) {
                        alert("not found");
                    } else {
                        tax.className = "animated infinite pulse";
                        tax.value = "% symbol not allowed at first place";
                        tax.style.color = "red";
                        tax.style.borderColor = "red";
                        tax.onclick = function() {
                            tax.className = "";
                            tax.value = "";
                            tax.style.color = "text";
                            tax.style.borderColor = "";

                        }
                    }
                }
            } else {
                this.className = "animated infinite pulse";
                tax_name.value = "must add  tax word";
                tax_name.style.color = "red";
                this.style.borderColor = "red";
                this.onclick = function() {
                    this.className = "";
                    tax_name.value = "";
                    tax_name.style.color = "text";
                    this.style.borderColor = "";

                }
            }
        }
    }
}
tax_setup();