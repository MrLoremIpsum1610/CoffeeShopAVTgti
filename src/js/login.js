const EmailInput = document.querySelector('.EmailForm');
const PasswordInput = document.querySelector('.PasswordForm');
const EmailMessage = document.querySelector('.EmMassage');
const passMessage = document.querySelector('.passMassage');


if (window.localStorage.getItem('theme')=='dark') {
    document.documentElement.className = 'dark';
}




function EmailInputF(){
    let GetEM = EmailInput.value;
    console.log(GetEM.length)
    if (GetEM.length <= 8) {
        EmailMessage.classList.remove('hidden')
    }else{
        EmailMessage.classList.add('hidden')
    }
}

function passInputF(){
    let GetPass = PasswordInput.value;
    if (GetPass.length <= 8) {
        passMessage.classList.remove('hidden')
    }else{
        passMessage.classList.add('hidden')
    }
}