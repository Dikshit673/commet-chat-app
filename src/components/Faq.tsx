import { FaqData } from './data/Faq';
import { Heading } from './ui/Headings';
import { useState } from 'react';

import { Accordian } from './ui/Accordian';

const Faq = () => {
  const [activeId, setActiveId] = useState<string>('');
  return (
    <section className='py-8'>
      <div className='mx-auto w-9/10 sm:w-7/10 md:w-6/10 lg:w-4/10'>
        <div className='py-12 text-center'>
          <Heading as='h5' title="FAQ's" headingColor={'orange'} />
          <Heading
            as='h2'
            title='We want to help you with all your doubts '
            headingColor={'black'}
          />
        </div>
        <div>
          <ul className='flex flex-col gap-4'>
            {FaqData.map((item) => {
              const { id, question, answer } = item;
              return (
                <Accordian
                  key={id}
                  id={id}
                  activeId={activeId}
                  setActiveId={setActiveId}
                  question={question}
                  answer={answer}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Faq;
