import './App.css';
import sgp_image from './Assets/sgp_image.png';




const About = () => {
    return (

      <section id="about" className="px-8 py-1800 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Text on the left */}
        <div className="flex-1">
          <h1 className="m-6 text-2xl font-semibold">Sai Ganga Panakeia</h1>
          <p className="text-left m-6 leading-relaxed">
            Combines Ayurveda with modern AI and biotechnology to offer personalized,
            non-invasive treatments. Their Docture-Poly™ device provides health insights 
            based on individual metabolic profiles. Founded by Dr. Ravishankar Polisetty,
            the organization focuses on holistic care and ongoing research.
          </p>
          <h2 className="m-6 text-2xl font-semibold">Dr.Ravi Shankar Polisetty</h2>
          <p className="text-left m-6 leading-relaxed">
           MD Physician <br></br>
          Ordinatura General, Lap and Laser Surgery<br></br>
          Ordinatura Cardiovascular Surgery<br></br>
          ND Doctor of Naturopathic Medicine, India<br></br>
          DHS Doctorate In Humanitarian Sciences, Canada and USA<br></br>
          <button><a href="https://saigangapanakeia.in/">Know more <span className="ml-2">&#8594;</span></a></button>
          </p>
        </div>
    
        {/* Image on the right */}
        <div className="flex-1 flex flex-col items-center justify-center">
  <img
    src={sgp_image}
    alt="Founder image"
    className="rounded-xl w-full max-w-sm object-cover"
  />
  <h2 className="mt-4 text-lg font-medium text-center">
    Dr. Ravi Shankar Polisetty
  </h2>
</div>
    
      </div>
    </section>
    
    );
};

export default About;