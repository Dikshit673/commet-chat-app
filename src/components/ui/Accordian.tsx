import { cn } from '@/lib/utils';
import { Heading } from './Headings';
import { CgChevronDown } from 'react-icons/cg';
import type { VariantProps } from 'class-variance-authority';
import type { fontColor } from './variantStyles';

type AccordianProps = {
  id: string;
  activeId: string;
  setActiveId: (activeId: string) => void;
  question: string;
  answer: string;
  headingColor?: VariantProps<typeof fontColor>['color'];
};

export const Accordian = ({
  id,
  activeId,
  setActiveId,
  question,
  answer,
  headingColor = 'black',
}: AccordianProps) => {
  return (
    <li className='bg-prime-200/4 shadow-prime-200/8 rounded-2xl shadow-sm transition-all duration-1000 ease-in-out'>
      <button
        className='flex h-full w-full items-center justify-between gap-2 px-6 py-4'
        onClick={() => setActiveId(activeId === id ? '' : id)}
      >
        <Heading
          as='h6'
          title={question}
          headingColor={headingColor}
          className='text-base font-semibold'
        />
        <CgChevronDown
          className={cn(
            'size-6 transition-transform duration-300 ease-in-out',
            activeId === id && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          activeId === id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className='overflow-hidden'>
          <p className='px-6 pb-4 text-gray-500'>{answer}</p>
        </div>
      </div>
    </li>
  );
};
