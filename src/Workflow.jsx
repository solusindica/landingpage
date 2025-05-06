import './App.css';
import Screenshot1 from './Assets/Screenshot1.jpg';
import Screenshot2 from './Assets/Screenshot2.jpg';
import Screenshot3 from './Assets/Screenshot3.jpg';
import Screenshot4 from './Assets/Screenshot4.jpg';

const Workflow =() =>{

    return(


<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
      Workflow of Docture-Poly App
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8">
      {[Screenshot1, Screenshot2, Screenshot3, Screenshot4].map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:ring-4 hover:ring-blue-400"
        >
          <img
            src={img}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-100 object-cover" // increased height here
          />
        </div>
      ))}
    </div>
  </div>
</section>


 );
};

export default Workflow;

