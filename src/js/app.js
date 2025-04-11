const $ = document
const person = {
    name:"Ali",
    family:"Ibn AbiTaleb",
    age:'63',
    BirthDate:'before Ghamari',
    surname : 'AmirALMomenin',
    FullName:FullName = function(a,b,c) {
        let res = a+" "+b+" "+c
        return res
    
    }

}

$.getElementById("demo").innerHTML = FullName(person.name,person.family,person.surname);
console.log(FullName(person.name,person.family,person.surname))

let inputedNum = '5'
let output = Math.floor(Math.random()*Math.pow(10,inputedNum))
console.log(output)
// Solving Practice 68
let av =[
    {name:"a",price:51},
    {name:"b",price:122},
    {name:"c",price:122},
    {name:"d",price:11}
]
let res =0;
let priceAl =0;
let sto =[
    {name:'d',pass:189},
    {name:'fd',price:103,task:[1,2]},
    {name:'lk',pass:123},
    {name:'fddd',price:102,task:[1,2,3,4]},
    {name:"b",price:12,task:[1,2,3,4,5]}
]
// let addNew = function(){
//     let po = prompt('enter avp')
//     let PriceAllof = function(){
//         sto.forEach(
//             function(purch){
//                 priceAl = priceAl + purch.price
//                 console.log(priceAl)

//             }
//         )
//         console.log(priceAl + "All of pr")
//     }
//     // تشخیص موجود بودن محصول
//     isAV = av.some(function(namee){ 

//         if(namee.name == po){
//             res = namee
        
//             return true
//         }
//     })
//     if (isAV){
//         let prod = {
//             name:res.name,
//             price:res.price
//         }
//         //  نکته مهم:اگر برای محصول جدید بصورت دیکشنری تعریف میشود،یادتان باشد این بصورت دیکشنری ذخیره نمیشود
//         sto.push(prod)
//         PriceAllof()    

//     }else{
//         console.log('Not available')
//         PriceAllof()
//     }

// }
// let delPu = function(){
//     let saveItemRemoved = 0;
//     let dell = prompt('wich remove??'); // b
//     let inb = 0;
//     let Windex = sto.findIndex(
//         function(removeItem){
//             if(removeItem.name ==  dell){
//                 console.log(removeItem.name)
//                 return saveItemRemoved = removeItem.name //==> return removeItem.name == dell
//             }
//         }
//     )
//     if (Windex >= 0) { // ==> if is optional here,for more secure, u can also use sto.splice(...) without if
//         console.log(Windex)
//         sto.splice(Windex,1)
//         console.log(sto)
//     }

// }

// let b =0;
// let d=0;
// let post = []
// let result = 0;
// let a = sto.filter( function(items){
//     if(items.price < 100){
//         post.push(items.price)
//         b = post.length *1000
//     }
//     if (items.price >= 100) {
//         d += items.price
//     }
//     return result = (d + b)
// })
// console.log(result)


let dontClose = null;


// if (isLogin) {
//     code
// }else if(!isLogin){
//     code
// }
// وقتی بنا بر میانگین است یعنی جمع کنیم،احتیاج به لیست نیست!!
// اما اگر بنا باشد........
//  arr.indexof(12) ==> براساس مقدار،ایندکس میابد
// array.push(12,a,true,x,y...)    اضافه کردن یک ایندکس جدید به لیست از اخر**** میتواند چند مقدار بگیرد
// array.pop()    بدون ورودی --> حذف اخرین ایندکس--- شبیه پاپ یا ترکیدن بادکنک
// array.shift()  بدون پارامتر -- اولین ایندکس حذف میشود مشابه پاپ
// array.unshift(x,x,false,...) مشابه پوش است با این تفاوت که به ابتدا ایندکس اضافه میشود
 //arr.foreach() ==> شبیه کار با لیست ها در حلقه فور است
//  با این تفاوت که با فانکشن خاصی کاری انجام میدهد---- یادتان باشد فور ایچ همان خلاصه شده فور است

// text.trim() === حذف اسپیس های ابتدا و انتهای متن (غیر از داخل متن)
//text.search("Mohammad") نمایش بصورت ایندکس از کدام ایندکس شروع شده
// text.indexOf("mhm") متن مدنظر را به صورت ایندکس نشان میدهد - یعنی متن مدنظر از کدام ایندکس شروع شده
//text.includes("text") بصورت بولین برمگیرداند - که ایا مت مدنظر هست با خیر ---> میتواند در آرایه ها هم بکار رود مشکلی هست از دیکسنری ساپورت نمیکند
// arr.some() مانند فور ایچ عمل میکند با این تفاوت اگر مقدار تروو دریافت کنه متوقف میشه انگار اتو بریک داشته باشد اما فور ایچ اینطوری نیست!!

