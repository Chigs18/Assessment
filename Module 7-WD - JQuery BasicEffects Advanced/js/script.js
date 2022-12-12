

function validate(){
    var fname = document.reg_form.fname;
    var letters = /^[A-Za-z]+$/;

    var lname = document.reg_form.lname;
    var email = document.reg_form.email;
    var mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mobile = document.reg_form.mobile;
    var phone = /^\d{10}$/;
    var gender =  document.reg_form.gender;
    var birthdate =  document.reg_form.birthdate;
    var address =  document.reg_form.address;
    var city =  document.reg_form.city;
    var pin = document.reg_form.pin;
    var pinno = /^\d{6}$/;
    var state =  document.reg_form.state;
    var qualification = document.reg_form.qualification;
    var checkbox = document.forms["reg_form"]["check"];
    var password = document.reg_form.password;
    var psd = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
   console.log(fname.value.match(letters))
    if(fname.value=="" || fname.value.length <3 || fname.value.match(letters)==null ){
        
        alert('First name is required with minimum 3 char and only char allow');
        fname.focus();
        return false;
    }


    if(lname.value=="" || lname.value.length <3 || lname.value.match(letters)==null ){
        
        alert('Last name is required with minimum 3 char and only char allow');
        lname.focus();
        return false;
    }
// debugger;
    if(email.value=="" || !email.value.match(mail)){
        
        alert('email is required, Valid email required');
        email.focus();
        return false;
    }

    if(mobile.value=="" || !mobile.value.match(phone)){
        
        alert('mobile is required, Valid email required');
        mobile.focus();
        return false;
    }

    if(gender.value==""){
        
        alert('please select gender');
       
        return false;
    }

    if(birthdate.value==""){
        
        alert('Please enter birthdate');
        birthdate.focus();
        return false;
    }

    if(address.value==""){
        
        alert('Please enter address');
        address.focus();
        return false;
    }

    if(city.value=="" || city.value.match(letters)==null ){
        
        alert('Please enter city name, it only allows character');
        city.focus();
        return false;
    }

    if(pin.value=="" || !pin.value.match(pinno)){
        
        alert('pin is required, must contains it 6 char');
        pin.focus();
        return false;
    }

    if(state.value=="" || state.value.match(letters)==null ){
        
        alert('Please enter state name, it only allows character');
        state.focus();
        return false;
    }

    if(qualification.value=="-1" ){
        
        alert('Please select Qualification');
        qualification.focus();
        return false;
    }

    if (
        checkbox[0].checked == false &&
        checkbox[1].checked == false &&
        checkbox[2].checked == false
      ) {
        alert("Please Select checkbox");
        
        return false;
      } 

      if(password.value=="" || !password.value.match(psd)){
        
        alert('password is required, Valid password required');
        password.focus();
        return false;
    }

    return true;
   
}