const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const welcomeBox = document.querySelector('.welcome-box');

const name = document.querySelector('.userName') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.btn');

// if (name == null) { // means login page is open
//     submitBtn.addEventListener('click', () => {
//         fetch('/login-user', {
//             method: 'post',
//             headers: new Headers({ 'Content-Type': 'application/json' }),
//             body: JSON.stringify({
//                 email: email.value,
//                 password: password.value
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 validateData(data);
//             })
//     })
// } else { // means register page is open

//     submitBtn.addEventListener('click', () => {
//         fetch('/register-user', {
//             method: 'post',
//             headers: new Headers({ 'Content-Type': 'application/json' }),
//             body: JSON.stringify({
//                 name: name.value,
//                 email: email.value,
//                 password: password.value
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 validateData(data);
//             })
//     })

// }

// const validateData = (data) => {
//     if (!data.name) {
//         alertBox(data);
//     } else {
//         sessionStorage.name = data.name;
//         sessionStorage.email = data.email;
//         location.href = '/';
//     }
// }

// const alertBox = (data) => {
//     const alertContainer = document.querySelector('.alert-box');
//     const alertMsg = document.querySelector('.alert');
//     alertMsg.innerHTML = data;

//     alertContainer.style.top = `5%`;
//     setTimeout(() => {
//         alertContainer.style.top = null;
//     }, 5000);
// }

// // registation 
// const username_reg = document.getElementById('userName_log');
// const email_reg = document.getElementById('email_reg');
// const password_reg = document.getElementById('password_reg');

// login
// const username_log = document.getElementById('userName_log');
// const password_log = document.getElementById('userName_log');

// let users = [
//     {
//         "name" :"zakeer",
//         "email":"zakeer@gmail.com",
//         "password":123
//     },
//     {
//         "name": "tarek",
//         "email": "tarek@gmail.com",
//         "password": 124
//     },
//     {
//         "name": "ahlam",
//         "email": "ahlam@gmail.com",
//         "password": 125
//     },
//     {
//         "name": "doaa",
//         "email": "doaa@gmail.com",
//         "password": 126
//     },
//     {
//         "name": "sohila",
//         "email": "sohila@gmail.com",
//         "password": 127
//     },

// ];


// function checkForm_regist(){
//     var username_reg = document.forms["registForm"]["userName_reg"].value;
//     var email_reg = document.forms["registForm"]["email_reg"].value;
//     var password_reg = document.forms["registForm"]["password_reg"].value;

// };

// function checkForm_login(){
//    var username_log = document.forms["Login"]["userName_log"].value;
//    var password_log = document.forms["Login"]["password_log"].value;
//   for(var index = 0 ; index < users.length ; index++){  
//    if (users[index].name != username_log & users[index].password != password_log){
//        alert('wrong in password or user name');
//        username_log = ' ';
//        password_log = ' ';
//     }
//       location.assign('dashboard.html');
//   }
// }

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');

});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    welcomeBox.classList.remove('hide');
});

btnPopup.addEventListener('click', () => {
    welcomeBox.classList.add('hide');
});





