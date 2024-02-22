var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var submitError = document.getElementById('submit-error');
var submitSuccess = document.getElementById('submit-success')

function validateName() {
    var name = document.getElementById('name').value;
    if(name.length == 0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Enter full name'
        return false;
    }

    nameError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;
    
}


function validateEmail(){
    var email = document.getElementById('email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'invalid email format';
        return false;
    }

    emailError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
    return true;
}

function validateSubject(){
   var subject = document.getElementById('subject').value;
   var required = 30;
   var left = required - subject.length;
   if(subject.length == 0){
        subjectError.innerHTML = 'subject required';
        return false;
   }
   if(left > 0){
        subjectError.innerHTML = left + 'characters left';
        return false;
   }

   subjectError.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
   return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix the errors before submiting the form';
        setTimeout(function(){ submitError.style.display = 'none';}, 3000);
        return false;
    }else if(validateName() && validateEmail() && validateSubject()){
        submitSuccess.style.display = 'block';
        submitSuccess.innerHTML = 'Your message was sent successfully';
        setTimeout(function(){ submitSuccess.style.display = 'none';}, 7000);
         return true;
    } 
}
