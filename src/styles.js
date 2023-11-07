const colors = require('tailwindcss/colors')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const pxToRem = (px, base) => `${round(px / base)}rem`
const pxToEm = (px, base) => `${round(px / base)}em`
const hexToRgb = (hex) => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)
  return `${r} ${g} ${b}`
}

const colorModifiers = {
    // Gray color themes

    slate: {
      css: {
        '--tw-prose-body': colors.slate[700],
        '--tw-prose-headings': colors.slate[900],
        '--tw-prose-lead': colors.slate[600],
        '--tw-prose-links': colors.slate[900],
        '--tw-prose-bold': colors.slate[900],
        '--tw-prose-counters': colors.slate[500],
        '--tw-prose-bullets': colors.slate[300],
        '--tw-prose-hr': colors.slate[200],
        '--tw-prose-quotes': colors.slate[900],
        '--tw-prose-quote-borders': colors.slate[200],
        '--tw-prose-captions': colors.slate[500],
        '--tw-prose-kbd': colors.slate[900],
        '--tw-prose-kbd-shadows': hexToRgb(colors.slate[900]),
        '--tw-prose-code': colors.slate[900],
        '--tw-prose-pre-code': colors.slate[200],
        '--tw-prose-pre-bg': colors.slate[800],
        '--tw-prose-th-borders': colors.slate[300],
        '--tw-prose-td-borders': colors.slate[200],
        '--tw-prose-invert-body': colors.slate[300],
        '--tw-prose-invert-headings': colors.white,
        '--tw-prose-invert-lead': colors.slate[400],
        '--tw-prose-invert-links': colors.white,
        '--tw-prose-invert-bold': colors.white,
        '--tw-prose-invert-counters': colors.slate[400],
        '--tw-prose-invert-bullets': colors.slate[600],
        '--tw-prose-invert-hr': colors.slate[700],
        '--tw-prose-invert-quotes': colors.slate[100],
        '--tw-prose-invert-quote-borders': colors.slate[700],
        '--tw-prose-invert-captions': colors.slate[400],
        '--tw-prose-invert-kbd': colors.white,
        '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
        '--tw-prose-invert-code': colors.white,
        '--tw-prose-invert-pre-code': colors.slate[300],
        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-invert-th-borders': colors.slate[600],
        '--tw-prose-invert-td-borders': colors.slate[700],
      },
    },
  
    gray: {
      css: {
        '--tw-prose-body': colors.gray[700],
        '--tw-prose-headings': colors.gray[900],
        '--tw-prose-lead': colors.gray[600],
        '--tw-prose-links': colors.gray[900],
        '--tw-prose-bold': colors.gray[900],
        '--tw-prose-counters': colors.gray[500],
        '--tw-prose-bullets': colors.gray[300],
        '--tw-prose-hr': colors.gray[200],
        '--tw-prose-quotes': colors.gray[900],
        '--tw-prose-quote-borders': colors.gray[200],
        '--tw-prose-captions': colors.gray[500],
        '--tw-prose-kbd': colors.gray[900],
        '--tw-prose-kbd-shadows': hexToRgb(colors.gray[900]),
        '--tw-prose-code': colors.gray[900],
        '--tw-prose-pre-code': colors.gray[200],
        '--tw-prose-pre-bg': colors.gray[800],
        '--tw-prose-th-borders': colors.gray[300],
        '--tw-prose-td-borders': colors.gray[200],
        '--tw-prose-invert-body': colors.gray[300],
        '--tw-prose-invert-headings': colors.white,
        '--tw-prose-invert-lead': colors.gray[400],
        '--tw-prose-invert-links': colors.white,
        '--tw-prose-invert-bold': colors.white,
        '--tw-prose-invert-counters': colors.gray[400],
        '--tw-prose-invert-bullets': colors.gray[600],
        '--tw-prose-invert-hr': colors.gray[700],
        '--tw-prose-invert-quotes': colors.gray[100],
        '--tw-prose-invert-quote-borders': colors.gray[700],
        '--tw-prose-invert-captions': colors.gray[400],
        '--tw-prose-invert-kbd': colors.white,
        '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
        '--tw-prose-invert-code': colors.white,
        '--tw-prose-invert-pre-code': colors.gray[300],
        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-invert-th-borders': colors.gray[600],
        '--tw-prose-invert-td-borders': colors.gray[700],
      },
    },
  
    zinc: {
      css: {
        '--tw-prose-body': colors.zinc[700],
        '--tw-prose-headings': colors.zinc[900],
        '--tw-prose-lead': colors.zinc[600],
        '--tw-prose-links': colors.zinc[900],
        '--tw-prose-bold': colors.zinc[900],
        '--tw-prose-counters': colors.zinc[500],
        '--tw-prose-bullets': colors.zinc[300],
        '--tw-prose-hr': colors.zinc[200],
        '--tw-prose-quotes': colors.zinc[900],
        '--tw-prose-quote-borders': colors.zinc[200],
        '--tw-prose-captions': colors.zinc[500],
        '--tw-prose-kbd': colors.zinc[900],
        '--tw-prose-kbd-shadows': hexToRgb(colors.zinc[900]),
        '--tw-prose-code': colors.zinc[900],
        '--tw-prose-pre-code': colors.zinc[200],
        '--tw-prose-pre-bg': colors.zinc[800],
        '--tw-prose-th-borders': colors.zinc[300],
        '--tw-prose-td-borders': colors.zinc[200],
        '--tw-prose-invert-body': colors.zinc[300],
        '--tw-prose-invert-headings': colors.white,
        '--tw-prose-invert-lead': colors.zinc[400],
        '--tw-prose-invert-links': colors.white,
        '--tw-prose-invert-bold': colors.white,
        '--tw-prose-invert-counters': colors.zinc[400],
        '--tw-prose-invert-bullets': colors.zinc[600],
        '--tw-prose-invert-hr': colors.zinc[700],
        '--tw-prose-invert-quotes': colors.zinc[100],
        '--tw-prose-invert-quote-borders': colors.zinc[700],
        '--tw-prose-invert-captions': colors.zinc[400],
        '--tw-prose-invert-kbd': colors.white,
        '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
        '--tw-prose-invert-code': colors.white,
        '--tw-prose-invert-pre-code': colors.zinc[300],
        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-invert-th-borders': colors.zinc[600],
        '--tw-prose-invert-td-borders': colors.zinc[700],
      },
    },
  
    neutral: {
      css: {
        '--tw-prose-body': colors.neutral[700],
        '--tw-prose-headings': colors.neutral[900],
        '--tw-prose-lead': colors.neutral[600],
        '--tw-prose-links': colors.neutral[900],
        '--tw-prose-bold': colors.neutral[900],
        '--tw-prose-counters': colors.neutral[500],
        '--tw-prose-bullets': colors.neutral[300],
        '--tw-prose-hr': colors.neutral[200],
        '--tw-prose-quotes': colors.neutral[900],
        '--tw-prose-quote-borders': colors.neutral[200],
        '--tw-prose-captions': colors.neutral[500],
        '--tw-prose-kbd': colors.neutral[900],
        '--tw-prose-kbd-shadows': hexToRgb(colors.neutral[900]),
        '--tw-prose-code': colors.neutral[900],
        '--tw-prose-pre-code': colors.neutral[200],
        '--tw-prose-pre-bg': colors.neutral[800],
        '--tw-prose-th-borders': colors.neutral[300],
        '--tw-prose-td-borders': colors.neutral[200],
        '--tw-prose-invert-body': colors.neutral[300],
        '--tw-prose-invert-headings': colors.white,
        '--tw-prose-invert-lead': colors.neutral[400],
        '--tw-prose-invert-links': colors.white,
        '--tw-prose-invert-bold': colors.white,
        '--tw-prose-invert-counters': colors.neutral[400],
        '--tw-prose-invert-bullets': colors.neutral[600],
        '--tw-prose-invert-hr': colors.neutral[700],
        '--tw-prose-invert-quotes': colors.neutral[100],
        '--tw-prose-invert-quote-borders': colors.neutral[700],
        '--tw-prose-invert-captions': colors.neutral[400],
        '--tw-prose-invert-kbd': colors.white,
        '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
        '--tw-prose-invert-code': colors.white,
        '--tw-prose-invert-pre-code': colors.neutral[300],
        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-invert-th-borders': colors.neutral[600],
        '--tw-prose-invert-td-borders': colors.neutral[700],
      },
    },
  
    stone: {
      css: {
        '--tw-prose-body': colors.stone[700],
        '--tw-prose-headings': colors.stone[900],
        '--tw-prose-lead': colors.stone[600],
        '--tw-prose-links': colors.stone[900],
        '--tw-prose-bold': colors.stone[900],
        '--tw-prose-counters': colors.stone[500],
        '--tw-prose-bullets': colors.stone[300],
        '--tw-prose-hr': colors.stone[200],
        '--tw-prose-quotes': colors.stone[900],
        '--tw-prose-quote-borders': colors.stone[200],
        '--tw-prose-captions': colors.stone[500],
        '--tw-prose-kbd': colors.stone[900],
        '--tw-prose-kbd-shadows': hexToRgb(colors.stone[900]),
        '--tw-prose-code': colors.stone[900],
        '--tw-prose-pre-code': colors.stone[200],
        '--tw-prose-pre-bg': colors.stone[800],
        '--tw-prose-th-borders': colors.stone[300],
        '--tw-prose-td-borders': colors.stone[200],
        '--tw-prose-invert-body': colors.stone[300],
        '--tw-prose-invert-headings': colors.white,
        '--tw-prose-invert-lead': colors.stone[400],
        '--tw-prose-invert-links': colors.white,
        '--tw-prose-invert-bold': colors.white,
        '--tw-prose-invert-counters': colors.stone[400],
        '--tw-prose-invert-bullets': colors.stone[600],
        '--tw-prose-invert-hr': colors.stone[700],
        '--tw-prose-invert-quotes': colors.stone[100],
        '--tw-prose-invert-quote-borders': colors.stone[700],
        '--tw-prose-invert-captions': colors.stone[400],
        '--tw-prose-invert-kbd': colors.white,
        '--tw-prose-invert-kbd-shadows': hexToRgb(colors.white),
        '--tw-prose-invert-code': colors.white,
        '--tw-prose-invert-pre-code': colors.stone[300],
        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        '--tw-prose-invert-th-borders': colors.stone[600],
        '--tw-prose-invert-td-borders': colors.stone[700],
      },
    },
  
    // Link-only themes (for backward compatibility)
  
    red: {
      css: {
        '--tw-prose-links': colors.red[600],
        '--tw-prose-invert-links': colors.red[500],
      },
    },
  
    orange: {
      css: {
        '--tw-prose-links': colors.orange[600],
        '--tw-prose-invert-links': colors.orange[500],
      },
    },
  
    amber: {
      css: {
        '--tw-prose-links': colors.amber[600],
        '--tw-prose-invert-links': colors.amber[500],
      },
    },
  
    yellow: {
      css: {
        '--tw-prose-links': colors.yellow[600],
        '--tw-prose-invert-links': colors.yellow[500],
      },
    },
  
    lime: {
      css: {
        '--tw-prose-links': colors.lime[600],
        '--tw-prose-invert-links': colors.lime[500],
      },
    },
  
    green: {
      css: {
        '--tw-prose-links': colors.green[600],
        '--tw-prose-invert-links': colors.green[500],
      },
    },
  
    emerald: {
      css: {
        '--tw-prose-links': colors.emerald[600],
        '--tw-prose-invert-links': colors.emerald[500],
      },
    },
  
    teal: {
      css: {
        '--tw-prose-links': colors.teal[600],
        '--tw-prose-invert-links': colors.teal[500],
      },
    },
  
    cyan: {
      css: {
        '--tw-prose-links': colors.cyan[600],
        '--tw-prose-invert-links': colors.cyan[500],
      },
    },
  
    sky: {
      css: {
        '--tw-prose-links': colors.sky[600],
        '--tw-prose-invert-links': colors.sky[500],
      },
    },
  
    blue: {
      css: {
        '--tw-prose-links': colors.blue[600],
        '--tw-prose-invert-links': colors.blue[500],
      },
    },
  
    indigo: {
      css: {
        '--tw-prose-links': colors.indigo[600],
        '--tw-prose-invert-links': colors.indigo[500],
      },
    },
  
    violet: {
      css: {
        '--tw-prose-links': colors.violet[600],
        '--tw-prose-invert-links': colors.violet[500],
      },
    },
  
    purple: {
      css: {
        '--tw-prose-links': colors.purple[600],
        '--tw-prose-invert-links': colors.purple[500],
      },
    },
  
    fuchsia: {
      css: {
        '--tw-prose-links': colors.fuchsia[600],
        '--tw-prose-invert-links': colors.fuchsia[500],
      },
    },
  
    pink: {
      css: {
        '--tw-prose-links': colors.pink[600],
        '--tw-prose-invert-links': colors.pink[500],
      },
    },
  
    rose: {
      css: {
        '--tw-prose-links': colors.rose[600],
        '--tw-prose-invert-links': colors.rose[500],
      },
    },
}

