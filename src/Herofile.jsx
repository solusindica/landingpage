import './App.css';
import Heroimg2 from './Assets/Heroimg2.jpg';

const Herofile = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${Heroimg2})` }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>

      
      <div className="relative z-10 px-6 md:px-12 py-16  text-left animate-slideInLeft max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white leading-snug">
          Ayurveda Meets <br /> Modern Medicine and AI
        </h1>
        <p className="text-2xl sm:text-2xl text-white  max-w-2xl">
          A holistic, intelligent path to personalized wellness.
        </p>
      </div>
    </section>
  );
};

export default Herofile;
