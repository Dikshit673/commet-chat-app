import { ServicesData } from './data/Services';
import CardPresenter from './ui/CardPresenter';
import { Heading } from './ui/Headings';

const Services = () => {
  return (
    <section className='bg-prime-800 py-8'>
      <div className='mx-auto w-9/10'>
        <div className='w-140 space-y-1 py-12'>
          <Heading as='h5' title='Be a partner' headingColor={'orange'} />
          <Heading
            as='h2'
            title='CometChat partner advantages'
            headingColor={'white'}
          />
        </div>
        <div className='py-8'>
          <CardPresenter
            data={ServicesData}
            headingColor='white'
            iconColor='orange'
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
