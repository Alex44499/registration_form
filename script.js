const pw = document.querySelector('#user_password')
const pwC = document.querySelector('#user_password_confirmation')
const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector('#user_email')
const tel = document.querySelector('#user_phone_number')
const pwError = document.querySelector('#password-error')
const pwCError = document.querySelector('#passwordC-error')
const firstNameError = document.querySelector('#first-name-error')
const lastNameError = document.querySelector('#last-name-error')
const emailError = document.querySelector('#email-error')
const telError = document.querySelector('#tel-error')


telError.setAttribute('style', 'white-space: pre;');
pwError.setAttribute('style', 'white-space: pre;');


firstName.addEventListener('input', function (event) {
  if (firstName.value === '') {
    firstNameError.textContent = 'Please type in your first name.'
  } else {
    firstNameError.textContent = ''
  }
})

lastName.addEventListener('input', function (event) {
  if (lastName.value === '') {
    lastNameError.textContent = 'Please type in your last name.'
  } else {
    lastNameError.textContent = ''
  }
})

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    emailError.textContent =
      'Please enter valid email'
  } else {
    emailError.textContent = ''
  }
})



tel.addEventListener('input', function (event) {
  if (tel.validity.patternMismatch) {
    telError.textContent =
      'Valid number \r\n should include 12 numbers'
  } else {
    telError.textContent = ''
  }
})

pw.addEventListener('input', function (event) {
  if (pw.validity.patternMismatch) {
    const currentValue = pw.value
    const regExpCap = /[A-Z]/g
    const regExpDig = /[0-9]/g
    let result = ''
    if (regExpCap.test(currentValue)) {
      result += ''
    } else {
      result += 'Missing at least 1 capital letter. \r\n '
    }

    if (regExpDig.test(currentValue)) {
      result += ''
    } else {
      result += 'Missing at least 1 number.\r\n '
    }

    if (currentValue.length < 9) {
      result += 'Password must be at least 8 characters. '
    } else {
      result += ''
    }

    console.log(result)
    pwError.textContent = result
  } else {
    pwError.textContent = ''
  }
})

pwC.addEventListener('input', function (event) {
  if (pwC.value !== pw.value) {
    pwCError.textContent = 'Passwords do not match'
  } else {
    pwCError.textContent = ''
  }
})
