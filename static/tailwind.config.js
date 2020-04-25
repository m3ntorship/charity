module.exports = {
  theme: {
    fontFamily: {
      body: ['Merriweather', 'serif']
    },
    colors: {
      c000: '#ffffff',
      c100: '#254151',
      c200: '#d55342',
      c300: '#efc94c',
      c400: '#3d9c85',
      c500: '#4777ce',
      c600: '#7d8589',
      c700: '#bac9d2',
      c800: '#f0ece3',
      c900: '#1f3948'
    },
    fontSize: {
      xxs: '0.75rem', //12px
      xs: '0.813rem', //13px
      sm: '0.875rem', //14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '3.125rem', //50px
      xxl: '6.875rem' //110px
    },
    lineHeight: {
      none: '1',
      tighter: '1.2',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2'
    },
    extend: {
      borderWidth: {
        '6': '6px'
      },
      spacing: {
        '7': '1.75rem',
        '28': '7rem'
      }
    }
  },
  corePlugins: {
    textDecoration: false,
    container: false
  }
};
