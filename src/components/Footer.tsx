import FooterImg from '@/assets/images/bg-Footer.png';
import { FooterData } from './data/Footer';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <section
        className='py-8 text-sm text-gray-200'
        style={{
          backgroundImage: `url(${FooterImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '480px',
        }}
      >
        <div className='mx-auto w-9/10'>
          <h3 className='mb-4 text-3xl capitalize'>cometchat</h3>

          <ul className='grid grid-cols-1 md:grid-cols-4'>
            {FooterData.map((item) => {
              const { id, title, list } = item;
              return (
                <li
                  className='row-span-2 mb-6 grid grid-rows-subgrid space-y-4 capitalize *:space-y-2'
                  key={id}
                >
                  <h5 className='text-prime-500'>{title}</h5>
                  <ul>
                    {list.map((listItem) => {
                      const { id, title, subList } = listItem;
                      return (
                        <li className='mb-6 space-y-2 *:space-y-2' key={id}>
                          <h6 className='text-gray-400'>{title}</h6>
                          <ul>
                            {subList.map((subListItem) => {
                              const { id, title } = subListItem;
                              return (
                                <li key={id} className='hover:text-prime-500'>
                                  {title}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <hr />

          <div className='flex items-center justify-between gap-4 pt-4'>
            <div className='*:hover:text-prime-500 flex items-center gap-6'>
              <p>2023 &copy; CometChat</p>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
            <ul className='*:hover:text-prime-500 flex items-center gap-4 capitalize'>
              <li className='flex items-center gap-1'>
                <FaFacebook />
                <span>facebook</span>
              </li>
              <li className='flex items-center gap-1'>
                <FaLinkedin />
                <span>linkedIn</span>
              </li>
              <li className='flex items-center gap-1'>
                <FaInstagram />
                <span>Instagram</span>
              </li>
              <li className='flex items-center gap-1'>
                <FaTwitter />
                <span>twitter</span>
              </li>
              <li className='flex items-center gap-1'>
                <FaGithub />
                <span>gitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
