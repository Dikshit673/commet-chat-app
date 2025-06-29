import type { VariantProps } from 'class-variance-authority';
import type { fontColor, iconBgAndFontColor } from './variantStyles';
import type { IconType } from 'react-icons';
import ItemCard from './ItemCard';

export type CardItemType = {
  id: number;
  icon: IconType;
  title: string;
  description: string;
};

interface CardPresenterProps {
  data: CardItemType[];
  iconColor?: VariantProps<typeof iconBgAndFontColor>['color'];
  headingColor?: VariantProps<typeof fontColor>['color'];
}

const CardPresenter = ({
  data,
  iconColor = 'orange',
  headingColor = 'black',
}: CardPresenterProps) => {
  return (
    <div className='grid grid-cols-1 gap-6 text-white md:grid-cols-2 lg:grid-cols-3'>
      {data.map((item) => {
        const { id, icon, title, description } = item;
        return (
          <ItemCard
            key={id}
            icon={icon}
            title={title}
            description={description}
            iconColor={iconColor}
            headingColor={headingColor}
          />
        );
      })}
    </div>
  );
};

export default CardPresenter;
