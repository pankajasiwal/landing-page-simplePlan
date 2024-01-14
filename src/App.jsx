import Blogs from './components/Blogs';
import Category from './components/Category';
import Certified from './components/Certified';
import Discover from './components/Discover';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Love from './components/Love';
import Navbar from './components/Navbar';
import Passion from './components/Passion';
import Reasons from './components/Reasons';
import style from './style';

function App() {
  return (
    <>
      <div className='w-full overflow-hidden'>
        <Navbar />

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${style.mid}`}>
          <Explore />
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Discover />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Category />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid} relative`}>
          <div className={`${style.boxWidth}`}>
            <Reasons />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Love />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Certified />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Blogs />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid}`}>
          <div className={`${style.boxWidth}`}>
            <Passion />
          </div>
        </div>

        <div className={`${style.paddingX} ${style.mid} bg-[#F4F7FA]`}>
          <div className={`${style.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
