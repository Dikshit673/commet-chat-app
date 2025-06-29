import { Button } from './ui/Button';
import { Heading } from './ui/Headings';

const Navbar = () => {
  return (
    <header className='bg-prime-800/60 fixed top-0 right-0 left-0 z-50 text-white backdrop-blur-md'>
      <section className='py-2'>
        <div className='mx-auto w-9/10'>
          <div className='flex items-center justify-between gap-4'>
            <Heading as='h5' title='cometChat' headingColor={'white'} />
            <nav className='hidden md:block'>
              <ul className='*:hover:text-prime-500 flex items-center gap-4 text-sm font-medium capitalize'>
                <li>plateform</li>
                <li>solutions</li>
                <li>developers</li>
                <li>resources</li>
                <li>pricing</li>
              </ul>
            </nav>
            <div>
              <ul className='flex items-center gap-4 text-sm font-medium capitalize'>
                <li>login</li>
                <li>
                  <Button label='Schedule a demo' intend={'primary'} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
