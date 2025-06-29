import HeroImg from '@/assets/images/hero.png';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Heading } from './ui/Headings';
import { useCallback, useState, type ChangeEvent } from 'react';

type HeroFormDataType = {
  name: string;
  email: string;
  company: string;
};

const HeroForm = () => {
  const [formData, setFormData] = useState<HeroFormDataType>({
    name: '',
    email: '',
    company: '',
  });

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const { name, email, company } = formData;

  return (
    <form
      className='bg-prime-300/8 border-prime-300/4 space-y-4 rounded-2xl border p-8 text-sm text-gray-300 backdrop-blur-xl'
      onSubmit={handleFormSubmit}
    >
      <Heading
        as='h4'
        title='Become a partner'
        headingColor={'white'}
        className='mb-6'
      />
      <Input
        id='full-name'
        type='text'
        name='name'
        label='Full Name'
        placeholder='Type your name here...'
        required={true}
        value={name}
        onChange={handleInputChange}
      />
      <Input
        id='email'
        type='email'
        name='email'
        label='Email Address'
        placeholder='Type your email here...'
        required={true}
        value={email}
        onChange={handleInputChange}
      />
      <Input
        id='company-name'
        type='text'
        name='company'
        label='Company Name'
        placeholder='Type your company name here...'
        required={true}
        value={company}
        onChange={handleInputChange}
      />
      <Button label='Submit application' intend='primary' />
    </form>
  );
};

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className='bg-prime-800 flex h-auto items-center justify-center py-20'
    >
      <div className='mx-auto w-9/10 md:w-8/10'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='flex flex-col justify-center gap-2'>
            <Heading
              as='h2'
              title='Join the CometChat partner universe'
              headingColor={'white'}
            />
            <p className='text-xl text-gray-400'>
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </p>
          </div>
          <div className='py-4'>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
