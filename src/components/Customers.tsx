import { CustomersData } from './data/Customers';

const Customers = () => {
  return (
    <section className='bg-prime-800 py-8'>
      <div className='bg-prime-800/60 overflow-hidden rounded-lg py-6 backdrop-blur-md'>
        <div
          className='animate-loop flex min-w-max'
          style={{ '--loop-duration': '60s' } as React.CSSProperties}
        >
          {[...CustomersData, ...CustomersData].map((item, idx) => {
            const { id, icon, title } = item;
            return (
              <img
                key={`${id}-${idx}`}
                src={icon}
                alt={title}
                className='inline-block h-10 px-10'
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Customers;
