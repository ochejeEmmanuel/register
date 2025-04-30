form = document.querySelector("form")
// fullName = document.querySelector("full-name")
// email = document.querySelector("email")
// phoneNumber = document.querySelector("phone-number")
// dOB = document.querySelector("date-of-birth")
// password = document.querySelector("password")
// confirmPassword = document.querySelector("confirm-password")

form = document.querySelector("form").addEventListener("submit", (e) => {
    fullName = document.querySelector("full-name")
    email = document.querySelector("email")
    phoneNumber = document.querySelector("phone-number")
    dOB = document.querySelector("date-of-birth")
    password = document.querySelector("password")
    confirmPassword = document.querySelector("confirm-password")

    // check if all fields are filled
    if (!fullName || !email || !phoneNumber || !dOB || !password || !confirmPassword) {
        alert("all fields must be filled")
    }

    // if (!username) {
    //     alert("username is required")
    //     e.preventDefault()
    // } else if (!email.include('@')){
    //     alert("please enter a valid email")
    //     e.preventDefault()
    // } else if (password.length > 7) {
    //     alert("password must be more than 7 characters long.")
    //     e.preventDefault()
    // }
})
