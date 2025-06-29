import { cva } from 'class-variance-authority';

export const fontColor = cva('', {
  variants: {
    color: {
      orange: 'text-orange-500',
      purple: 'text-prime-500',
      white: 'text-prime-100',
      black: 'text-prime-900',
    },
  },
});

export const iconBgAndFontColor = cva('', {
  variants: {
    color: {
      orange: 'text-orange-500 bg-orange-500/20',
      purple: 'text-prime-500 bg-prime-500/20',
    },
  },
});
