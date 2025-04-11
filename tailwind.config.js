/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./*.html",       // همه فایل‌های HTML در ریشه
    "./src/js/*.js"    // همه فایل‌های JS در پوشه js و زیرپوشه‌هایش
  ],
  darkMode: 'class', // استفاده از استراتژی کلاس-محور

  theme: {
    extend: {
      screens:{
        'max-ssm':{max:"420px"},
        'max-sm':{max:'640px'},
        'max-md':{max:'768px'},
        'max-lg':{max:'1024px'},
        'max-xl':{max:'1280px'},
        'max-2xl':{max:'1536px'},
        
        
      },
      spacing:{
        '3.5':"14px",
        '2.5':"10px",
      },
      fontFamily:{
        'Dana-ExtraLight': '"Dana ExtraLight"',
        'Dana-Light': '"Dana Light"',
        'Dana-Regular': '"Dana Regular"',
        'Dana-Medium': '"Dana Medium"',
        'Dana-DemiBold': '"Dana DemiBold"',
        'Dana-Bold': '"Dana Bold"',
        'Dana-ExtraBold': '"Dana ExtraBold"',
        'Dana-Black': '"Dana Black"',
      }
      ,
      colors:{
        "white-10%":'#FFFFFF33',
        orange:{
          200:'#FED7AA',
          300:"#FDBA74"
        }
        ,
        gary:{
          100:"#F3F4F6",
          400:"#9CA3AF",
          300:"#D1D5DB"
        },
        zinc:{
          700:"#3F3F46"
        },
        emerald:{
          600:"#059669"
        },
        bgHeader:'#00000080',

      }
    },
    container: {
      center:true,
      padding: {
        DEFAULT:'1rem',
        lg:'0.625rem',
        '2xl':'17.25rem',
      }
    },

  },
  plugins: [
    plugin(function({ addVariant }) {
      // ایجاد واریانت 'white' معادل 'dark'
      addVariant('white', 'html[class="white"] &')
    })
  ]
}

