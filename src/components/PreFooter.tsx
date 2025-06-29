import PreFooterImg from '@/assets/images/Pre-footer.png';
import { Button } from './ui/Button';
import { Heading } from './ui/Headings';

const PreFooter = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${PreFooterImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '480px',
      }}
      className='bg-prime-800 flex items-center justify-center'
    >
      <div className='flex h-full flex-col items-center justify-center gap-4 text-white *:first-letter:capitalize'>
        <Heading as='h2' title='get started for free' headingColor={'white'} />
        <div className='text-center text-sm text-gray-400'>
          <p>build and test for as long as you need.</p>
          <p>pick a plan when you're ready.</p>
        </div>
        <div className='flex items-center gap-2'>
          <Button label='start free trial' intend={'secondary'} />
          <Button label='schedule a demo' intend={'primary'} />
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
