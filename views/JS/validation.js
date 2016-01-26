

var currency_symbols = {
        'USD': '$', // US Dollar
        'EUR': '€', // Euro
        'GBP': '£', // British Pound Sterling
        'INR': '₹', // Indian Rupee

    };

function changeCurrency() {
    var x = document.getElementById("lblCurrencySymbol");
    var ddlCur = document.getElementById("ddlCurrency");

    if (currency_symbols[document.getElementsByTagName("option")[ddlCur.selectedIndex].value] !== undefined) {

        currency_name = document.getElementsByTagName("option")[ddlCur.selectedIndex].value
        x.innerText = currency_symbols[currency_name];

    }

}


function validateEmail() {

    var txtEmail = document.getElementById("txtEmail");
    var re = /\S+@\S+\.\S+/;

    var ico = document.getElementById("emailOkIco");
    ico.style.visibility = "visible";

    var txtValidEmailFlag = document.getElementById("txtValidEmailFlag");

    if (re.test(txtEmail.value)) {

        ico.src = "./ok.ico";
        ico.title = "";

        txtValidEmailFlag.value = "True";

    }
    else {


        ico.src = "notok.ico";

        ico.title = "Invalid or No email entered.Please enter email in aaa@xyz.com format"

        txtValidEmailFlag.value = "False";

    }
    ValidateInputToEnableNextButton();
}
function ValidateAmonunt(txtAmount) {

    var ico = document.getElementById("amountOkIco");
    ico.style.visibility = "visible";
    var txtValidAmountFlag = document.getElementById("txtValidAmountFlag");
    if (parseInt(txtAmount.value) > 0)
    {

        ico.src = "ok.ico";
        ico.title = "";
        txtValidAmountFlag.value="True"
    }

    else
    {
        ico.src = "notok.ico";
        ico.title = "Invalid or No amount entered.Please enter numbers only."
        txtValidAmountFlag.value = "False"
    }

    ValidateInputToEnableNextButton();

}

function SaveSelection(lblSelection)
{

    var x = document.getElementById("famTd");
    x.style.fontStyle.fontcolor = "Blue";

}

function ChangeCursor(familyTd)
{
    familyTd.style.cursor = "Pointer";
}

function ChangeColorOfFamilyText(lbl) {
           
    var lblServices = document.getElementById("lblToServices");
    var icoServices = document.getElementById("icoSendToServices");
    var ico = document.getElementById("icoSendToFamily");
    ico.style.visibility = "visible";

    icoServices.style.visibility = "hidden";
    lblServices.style.color = 'Black';
    lbl.style.color = 'Red';
    document.getElementById("txtValidServiceFlag").value= "True";

    document.getElementById("txtServiceVal").value = "ToFamily";

    ValidateInputToEnableNextButton();

}

function ChangeColorOfServiceText(lbl) {

         
    var lblFamily = document.getElementById("lblToFamily");
    var icoServices = document.getElementById("icoSendToServices");
    var icoFamily = document.getElementById("icoSendToFamily");


    icoFamily.style.visibility = "hidden";
    icoServices.style.visibility = "visible";


    lblFamily.style.color = 'Black';
    lbl.style.color = 'Red';

    document.getElementById("txtValidServiceFlag").value = "True";
    //If money is sent to services flag will be 1 to apply services charges.
    document.getElementById("txtServiceVal").value = "ToServices";
   
    ValidateInputToEnableNextButton();

}

function ClearFormContent() {


    var lblServices = document.getElementById("lblToServices");
    var lblFamily = document.getElementById("lblToFamily");
    var icoServices = document.getElementById("icoSendToServices");
    var icoFamily = document.getElementById("icoSendToFamily");
    var txtEmail = document.getElementById("txtEmail");
    var txtAmount = document.getElementById("txtAmount");
    var icoAmount = document.getElementById("amountOkIco");
    var icoEmail = document.getElementById("emailOkIco");
    var icoEmail = document.getElementById("emailOkIco");
    var txtMessage = document.getElementById("txtMessage");
    var ddlCurrency = document.getElementById("ddlCurrency");
    var lblCurrencySymbol = document.getElementById("lblCurrencySymbol");

    var txtValidEmailFlag = document.getElementById("txtValidEmailFlag");
    var txtValidAmountFlag = document.getElementById("txtValidAmountFlag");
    var txtValidServiceFlag = document.getElementById("txtValidServiceFlag");

  
    txtEmail.value = "";
    icoEmail.style.visibility = "hidden";

    txtAmount.value = "";
    icoAmount.style.visibility = "hidden";


    txtMessage.value = "";

    lblServices.style.color = 'Black';
    lblFamily.style.color = 'Black';
    icoFamily.style.visibility = "hidden";
    icoServices.style.visibility = "hidden";
    ddlCurrency.selectedIndex = 0;
    lblCurrencySymbol.textContent = "$";
    txtValidEmailFlag.value = "False";
    txtValidServiceFlag.value = "False";
    txtValidAmountFlag.value = "False";
   
}
function ValidateInputToEnableNextButton()
{
         
           
    var txtValidServiceFlag = document.getElementById("txtValidServiceFlag");
    var txtValidEmailFlag = document.getElementById("txtValidEmailFlag");
    var txtValidAmountFlag = document.getElementById("txtValidAmountFlag");
            
    
     
    if(txtValidEmailFlag.value=="True" && txtValidAmountFlag.value=="True" && txtValidServiceFlag.value=="True")
    {
                     
        document.getElementById('btnNext').removeAttribute("disabled");
               
    }
    else
    {
              
        document.getElementById("btnNext").setAttribute("disabled");
    }
}

//This function is not used as services cahrges are applied at server side  but can be used if service charges has to be applied at client side.
function ApplyCharges() {
             
  var txtAmount = document.getElementById("txtAmount");
    var a = document.getElementById("txtServiceVal");
    if (parseInt(a.value)==1)
    {
    
        var val = parseInt(txtAmount.value) + ((parseInt(txtAmount.value) * 2) / 100);
        document.getElementById("txtServiceVal").value = val
       
    }
    else
    {

        document.getElementById("txtServiceVal").value=txtAmount.value;
       
    }
               
              
}
        


