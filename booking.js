var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var email = document.getElementById("emailAddress");
var phoneno = document.getElementById("phoneNo");
var submitBtn = document.getElementById("submit-btn");
var submitBtn2 = document.getElementById("submit-btn2");

var addPassengerBtn=document.getElementById("add-passenger-btn");
var firstName2 = document.getElementById("firstName2");
var lastName2 = document.getElementById("lastName2");
var age2 = document.getElementById("age2");

var name_regex = /^[a-zA-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;



submitBtn.disabled = "true";
submitBtn2.disabled = "true";
addPassengerBtn.disabled="true";
let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false,
    "firstn2": false,
    "lastn2": false,
    "ageperson2": false
};

firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)
firstName2.addEventListener('input', validateFirstName2)
lastName2.addEventListener('input', validateLastName2)
age2.addEventListener('input', validateAge2)




function addPas(){
    
    document.querySelector("#add").style.display = "inline";
    document.querySelector("#add").style.marginTop = '100px';
    document.querySelector("#submit").style.display = "none";
    document.querySelector("#add-passenger-btn").style.display = "none";
}
function passvalues()
        {
            var fname=document.getElementById("firstName").value;
            localStorage.setItem("textvalue0",fname); 
            
            var lname=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lname);
           
            var ag=document.getElementById("age").value;
            localStorage.setItem("textvalue2",ag);
            
            var ema=document.getElementById("emailAddress").value;
            localStorage.setItem("textvalue3",ema);

            var radios = document.getElementsByName('gender');
            for (var radio of radios)
            {
                if (radio.checked) {
                    localStorage.setItem("gend",radio.value); 
                }
            }
            
            var np=1;
            localStorage.setItem("np",np);
            
      }

        function passvalues2()
        {
            var fname=document.getElementById("firstName").value;
            localStorage.setItem("textvalue0",fname); 
            
            var lname=document.getElementById("lastName").value;
            localStorage.setItem("textvalue1",lname);
           
            var ag=document.getElementById("age").value;
            localStorage.setItem("textvalue2",ag);
            
            var ema=document.getElementById("emailAddress").value;
            localStorage.setItem("textvalue3",ema);

            var radios = document.getElementsByName('gender');
            for (var radio of radios)
            {
                if (radio.checked) {
                    localStorage.setItem("gend",radio.value); 
                }
            }
            
                        
            var fname2=document.getElementById("firstName2").value;
            localStorage.setItem("textvalue4",fname2); 
            
            var lname2=document.getElementById("lastName2").value;
            localStorage.setItem("textvalue5",lname2);
           
            var ag2=document.getElementById("age2").value;
            localStorage.setItem("textvalue6",ag2);
            
            var radios = document.getElementsByName('gender1');
            for (var radio of radios)
            {
                if (radio.checked) {
                    localStorage.setItem("gend1",radio.value); 
                }
            }

            var np=2;
            localStorage.setItem("np",np);

        }


function buttonRelease(){
    var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
    if(result){
        submitBtn.removeAttribute("disabled");
        addPassengerBtn.removeAttribute("disabled");
        console.log("Submit button active");
    }
    else{
        submitBtn.disabled = "true";
        addPassengerBtn.disabled="true";
        console.log("Submit button not active");
    }
}
function buttonRelease2(){
    var result = inputValidator.firstn2 === true && inputValidator.lastn2 === true && inputValidator.ageperson2 === true ;
    if(result){
        submitBtn2.removeAttribute("disabled");
        
        console.log("Submit button active");
    }
    else{
        submitBtn2.disabled = "true";
        
        console.log("Submit button not active");
    }
}
function validateFirstName() {
    if (name_regex.test(firstName.value)) {
        valid(firstName);
        inputValidator.firstn = true;
        buttonRelease();
    }
    else {
        invalid(firstName);
        inputValidator.firstn = false;
    }
}
function validateLastName() {
    if (name_regex.test(lastName.value)) {
        valid(lastName);
        inputValidator.lastn = true;
        buttonRelease();
    }
    else {
        invalid(lastName);
        inputValidator.lastn = false;
    }
}
function validateAge() {
    if (age_regex.test(age.value)) {
        valid(age);
        inputValidator.ageperson = true;
        buttonRelease();  
    }
    else {
        invalid(age);
        inputValidator.ageperson = false;
        buttonRelease();
    }
}
function validateFirstName2() {
    if (name_regex.test(firstName2.value)) {
        valid(firstName2);
        inputValidator.firstn2 = true;
        buttonRelease2();
    }
    else {
        invalid(firstName2);
        inputValidator.firstn2 = false;
    }
}
function validateLastName2() {
    if (name_regex.test(lastName2.value)) {
        valid(lastName2);
        inputValidator.lastn2 = true;
        buttonRelease2();
    }
    else {
        invalid(lastName2);
        inputValidator.lastn2 = false;
    }
}
function validateAge2() {
    if (age_regex.test(age2.value)) {
        valid(age2);
        inputValidator.ageperson2 = true;
        buttonRelease2();  
    }
    else {
        invalid(age2);
        inputValidator.ageperson2 = false;
        buttonRelease2();
    }
}
function validateEmail() {
    if (email_regex.test(email.value)) {
        valid(email);
        inputValidator.emailid = true;
        buttonRelease();
    }
    else {
        invalid(email);
        inputValidator.emailid = false;
    }
}
function validatePhoneNo() {
    if (phone_regex.test(phoneno.value)) {
        valid(phoneno);
        inputValidator.phonenumber = true;
        buttonRelease();
    }
    else {
        invalid(phoneno);
        inputValidator.phonenumber = false;
    }
}
function valid(element){
    element.style.borderColor = "green";
    element.style.borderWidth = "thin thick";
}
function invalid(element){
    element.style.borderColor = "red";
    element.style.borderWidth = "thin thick";
}