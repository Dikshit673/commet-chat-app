import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { fontColor } from './variantStyles';

const heading = cva('font-medium text-wrap', {
  variants: {
    as: {
      h1: 'text-6xl mb-3',
      h2: 'text-5xl mb-2.5',
      h3: 'text-4xl mb-2',
      h4: 'text-3xl mb-1.5',
      h5: 'text-2xl mb-1',
      h6: 'text-xl mb-0.5',
    },
  },
});

type HeadingProps = {
  as: VariantProps<typeof heading>['as'];
  title: string;
  headingColor?: VariantProps<typeof fontColor>['color'];
  className?: string;
};

export const Heading = ({
  as,
  title,
  headingColor = 'black',
  className = '',
}: HeadingProps) => {
  const Tag = as;
  if (!Tag) return null;
  return (
    <Tag
      className={cn(
        heading({ as }),
        fontColor({ color: headingColor }),
        className
      )}
    >
      {title}
    </Tag>
  );
};