//Math.pow(2,4) === 16 
//Math.sqrt(16) == 4
//Math.abs(-16) == +16 
//Math.min(2,3,5,1,0,5,-12)/.max(1,1,12,5,5,8,7,777)
//Math.floor(3.1415555) delete float part ===> 3
//Math.round(3.9) ==> تقریب به عدد نزدیک تر به رقم صحیح==> 4
//Math.ceil(3.7) ==> همیشه به سمت بالا گرد میشود
// Math.random() no input ==> generate random number between 0,1 controling with Multiplying and floor()
//text.slice or text.substring(7,17) ==> به معنی برش:
// این متد قسمتی از نوشته را میبرد - ایندکس مبدا از 7 شروع شده و تا ایندکس 17 تمام میشود
//text.substr(0,7) => ایدکس مبدا 0 و تا 7 قدم جلو میرود و تا 7 قدم را نمایش میدهد
// x++ , ++x در تک خط فرقی ندارند اما هنگام فراخوانی در متغیر ها،ترتیبی عددی حمع یا تفریق و غیره میشود
//x++ اول x وارد متغیر ثالث میشود و بعد جمع میشود یعنی مقدار جدید بدست نمی اید!!
// ++x اابتدا مقدار جدید وارد x میشود و سپس وارد متغیر ثالث میشود - پس مقدار جدید نمایش داده میشود!!


//#region 
const navbn = $.querySelector('.closed');
let isNavOpen = false;
const Drop = $.querySelector('.drop');
const DropDown = $.querySelector('.dropdown');
const Dropping = $.querySelectorAll('.dropping');
const Rotate = $.querySelector('.rotating');
const closedd = $.querySelector('.closing');
const itemM = $.querySelector('.opneup');
const navopen = $.querySelector('.clickop')
const switchTheme = $.querySelectorAll('.switch-white-theme');
let DarkSelector = $.querySelectorAll('.Switched');
const swtChange = $.querySelector('.swt-ch');
const DropStoreC = $.querySelector('.DropStore');
const DropStoreCV = $.querySelector('.DropStoreCV');
const DroppingStoreC = $.querySelector('.DroppingStore');
const ShowingStoreBasket = $.querySelector('.ShowStoreBasket');
const ShowingBasket = $.querySelector('.ShowingBasket');
const bgD = $.querySelector('.bgUnTouch');

//#endregion
Dropping[0].addEventListener('click',(e)=>{
    Drop.classList.toggle('drop--dropdown');
    Rotate.classList.toggle('rotating--rotate180');
    Rotate.classList.toggle('rotating')
    Dropping[2].classList.toggle('!text-orange-300');
    Dropping[3].classList.toggle('!text-orange-300');
    Dropping[4].classList.toggle('!text-orange-300');
})
closedd.addEventListener('click',(e)=>{
    itemM.classList.toggle('opneup--close')
    bgD.classList.toggle('ShowingBasketO')
})
navopen.addEventListener('click',(e)=>{
    itemM.classList.toggle('opneup--close')
    bgD.classList.toggle('ShowingBasketO')
})

let isDark = false;

if (window.localStorage.getItem('theme') == 'dark') {
    document.documentElement.className = 'dark';
    DarkSelector[0].setAttribute('xlink:href','#sun');
    DarkSelector[1].setAttribute('xlink:href','#sun');
    swtChange.innerHTML = 'تم روشن';
    setTimeout(function(){
        isDark = true;
    },1)
}

switchTheme[0].addEventListener('click',(e)=>{
    if (!isDark) {
        $.documentElement.className = 'dark';
        DarkSelector[0].setAttribute('xlink:href','#sun');
        DarkSelector[1].setAttribute('xlink:href','#sun');
        swtChange.innerHTML = 'تم روشن';
        window.localStorage.setItem('theme','dark');
        setTimeout(function(){
            isDark = true;
        },1)
    }if(isDark == true){
        isDark = false
        $.documentElement.className = 'mdl-js';
        swtChange.innerHTML = 'تم تاریک';
        window.localStorage.setItem('theme','mdl-js');
        DarkSelector[1].setAttribute('xlink:href','#moon')
        DarkSelector[0].setAttribute('xlink:href','#moon')
        }
})
function SwTheme(){
    if (!isDark) {
        $.documentElement.className = 'dark';
        DarkSelector[0].setAttribute('xlink:href','#sun');
        DarkSelector[1].setAttribute('xlink:href','#sun');
        swtChange.innerHTML = 'تم روشن';
        window.localStorage.setItem('theme','dark');
        setTimeout(function(){
            isDark = true;
        },1)
    }if(isDark == true){
        isDark = false
        $.documentElement.className = 'mdl-js';
        swtChange.innerHTML = 'تم تاریک';
        window.localStorage.setItem('theme','mdl-js');
        DarkSelector[1].setAttribute('xlink:href','#moon')
        DarkSelector[0].setAttribute('xlink:href','#moon')
        }
}
ShowingStoreBasket.addEventListener('click',(e)=>{
    ShowingBasket.classList.toggle('ShowingBasketO')

})
