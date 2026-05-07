/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber:  { DEFAULT: '#A8702A', deep: '#8B5A1F' },
        honey:  { DEFAULT: '#E0A52A', soft: '#F4DDA0' },
        cream:  { DEFAULT: '#FBF4E4', deep: '#F4E9D2' },
        paper:  '#FFFEFB',
        ink:    { DEFAULT: '#3A2E22', soft: '#7A6753', faint: '#B0A088' },
        line:   '#EDE0C4',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"PingFang TC"',
               '"Hiragino Sans"', '"Noto Sans TC"', '"Noto Sans JP"', '"Noto Sans KR"',
               '"Microsoft JhengHei"', 'sans-serif'],
      },
      maxWidth: { app: '430px' },
      borderRadius: { xl2: '14px', xl3: '22px' },
    },
  },
  plugins: [],
}

