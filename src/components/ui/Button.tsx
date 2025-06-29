import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonHTMLAttributes } from 'react';

const button = cva(
  'rounded-xl px-4 py-3 text-nowrap text-sm transition-transform duration-150 ease-in-out first-letter:capitalize active:scale-95 relative overflow-hidden font-semibold',
  {
    variants: {
      intend: {
        primary: 'bg-prime-500 text-prime-100',
        secondary: 'bg-prime-300/4 text-prime-100 border border-gray-500',
      },
    },
  }
);

const span = cva(
  'absolute -top-1 left-3/10 inline-block size-12 -translate-y-1/2 rounded-full blur-xl',
  {
    variants: {
      intend: {
        primary: 'bg-prime-400/80',
      },
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  intend?: VariantProps<typeof button>['intend'];
  className?: string;
}

export const Button = ({
  label,
  intend = 'primary',
  className = '',
}: ButtonProps) => {
  return (
    <button className={cn(button({ intend }), className)}>
      {intend === 'primary' && <span className={span({ intend })}></span>}
      {label}
    </button>
  );
};
