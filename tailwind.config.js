

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        
        'soft-red' : '#fe7867;',
        'yellow' : '#fad400;',
        'dark-d-cyan' : '#25564b;',
        'dark-m-cyan' : '#458c7e;',
        'dark-blue' : '#9536b;',
        'vdd-blue' : '#23303e;',
        'vdg-blue' : '#5a636c;',
        'dg-blue' : '#818498;',
        'g-blue' : '#a7abae;',
        'white' : '#ffffff;',
        
      },
      fontFamily: {
        'barlow': ['Barlow'],
        'fraunces': ['Fraunces'],
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
