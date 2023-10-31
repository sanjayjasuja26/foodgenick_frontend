/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  import:"#root",
  theme: {
    extend: {
      maxWidth: {
        'xxxl': '1470px',
        'xxl': '1600px',
        'xl': '1600px',
        
       
      },
      minHeight: {
        '32':'32rem',
        
      },
      maxHeight: {
        'lg':'759px',
        '30':'30rem',
        'thirty-two':'32rem',
      },
      width: {
        'xxl': '1152px',
        'xl': '700px',
        'l':'590px',
        '500':'500px',
        '800':'800px',
        '855':'855px',
        '700':'700px',
        '30%': '30%',
        '32%': '32%',
        '46%': '46%',
        '49%': '49%',
        '27%': '49%',
        '70%': '70%',
        '72%': '72%',
        '19%': '19%',
        '24%': '24%',
        '34r': '34rem',
        '30r': '30rem',
        '38r': '38rem',
        '40r': '40rem',
        '42r': '42rem',
        '28r': '28rem',
        '61r': '61rem',
        '72px' : '72px',
        '350px' : '350px'
      },
      minHeight: {
        '587': '587px',
        '92' : '70vh',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrate: ['Montserrat', 'sans-serif']
      },
      colors: {
        yellow: '#FFA500',
        grey: '#F7F7F7',
        black100: '#2D2D2D',
        darkgrey:'#3B3B3B',
        clight: '#C8C8C8',
        lightgrey: '#666666',
        red:'#ff0000',  
        orange : '#ffa526',
        grey2: '#808080',
        grey3 : '#f6f8ff',
        grey4 : '#97989F',
      },
      backgroundImage: {
        'bg': "url('/assets/images/bannerbg.png')", 
        'about': "url('/assets/images/abouttext.png')",
        'service': "url('/assets/images/servicebg.png')",
        'servicetext': "url('/assets/images/servicestext.png')",
        'contact': "url('/assets/images/contactbg.png')",
        'eat': "url('/assets/images/eat.svg')",
        'aboutus': "url('/assets/images/aboutus.png')",
        // 'our-story': "url('/assets/images/our-story.png')",
        'aboutbg': "url('/assets/images/aboutbg.png')",
        'service-text': "url('/assets/images/serives.png')",
        'service-bg': "url('/assets/images/service-bg.png')",
        'reachout': "url('/assets/images/reachout.png')",
        'about-banner': "url('/assets/images/aboutbanner.png')",
        'service-banner': "url('/assets/images/service-banner.png')",
        'price-text': "url('/assets/images/pricetext.png')",
        'price-plan': "url('/assets/images/subscription-plans.png')",
        'list': "url('/assets/images/list.png')",
        'mark': "url('/assets/images/mark-icon.png')",
        'arrow': "url('/assets/images/arrow.svg')",
        'user': "url('/assets/images/user.svg')",
        'restaurant': "url('/assets/images/user.svg')",
        'dots3': "url('/assets/images/dots3.png')",
        'dots': "url(/assets/images/dots.png)",
        'dots2': "url(/assets/images/dots2.png)",
        'login': "url(/assets/images/login.png)",
        'blog-text': "url(/assets/images/Blog-text.svg)",
        'story-text': "url(/assets/images/our-story.svg)",
        
        },

      backgroundSize:{
          '100%': '100% 100%',
          '10%': '100%',
          '20': '20px',
          '924': '924px',
          '680': '680px',
          '590': '590px',
          '460': '460px',
          '700': '700px'
        },
      borderRadius: {
          '180': '180rem',
          '100': '100rem',
      },
      borderWidth: {
        '15': '15px',
        '10': '10px',

      },
      backgroundColor: {
        'grey-light': '#F5F5F5',
        'blackLight':'#3C3C3C',
        'grey-light1': '#f7f7f7',
        'yellow': '#FFA500',
        'grey': '#fafafa',
        'orange' : '#ffa526',
        'transparent' : 'transparent',
        'red' : '#FF141B',
        'green': '#138948',
        'quote-bg' : "#F6F6F7"
      },
      shadow: {
        'light':'0px 30px 4px 0px rgb(0 0 0)',
      },
      lineHeight: {
        '52':'52px',
      },
      fontSize: {
        '0': '0px',
        '16': '16px',
        '18': '18px',
        '32': '32px'
      },
      stroke: {
        'stroke': '#fff'
      },
      height: {
        '78':'78vh',
        '500':'500px',
        '550':'550px',
        '800':'800px',
        '466':'466px',
        '70' : 'calc(100vh - 242px)',
        '72px' : '72px'
      },
      borderColor: {
        'yellow' : '#FFA500',
        'orange' : '#ffa526',
        'grey-light': '#e0e0e0',
        'red' : '#FF141B',
        'green': '#138948'
      },
      boxShadow: {
        '3xl' : '0 0px 23px rgba(0,0,0,.13)',
        '1' : '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
        '0' : 'unset',
        '2' : '0px 4px 20px 0px rgba(0, 0, 0, 0.05)'

      },
     
      spacing: {
        '50': '50%',
        '138': '138px'
      }
    },
  },
  plugins: [],
}