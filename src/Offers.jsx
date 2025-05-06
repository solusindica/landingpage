import './App.css';
import Offer1 from './Assets/Offer1.png';
import Offer2 from './Assets/Offer2.png';
import Offer3 from './Assets/Offer3.png';


const Offers = () =>{
    
    return(

 

<section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
    Exclusive Benefits Await – Reserve Your Docture-Poly™ Today!
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">
      {[
        {
          image: Offer1,
          text: "Get benefits for 4 users with just 1 device.",
        },
        {
          image: Offer2,
          text: "Enjoy a FREE 6-month subscription",
        },
        {
          image: Offer3,
          text: "1 in 4 users will get 50 % Off in Supplements",
        },
      ].map((offer, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          <img
            src={offer.image}
            alt={`Offer ${index + 1}`}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 font-medium">{offer.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

 );
};


export default Offers;