const invertModifier = {
    // Invert (for dark mode)
    invert: {
      css: {
        '--tw-prose-body': 'var(--tw-prose-invert-body)',
        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
        '--tw-prose-lead': 'var(--tw-prose-invert-lead)',
        '--tw-prose-links': 'var(--tw-prose-invert-links)',
        '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
        '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
        '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
        '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
        '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
        '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
        '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
        '--tw-prose-kbd': 'var(--tw-prose-invert-kbd)',
        '--tw-prose-kbd-shadows': 'var(--tw-prose-invert-kbd-shadows)',
        '--tw-prose-code': 'var(--tw-prose-invert-code)',
        '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
        '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
        '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
        '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
      },
    },
 
}

const defaultModifiers = (base) => ({
  sm: {
    css: [
      {
        fontSize: pxToRem(14, base),
        lineHeight: round(24 / 14),
        p: {
          marginTop: pxToEm(16, 14),
          marginBottom: pxToEm(16, 14),
        },
        '[class~="lead"]': {
          fontSize: pxToEm(18, 14),
          lineHeight: round(28 / 18),
          marginTop: pxToEm(16, 18),
          marginBottom: pxToEm(16, 18),
        },
        blockquote: {
          marginTop: pxToEm(24, 18),
          marginBottom: pxToEm(24, 18),
          paddingLeft: pxToEm(20, 18),
        },
        h1: {
          fontSize: pxToEm(30, 14),
          marginTop: '0',
          marginBottom: pxToEm(24, 30),
          lineHeight: round(36 / 30),
        },
        h2: {
          fontSize: pxToEm(20, 14),
          marginTop: pxToEm(32, 20),
          marginBottom: pxToEm(16, 20),
          lineHeight: round(28 / 20),
        },
        h3: {
          fontSize: pxToEm(18, 14),
          marginTop: pxToEm(28, 18),
          marginBottom: pxToEm(8, 18),
          lineHeight: round(28 / 18),
        },
        h4: {
          marginTop: pxToEm(20, 14),
          marginBottom: pxToEm(8, 14),
          lineHeight: round(20 / 14),
        },
        img: {
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
        },
        picture: {
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
        },
        'picture > img': {
          marginTop: '0',
          marginBottom: '0',
        },
        video: {
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
        },
        kbd: {
          fontSize: pxToEm(12, 14),
          borderRadius: pxToRem(5, base),
          paddingTop: pxToEm(2, 14),
          paddingRight: pxToEm(5, 14),
          paddingBottom: pxToEm(2, 14),
          paddingLeft: pxToEm(5, 14),
        },
        code: {
          fontSize: pxToEm(12, 14),
        },
        'h2 code': {
          fontSize: pxToEm(18, 20),
        },
        'h3 code': {
          fontSize: pxToEm(16, 18),
        },
        pre: {
          fontSize: pxToEm(12, 14),
          lineHeight: round(20 / 12),
          marginTop: pxToEm(20, 12),
          marginBottom: pxToEm(20, 12),
          borderRadius: pxToRem(4, base),
          paddingTop: pxToEm(8, 12),
          paddingRight: pxToEm(12, 12),
          paddingBottom: pxToEm(8, 12),
          paddingLeft: pxToEm(12, 12),
        },
        ol: {
          marginTop: pxToEm(16, 14),
          marginBottom: pxToEm(16, 14),
          paddingLeft: pxToEm(22, 14),
        },
        ul: {
          marginTop: pxToEm(16, 14),
          marginBottom: pxToEm(16, 14),
          paddingLeft: pxToEm(22, 14),
        },
        li: {
          marginTop: pxToEm(4, 14),
          marginBottom: pxToEm(4, 14),
        },
        'ol > li': {
          paddingLeft: pxToEm(6, 14),
        },
        'ul > li': {
          paddingLeft: pxToEm(6, 14),
        },
        '> ul > li p': {
          marginTop: pxToEm(8, 14),
          marginBottom: pxToEm(8, 14),
        },
        '> ul > li > *:first-child': {
          marginTop: pxToEm(16, 14),
        },
        '> ul > li > *:last-child': {
          marginBottom: pxToEm(16, 14),
        },
        '> ol > li > *:first-child': {
          marginTop: pxToEm(16, 14),
        },
        '> ol > li > *:last-child': {
          marginBottom: pxToEm(16, 14),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: pxToEm(8, 14),
          marginBottom: pxToEm(8, 14),
        },
        dl: {
          marginTop: pxToEm(16, 14),
          marginBottom: pxToEm(16, 14),
        },
        dt: {
          marginTop: pxToEm(16, 14),
        },
        dd: {
          marginTop: pxToEm(4, 14),
          paddingLeft: pxToEm(22, 14),
        },
        hr: {
          marginTop: pxToEm(40, 14),
          marginBottom: pxToEm(40, 14),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: pxToEm(12, 14),
          lineHeight: round(18 / 12),
        },
        'thead th': {
          paddingRight: pxToEm(12, 12),
          paddingBottom: pxToEm(8, 12),
          paddingLeft: pxToEm(12, 12),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: pxToEm(8, 12),
          paddingRight: pxToEm(12, 12),
          paddingBottom: pxToEm(8, 12),
          paddingLeft: pxToEm(12, 12),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
        figure: {
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: pxToEm(12, 14),
          lineHeight: round(16 / 12),
          marginTop: pxToEm(8, 12),
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  base: {
    css: [
      {
        fontSize: pxToRem(16, base),
        lineHeight: round(28 / 16),
        p: {
          marginTop: pxToEm(20, 16),
          marginBottom: pxToEm(20, 16),
        },
        '[class~="lead"]': {
          fontSize: pxToEm(20, 16),
          lineHeight: round(32 / 20),
          marginTop: pxToEm(24, 20),
          marginBottom: pxToEm(24, 20),
        },
        blockquote: {
          marginTop: pxToEm(32, 20),
          marginBottom: pxToEm(32, 20),
          paddingLeft: pxToEm(20, 20),
        },
        h1: {
          fontSize: pxToEm(36, 16),
          marginTop: '0',
          marginBottom: pxToEm(32, 36),
          lineHeight: round(40 / 36),
        },
        h2: {
          fontSize: pxToEm(24, 16),
          marginTop: pxToEm(48, 24),
          marginBottom: pxToEm(24, 24),
          lineHeight: round(32 / 24),
        },
        h3: {
          fontSize: pxToEm(20, 16),
          marginTop: pxToEm(32, 20),
          marginBottom: pxToEm(12, 20),
          lineHeight: round(32 / 20),
        },
        h4: {
          marginTop: pxToEm(24, 16),
          marginBottom: pxToEm(8, 16),
          lineHeight: round(24 / 16),
        },
        img: {
          marginTop: pxToEm(32, 16),
          marginBottom: pxToEm(32, 16),
        },
        picture: {
          marginTop: pxToEm(32, 16),
          marginBottom: pxToEm(32, 16),
        },
        'picture > img': {
          marginTop: '0',
          marginBottom: '0',
        },
        video: {
          marginTop: pxToEm(32, 16),
          marginBottom: pxToEm(32, 16),
        },
        kbd: {
          fontSize: pxToEm(14, 16),
          borderRadius: pxToRem(5, base),
          paddingTop: pxToEm(3, 16),
          paddingRight: pxToEm(6, 16),
          paddingBottom: pxToEm(3, 16),
          paddingLeft: pxToEm(6, 16),
        },
        code: {
          fontSize: pxToEm(14, 16),
        },
        'h2 code': {
          fontSize: pxToEm(21, 24),
        },
        'h3 code': {
          fontSize: pxToEm(18, 20),
        },
        pre: {
          fontSize: pxToEm(14, 16),
          lineHeight: round(24 / 14),
          marginTop: pxToEm(24, 14),
          marginBottom: pxToEm(24, 14),
          borderRadius: pxToRem(6, base),
          paddingTop: pxToEm(12, 14),
          paddingRight: pxToEm(16, 14),
          paddingBottom: pxToEm(12, 14),
          paddingLeft: pxToEm(16, 14),
        },
        ol: {
          marginTop: pxToEm(20, 16),
          marginBottom: pxToEm(20, 16),
          paddingLeft: pxToEm(26, 16),
        },
        ul: {
          marginTop: pxToEm(20, 16),
          marginBottom: pxToEm(20, 16),
          paddingLeft: pxToEm(26, 16),
        },
        li: {
          marginTop: pxToEm(8, 16),
          marginBottom: pxToEm(8, 16),
        },
        'ol > li': {
          paddingLeft: pxToEm(6, 16),
        },
        'ul > li': {
          paddingLeft: pxToEm(6, 16),
        },
        '> ul > li p': {
          marginTop: pxToEm(12, 16),
          marginBottom: pxToEm(12, 16),
        },
        '> ul > li > *:first-child': {
          marginTop: pxToEm(20, 16),
        },
        '> ul > li > *:last-child': {
          marginBottom: pxToEm(20, 16),
        },
        '> ol > li > *:first-child': {
          marginTop: pxToEm(20, 16),
        },
        '> ol > li > *:last-child': {
          marginBottom: pxToEm(20, 16),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: pxToEm(12, 16),
          marginBottom: pxToEm(12, 16),
        },
        dl: {
          marginTop: pxToEm(20, 16),
          marginBottom: pxToEm(20, 16),
        },
        dt: {
          marginTop: pxToEm(20, 16),
        },
        dd: {
          marginTop: pxToEm(8, 16),
          paddingLeft: pxToEm(26, 16),
        },
        hr: {
          marginTop: pxToEm(48, 16),
          marginBottom: pxToEm(48, 16),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: pxToEm(14, 16),
          lineHeight: round(24 / 14),
        },
        'thead th': {
          paddingRight: pxToEm(8, 14),
          paddingBottom: pxToEm(8, 14),
          paddingLeft: pxToEm(8, 14),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: pxToEm(8, 14),
          paddingRight: pxToEm(8, 14),
          paddingBottom: pxToEm(8, 14),
          paddingLeft: pxToEm(8, 14),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
        figure: {
          marginTop: pxToEm(32, 16),
          marginBottom: pxToEm(32, 16),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: pxToEm(14, 16),
          lineHeight: round(20 / 14),
          marginTop: pxToEm(12, 14),
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  lg: {
    css: [
      {
        fontSize: pxToRem(18, base),
        lineHeight: round(32 / 18),
        p: {
          marginTop: pxToEm(24, 18),
          marginBottom: pxToEm(24, 18),
        },
        '[class~="lead"]': {
          fontSize: pxToEm(22, 18),
          lineHeight: round(32 / 22),
          marginTop: pxToEm(24, 22),
          marginBottom: pxToEm(24, 22),
        },
        blockquote: {
          marginTop: pxToEm(40, 24),
          marginBottom: pxToEm(40, 24),
          paddingLeft: pxToEm(24, 24),
        },
        h1: {
          fontSize: pxToEm(48, 18),
          marginTop: '0',
          marginBottom: pxToEm(40, 48),
          lineHeight: round(48 / 48),
        },
        h2: {
          fontSize: pxToEm(30, 18),
          marginTop: pxToEm(56, 30),
          marginBottom: pxToEm(32, 30),
          lineHeight: round(40 / 30),
        },
        h3: {
          fontSize: pxToEm(24, 18),
          marginTop: pxToEm(40, 24),
          marginBottom: pxToEm(16, 24),
          lineHeight: round(36 / 24),
        },
        h4: {
          marginTop: pxToEm(32, 18),
          marginBottom: pxToEm(8, 18),
          lineHeight: round(28 / 18),
        },
        img: {
          marginTop: pxToEm(32, 18),
          marginBottom: pxToEm(32, 18),
        },
        picture: {
          marginTop: pxToEm(32, 18),
          marginBottom: pxToEm(32, 18),
        },
        'picture > img': {
          marginTop: '0',
          marginBottom: '0',
        },
        video: {
          marginTop: pxToEm(32, 18),
          marginBottom: pxToEm(32, 18),
        },
        kbd: {
          fontSize: pxToEm(16, 18),
          borderRadius: pxToRem(5, base),
          paddingTop: pxToEm(4, 18),
          paddingRight: pxToEm(8, 18),
          paddingBottom: pxToEm(4, 18),
          paddingLeft: pxToEm(8, 18),
        },
        code: {
          fontSize: pxToEm(16, 18),
        },
        'h2 code': {
          fontSize: pxToEm(26, 30),
        },
        'h3 code': {
          fontSize: pxToEm(21, 24),
        },
        pre: {
          fontSize: pxToEm(16, 18),
          lineHeight: round(28 / 16),
          marginTop: pxToEm(32, 16),
          marginBottom: pxToEm(32, 16),
          borderRadius: pxToRem(6, base),
          paddingTop: pxToEm(16, 16),
          paddingRight: pxToEm(24, 16),
          paddingBottom: pxToEm(16, 16),
          paddingLeft: pxToEm(24, 16),
        },
        ol: {
          marginTop: pxToEm(24, 18),
          marginBottom: pxToEm(24, 18),
          paddingLeft: pxToEm(28, 18),
        },
        ul: {
          marginTop: pxToEm(24, 18),
          marginBottom: pxToEm(24, 18),
          paddingLeft: pxToEm(28, 18),
        },
        li: {
          marginTop: pxToEm(12, 18),
          marginBottom: pxToEm(12, 18),
        },
        'ol > li': {
          paddingLeft: pxToEm(8, 18),
        },
        'ul > li': {
          paddingLeft: pxToEm(8, 18),
        },
        '> ul > li p': {
          marginTop: pxToEm(16, 18),
          marginBottom: pxToEm(16, 18),
        },
        '> ul > li > *:first-child': {
          marginTop: pxToEm(24, 18),
        },
        '> ul > li > *:last-child': {
          marginBottom: pxToEm(24, 18),
        },
        '> ol > li > *:first-child': {
          marginTop: pxToEm(24, 18),
        },
        '> ol > li > *:last-child': {
          marginBottom: pxToEm(24, 18),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: pxToEm(16, 18),
          marginBottom: pxToEm(16, 18),
        },
        dl: {
          marginTop: pxToEm(24, 18),
          marginBottom: pxToEm(24, 18),
        },
        dt: {
          marginTop: pxToEm(24, 18),
        },
        dd: {
          marginTop: pxToEm(12, 18),
          paddingLeft: pxToEm(28, 18),
        },
        hr: {
          marginTop: pxToEm(56, 18),
          marginBottom: pxToEm(56, 18),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: pxToEm(16, 18),
          lineHeight: round(24 / 16),
        },
        'thead th': {
          paddingRight: pxToEm(12, 16),
          paddingBottom: pxToEm(12, 16),
          paddingLeft: pxToEm(12, 16),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: pxToEm(12, 16),
          paddingRight: pxToEm(12, 16),
          paddingBottom: pxToEm(12, 16),
          paddingLeft: pxToEm(12, 16),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
        figure: {
          marginTop: pxToEm(32, 18),
          marginBottom: pxToEm(32, 18),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: pxToEm(16, 18),
          lineHeight: round(24 / 16),
          marginTop: pxToEm(16, 16),
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
  xl: {
    css: [
      {
        fontSize: pxToRem(20, base),
        lineHeight: round(36 / 20),
        p: {
          marginTop: pxToEm(24, 20),
          marginBottom: pxToEm(24, 20),
        },
        '[class~="lead"]': {
          fontSize: pxToEm(24, 20),
          lineHeight: round(36 / 24),
          marginTop: pxToEm(24, 24),
          marginBottom: pxToEm(24, 24),
        },
        blockquote: {
          marginTop: pxToEm(48, 30),
          marginBottom: pxToEm(48, 30),
          paddingLeft: pxToEm(32, 30),
        },
        h1: {
          fontSize: pxToEm(56, 20),
          marginTop: '0',
          marginBottom: pxToEm(48, 56),
          lineHeight: round(56 / 56),
        },
        h2: {
          fontSize: pxToEm(36, 20),
          marginTop: pxToEm(56, 36),
          marginBottom: pxToEm(32, 36),
          lineHeight: round(40 / 36),
        },
        h3: {
          fontSize: pxToEm(30, 20),
          marginTop: pxToEm(48, 30),
          marginBottom: pxToEm(20, 30),
          lineHeight: round(40 / 30),
        },
        h4: {
          marginTop: pxToEm(36, 20),
          marginBottom: pxToEm(12, 20),
          lineHeight: round(32 / 20),
        },
        img: {
          marginTop: pxToEm(40, 20),
          marginBottom: pxToEm(40, 20),
        },
        picture: {
          marginTop: pxToEm(40, 20),
          marginBottom: pxToEm(40, 20),
        },
        'picture > img': {
          marginTop: '0',
          marginBottom: '0',
        },
        video: {
          marginTop: pxToEm(40, 20),
          marginBottom: pxToEm(40, 20),
        },
        kbd: {
          fontSize: pxToEm(18, 20),
          borderRadius: pxToRem(5, base),
          paddingTop: pxToEm(5, 20),
          paddingRight: pxToEm(8, 20),
          paddingBottom: pxToEm(5, 20),
          paddingLeft: pxToEm(8, 20),
        },
        code: {
          fontSize: pxToEm(18, 20),
        },
        'h2 code': {
          fontSize: pxToEm(31, 36),
        },
        'h3 code': {
          fontSize: pxToEm(27, 30),
        },
        pre: {
          fontSize: pxToEm(18, 20),
          lineHeight: round(32 / 18),
          marginTop: pxToEm(36, 18),
          marginBottom: pxToEm(36, 18),
          borderRadius: pxToRem(8, base),
          paddingTop: pxToEm(20, 18),
          paddingRight: pxToEm(24, 18),
          paddingBottom: pxToEm(20, 18),
          paddingLeft: pxToEm(24, 18),
        },
        ol: {
          marginTop: pxToEm(24, 20),
          marginBottom: pxToEm(24, 20),
          paddingLeft: pxToEm(32, 20),
        },
        ul: {
          marginTop: pxToEm(24, 20),
          marginBottom: pxToEm(24, 20),
          paddingLeft: pxToEm(32, 20),
        },
        li: {
          marginTop: pxToEm(12, 20),
          marginBottom: pxToEm(12, 20),
        },
        'ol > li': {
          paddingLeft: pxToEm(8, 20),
        },
        'ul > li': {
          paddingLeft: pxToEm(8, 20),
        },
        '> ul > li p': {
          marginTop: pxToEm(16, 20),
          marginBottom: pxToEm(16, 20),
        },
        '> ul > li > *:first-child': {
          marginTop: pxToEm(24, 20),
        },
        '> ul > li > *:last-child': {
          marginBottom: pxToEm(24, 20),
        },
        '> ol > li > *:first-child': {
          marginTop: pxToEm(24, 20),
        },
        '> ol > li > *:last-child': {
          marginBottom: pxToEm(24, 20),
        },
        'ul ul, ul ol, ol ul, ol ol': {
          marginTop: pxToEm(16, 20),
          marginBottom: pxToEm(16, 20),
        },
        dl: {
          marginTop: pxToEm(24, 20),
          marginBottom: pxToEm(24, 20),
        },
        dt: {
          marginTop: pxToEm(24, 20),
        },
        dd: {
          marginTop: pxToEm(12, 20),
          paddingLeft: pxToEm(32, 20),
        },
        hr: {
          marginTop: pxToEm(56, 20),
          marginBottom: pxToEm(56, 20),
        },
        'hr + *': {
          marginTop: '0',
        },
        'h2 + *': {
          marginTop: '0',
        },
        'h3 + *': {
          marginTop: '0',
        },
        'h4 + *': {
          marginTop: '0',
        },
        table: {
          fontSize: pxToEm(18, 20),
          lineHeight: round(28 / 18),
        },
        'thead th': {
          paddingRight: pxToEm(12, 18),
          paddingBottom: pxToEm(16, 18),
          paddingLeft: pxToEm(12, 18),
        },
        'thead th:first-child': {
          paddingLeft: '0',
        },
        'thead th:last-child': {
          paddingRight: '0',
        },
        'tbody td, tfoot td': {
          paddingTop: pxToEm(16, 18),
          paddingRight: pxToEm(12, 18),
          paddingBottom: pxToEm(16, 18),
          paddingLeft: pxToEm(12, 18),
        },
        'tbody td:first-child, tfoot td:first-child': {
          paddingLeft: '0',
        },
        'tbody td:last-child, tfoot td:last-child': {
          paddingRight: '0',
        },
        figure: {
          marginTop: pxToEm(40, 20),
          marginBottom: pxToEm(40, 20),
        },
        'figure > *': {
          marginTop: '0',
          marginBottom: '0',
        },
        figcaption: {
          fontSize: pxToEm(18, 20),
          lineHeight: round(28 / 18),
          marginTop: pxToEm(18, 18),
        },
      },
      {
        '> :first-child': {
          marginTop: '0',
        },
        '> :last-child': {
          marginBottom: '0',
        },
      },
    ],
  },
})

const defaultCSS = {

  color: 'var(--tw-prose-body)',
  maxWidth: '65ch',
  p: {}, // Required to maintain correct order when merging
  '[class~="lead"]': {
    color: 'var(--tw-prose-lead)',
  },
  a: {
    color: 'var(--tw-prose-links)',
    textDecoration: 'underline',
    fontWeight: '500',
  },
  strong: {
    color: 'var(--tw-prose-bold)',
    fontWeight: '600',
  },
  'a strong': {
    color: 'inherit',
  },
  'blockquote strong': {
    color: 'inherit',
  },
  'thead th strong': {
    color: 'inherit',
  },
  ol: {
    listStyleType: 'decimal',
  },
  'ol[type="A"]': {
    listStyleType: 'upper-alpha',
  },
  'ol[type="a"]': {
    listStyleType: 'lower-alpha',
  },
  'ol[type="A" s]': {
    listStyleType: 'upper-alpha',
  },
  'ol[type="a" s]': {
    listStyleType: 'lower-alpha',
  },
  'ol[type="I"]': {
    listStyleType: 'upper-roman',
  },
  'ol[type="i"]': {
    listStyleType: 'lower-roman',
  },
  'ol[type="I" s]': {
    listStyleType: 'upper-roman',
  },
  'ol[type="i" s]': {
    listStyleType: 'lower-roman',
  },
  'ol[type="1"]': {
    listStyleType: 'decimal',
  },
  ul: {
    listStyleType: 'disc',
  },
  'ol > li::marker': {
    fontWeight: '400',
    color: 'var(--tw-prose-counters)',
  },
  'ul > li::marker': {
    color: 'var(--tw-prose-bullets)',
  },
  dt: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  hr: {
    borderColor: 'var(--tw-prose-hr)',
    borderTopWidth: 1,
  },
  blockquote: {
    fontWeight: '500',
    fontStyle: 'italic',
    color: 'var(--tw-prose-quotes)',
    borderLeftWidth: '0.25rem',
    borderLeftColor: 'var(--tw-prose-quote-borders)',
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
  },
  'blockquote p:first-of-type::before': {
    content: 'open-quote',
  },
  'blockquote p:last-of-type::after': {
    content: 'close-quote',
  },
  h1: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '800',
  },
  'h1 strong': {
    fontWeight: '900',
    color: 'inherit',
  },
  h2: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '700',
  },
  'h2 strong': {
    fontWeight: '800',
    color: 'inherit',
  },
  h3: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  'h3 strong': {
    fontWeight: '700',
    color: 'inherit',
  },
  h4: {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
  },
  'h4 strong': {
    fontWeight: '700',
    color: 'inherit',
  },
  img: {}, // Required to maintain correct order when merging
  picture: {
    display: 'block',
  },
  kbd: {
    fontWeight: '500',
    fontFamily: 'inherit',
    color: 'var(--tw-prose-kbd)',
    boxShadow:
      '0 0 0 1px rgb(var(--tw-prose-kbd-shadows) / 10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows) / 10%)',
  },
  code: {
    color: 'var(--tw-prose-code)',
    fontWeight: '600',
  },
  'code::before': {
    content: '"`"',
  },
  'code::after': {
    content: '"`"',
  },
  'a code': {
    color: 'inherit',
  },
  'h1 code': {
    color: 'inherit',
  },
  'h2 code': {
    color: 'inherit',
  },
  'h3 code': {
    color: 'inherit',
  },
  'h4 code': {
    color: 'inherit',
  },
  'blockquote code': {
    color: 'inherit',
  },
  'thead th code': {
    color: 'inherit',
  },
  pre: {
    color: 'var(--tw-prose-pre-code)',
    backgroundColor: 'var(--tw-prose-pre-bg)',
    overflowX: 'auto',
    fontWeight: '400',
  },
  'pre code': {
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderRadius: '0',
    padding: '0',
    fontWeight: 'inherit',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
  },
  'pre code::before': {
    content: 'none',
  },
  'pre code::after': {
    content: 'none',
  },
  table: {
    width: '100%',
    tableLayout: 'auto',
    textAlign: 'left',
    marginTop: pxToEm(32, 16),
    marginBottom: pxToEm(32, 16),
  },
  thead: {
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--tw-prose-th-borders)',
  },
  'thead th': {
    color: 'var(--tw-prose-headings)',
    fontWeight: '600',
    verticalAlign: 'bottom',
  },
  'tbody tr': {
    borderBottomWidth: '1px',
    borderBottomColor: 'var(--tw-prose-td-borders)',
  },
  'tbody tr:last-child': {
    borderBottomWidth: '0',
  },
  'tbody td': {
    verticalAlign: 'baseline',
  },
  tfoot: {
    borderTopWidth: '1px',
    borderTopColor: 'var(--tw-prose-th-borders)',
  },
  'tfoot td': {
    verticalAlign: 'top',
  },
  'figure > *': {}, // Required to maintain correct order when merging
  figcaption: {
    color: 'var(--tw-prose-captions)',
  }
}

const getStyles = (baseFontSize) => ({
  DEFAULT: {
    css: [
      defaultCSS,
      colorModifiers.gray.css,
      ...defaultModifiers(baseFontSize).base.css,
    ],
  },
  invert: invertModifier.invert,
  ...defaultModifiers(baseFontSize) 
}) 


module.exports = getStyles
