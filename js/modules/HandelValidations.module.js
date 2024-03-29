export default class HandelValidations {
  // display validation errors
displayValidationErrs = ({ ...errors }) => {
  for (let error in errors) {
    const parent = document.getElementById(error).parentElement
    const child = document.createElement('span')
    child.setAttribute('class', 'error-msg')

    const isThereError = parent.children[1].tagName === 'SPAN'
    if (isThereError) {
      return
    }
    parent.insertBefore(child, parent.childNodes[2])
    child.textContent = ` ${errors[error]}`
  }
}

// ! clear all error messages after every submit so it doesn't stick on the page
  deleteErrMsg = () => {
  const errMsgs = document.querySelectorAll('.error-msg')
  errMsgs.forEach(msg => {
    msg.remove()
  })
}
}