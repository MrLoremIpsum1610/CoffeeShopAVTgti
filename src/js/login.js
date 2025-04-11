const $ = document

const EmailInput = $.querySelector('.EmailForm');
const PasswordInput = $.querySelector('.PasswordForm');
const EmailMessage = $.querySelectorAll('.EmMassage');
const passMessage = $.querySelector('.passMassage');

if (window.localStorage.getItem('theme')=='dark') {
    $.documentElement.className = 'dark';
}




function EmailInputF(){
    let GetEM = EmailInput.value;
    console.log(GetEM.length)
    if (GetEM.length <= 8) {
        EmailMessage[0].classList.remove('hidden')
    }else{
        EmailMessage[0].classList.add('hidden')
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
function EmailValidtion(){
    let GetEM = EmailInput.value;
    console.log(GetEM.length)
    if (GetEM === '') {
        EmailMessage[0].classList.add('hidden'); // مخفی کردن پیام طول
        EmailMessage[1].classList.add('hidden'); // مخفی کردن پیام فرمت
        return; // برای اینکه فرمی که که خالی است.نیاز به برررسی ادامه کد ها را ندارد
    }
    if (GetEM.length <= 8) {
        EmailMessage[0].classList.remove('hidden')
    }else{
        EmailMessage[0].classList.add('hidden')
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(GetEM)) {
        EmailMessage[1].textContent= '';
    
        console.log('io')
      } else {
        EmailMessage[1].textContent = 'ایمیل نامعتبر است';
        console.log('np')
      }
}