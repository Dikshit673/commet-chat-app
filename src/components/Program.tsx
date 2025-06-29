import { ProgramData } from './data/Program';
import CardPresenter from './ui/CardPresenter';
import { Heading } from './ui/Headings';

const Program = () => {
  return (
    <section className='bg-prime-100 py-8'>
      <div className='mx-auto w-9/10'>
        <div className='w-140 space-y-1 py-12'>
          <Heading as='h5' title='our program' headingColor={'purple'} />
          <Heading
            as='h2'
            title='Types of partnerships program'
            headingColor={'black'}
          />
        </div>
        <CardPresenter
          data={ProgramData}
          headingColor='black'
          iconColor='purple'
        />
      </div>
    </section>
  );
};

export default Program;
