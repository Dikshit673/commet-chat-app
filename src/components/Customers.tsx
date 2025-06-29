import { CustomersData } from './data/Customers';

const Customers = () => {
  return (
    <section className='bg-prime-800 py-8'>
      <div className='overflow-x-hidden'>
        <div className='animate-loop flex items-center'>
          <div className='flex shrink-0 items-center'>
            {CustomersData.map((item) => {
              const { id, icon, title } = item;
              return (
                <figure key={id} className='h-8 shrink-0 pe-8'>
                  <img
                    src={icon}
                    alt={title}
                    className='h-full object-contain'
                  />
                </figure>
              );
            })}
          </div>
          <div className='flex shrink-0 items-center'>
            {CustomersData.map((item) => {
              const { id, icon, title } = item;
              return (
                <figure key={id} className='h-8 shrink-0 pe-8'>
                  <img
                    src={icon}
                    alt={title}
                    className='h-full object-contain'
                  />
                </figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
