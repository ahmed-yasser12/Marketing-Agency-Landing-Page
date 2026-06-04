import  'react';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import Contacts from './components/Contacts';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {


	const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : "light");
	return (
    <>
      <main className='dark:bg-black relative'>
		<Toaster/>
		<Navbar theme={theme} setTheme={setTheme} />
		<Hero />
		<TrustedBy />
		<Services/>
		<OurWork/>
		<Teams/>
		<Contacts/>
		<Footer theme={theme}/>
	
	
      </main>
    </>
  );
};

export default App;
