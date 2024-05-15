const finputs = document.querySelectorAll(".form__input");
for (i = 0; i < finputs.length; i++) {
  finputs[i].addEventListener("input", updateformValue);
  finputs[i].nextElementSibling.children[1].textContent = finputs[i].getAttribute('maxl');
}

function updateformValue() {
  this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
  if (this.value.length < this.getAttribute('minl')) {
    this.parentElement.classList.add('error');
    this.parentElement.classList.remove('success');
    this.nextElementSibling.classList.remove('success');
  } else {
    this.parentElement.classList.remove('error');
    this.parentElement.classList.add('success');
    this.nextElementSibling.classList.add('success');
  }
}

function isFormEmailValid(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form__control success';
}

// start mask phone
const phone_input = document.querySelector('[data-phone-pattern]');
if (phone_input) {
  document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
      var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          e.target.value = '';
          this.parentElement.classList.add('error');
          this.parentElement.classList.remove('success');
          this.nextElementSibling.classList.remove('success');
          return;
        }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
        elem.addEventListener(ev, eventCalllback);
      }
    }
  });
}
// end mask phone

// start validate form header
const personalform = document.getElementById('personal__form');

if(personalform) {
  const lastname = document.getElementById('lastname');
  const firstname = document.getElementById('firstname');
  const surname = document.getElementById('surname');
  const dateofbirth = document.getElementById('dateofbirth');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const lastnameMin = lastname.getAttribute('minl');
  const lastnameMax = lastname.getAttribute('maxl');
  const firstnameMin = firstname.getAttribute('minl');
  const firstnameMax = firstname.getAttribute('maxl');
  const surnameMin = surname.getAttribute('minl');
  const surnameMax = surname.getAttribute('maxl');
  const dateofbirthMin = dateofbirth.getAttribute('minl');
  const dateofbirthMax = dateofbirth.getAttribute('maxl');
  const emailMin = email.getAttribute('minl');
  const emailMax = email.getAttribute('maxl');
  const phoneMin = phone.getAttribute('minl');
  const phoneMax = phone.getAttribute('maxl');
  const addressMin = address.getAttribute('minl');
  const addressMax = address.getAttribute('maxl');
  lastname.oninput = function(){
    this.value = this.value.substr(0, lastnameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  firstname.oninput = function(){
    this.value = this.value.substr(0, firstnameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  surname.oninput = function(){
    this.value = this.value.substr(0, surnameMax);
    this.value = this.value.replace(/[0-9]/g, '');
    this.value = this.value.replace(/[()!?•—@:,'";№\-_=« »<>%#~`&\/\$\^\.\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  dateofbirth.oninput = function(){
    this.value = this.value.substr(0, dateofbirthMax);
  }
  email.oninput = function(){
    this.value = this.value.substr(0, emailMax);
    this.value = this.value.replace(/[()!?•—:,'";№\-_=« »<>%#~`&\/\$\^\*\+\\\{\}\[\]\(\|]$/g, '');
  }
  phone.oninput = function(){
    this.value = this.value.substr(0, phoneMax);
  }
  address.oninput = function(){
    this.value = this.value.substr(0, addressMax);
    this.value = this.value.replace(/[()!?•—@'";№_=« »<>%#~`&\/\$\^\\*\+\\\{\}\[\]\(\|]$/g, '');
  }

  email.addEventListener('input', function () {
    const emailValid = email.value.trim();
    this.nextElementSibling.children[0].textContent = Math.max(0, Math.min(this.getAttribute('maxl'), this.value.length));
    if (this.value.length < this.getAttribute('minl')) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else if (!isFormEmailValid(emailValid)) {
      this.parentElement.classList.add('error');
      this.parentElement.classList.remove('success');
      this.nextElementSibling.classList.remove('success');
    } else {
      this.parentElement.classList.remove('error');
      this.parentElement.classList.add('success');
      this.nextElementSibling.classList.add('success');
    }
  })

  personalform.addEventListener('submit', e => {
    e.preventDefault();
    checkFormInputs();
  });
  function checkFormInputs() {
    const lastnameValue = lastname.value.trim();
    const firstnameValue = firstname.value.trim();
    const surnameValue = surname.value.trim();
    const dateofbirthValue = dateofbirth.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const addressValue = address.value.trim();
    
    if(lastnameValue !== '' && lastnameValue.length >= lastnameMin && lastnameValue.length <= lastnameMax) {
      setSuccessFor(lastname);
    } else {
      setErrorFor(lastname);
    }
    if(firstnameValue !== '' && firstnameValue.length >= firstnameMin && firstnameValue.length <= firstnameMax) {
      setSuccessFor(firstname);
    } else {
      setErrorFor(firstname);
    }
    if(surnameValue !== '' && surnameValue.length >= surnameMin && surnameValue.length <= surnameMax) {
      setSuccessFor(surname);
    } else {
      setErrorFor(surname);
    }
    if(!/^\d{4}\-\d{2}\-\d{2}$/.test(dateofbirthValue)) {
      setErrorFor(dateofbirth);
    } else if (dateofbirthValue.split("-", 1) < (new Date().getFullYear() - 1) && dateofbirthValue.split("-", 1) > (new Date().getFullYear() - 99) && dateofbirthValue !== '' && dateofbirthValue.length >= dateofbirthMin && dateofbirthValue.length <= dateofbirthMax) {
      setSuccessFor(dateofbirth);
    } else {
      setErrorFor(dateofbirth);
    }
    if(!isFormEmailValid(emailValue)) {
      setErrorFor(email);
    } else if (emailValue !== '' && emailValue.length >= emailMin && emailValue.length <= emailMax) {
      setSuccessFor(email);
    } else {
      setErrorFor(email);
    }
    if(phoneValue !== '' && phoneValue.length >= phoneMin && phoneValue.length <= phoneMax) {
      setSuccessFor(phone);
    } else {
      setErrorFor(phone);
    }
    if(addressValue !== '' && addressValue.length >= addressMin && addressValue.length <= addressMax) {
      setSuccessFor(address);
    } else {
      setErrorFor(address);
    }
    
    if(!isFormEmailValid(emailValue)) {
      setErrorFor(email);
    } else if(!/^\d{4}\-\d{2}\-\d{2}$/.test(dateofbirthValue)) {
      setErrorFor(dateofbirth);
    } else if(lastnameValue !== '' && lastnameValue.length >= lastnameMin && lastnameValue.length <= lastnameMax && 
    firstnameValue !== '' && firstnameValue.length >= firstnameMin && firstnameValue.length <= firstnameMax && 
    dateofbirthValue.split("-", 1) < (new Date().getFullYear() - 1) && dateofbirthValue.split("-", 1) > (new Date().getFullYear() - 99) && dateofbirthValue !== '' && dateofbirthValue.length >= dateofbirthMin && dateofbirthValue.length <= dateofbirthMax && 
    emailValue !== '' && emailValue.length >= emailMin && emailValue.length <= emailMax && 
    phoneValue !== '' && phoneValue.length >= phoneMin && phoneValue.length <= phoneMax && 
    addressValue !== '' && addressValue.length >= addressMin && addressValue.length <= addressMax) {
      fetch('/ajax/sendMail.php', {
        method: 'POST',
        body: JSON.stringify({
          lastnameValue: lastnameValue,
          firstnameValue: firstnameValue,
          surnameValue: surnameValue,
          dateofbirthValue: dateofbirthValue,
          emailValue: emailValue,
          phoneValue: phoneValue,
          addressValue: addressValue
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });
    }
  }
}
// end validate personalform header