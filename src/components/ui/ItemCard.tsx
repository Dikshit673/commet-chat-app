import { cn } from '@/lib/utils';
import type { IconType } from 'react-icons';
import type { VariantProps } from 'class-variance-authority';
import { iconBgAndFontColor, fontColor } from './variantStyles';
import { Heading } from './Headings';

interface ItemCardProps {
  icon: IconType;
  title: string;
  description: string;
  iconColor?: VariantProps<typeof iconBgAndFontColor>['color'];
  headingColor?: VariantProps<typeof fontColor>['color'];
}

export const ItemCard = ({
  icon: Icon,
  title,
  description,
  iconColor = 'orange',
  headingColor = 'black',
}: ItemCardProps) => {
  return (
    <div className='row-span-3 grid grid-rows-subgrid gap-0'>
      <div
        className={cn(
          'mb-6 flex size-10 items-center justify-center rounded-full',
          iconBgAndFontColor({ color: iconColor })
        )}
      >
        <Icon />
      </div>
      <Heading as='h4' title={title} headingColor={headingColor} />
      <p className='text-gray-400'>{description}</p>
    </div>
  );
};

export default ItemCard;
