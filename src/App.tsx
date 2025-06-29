import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customers from './components/Customers';
import Services from './components/Services';
import Program from './components/Program';
import Faq from './components/Faq';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Customers />
      <Services />
      <Program />
      <Faq />
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
