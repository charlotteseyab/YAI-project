import React from "react";
import Product from "./sections/Product";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Innovator from "./sections/Innovator";
import Review from "./sections/Review";
import Contact from "./sections/Contact";

//Hero section
// const Hero = () => {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
//       Video Background
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="{HeroVid}" type="video/mp4" />
//         {/* Replace with your video path */}
//         Your browser does not support the video tag.
//       </video>
//       {/* Glass Effect Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg"></div>
//       {/* Content */}
//       <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-white">
//         {/* Left Column (Text) */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1
//             className="text-5xl font-bold mb-6"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             <span className="block text-yellow-400">Welcome </span>
//             <span className="block text-red-600">to</span>
//             <span className="block text-white"> Brown & Brown Foods</span>
//           </h1>
//           <p
//             className="text-lg mb-8"
//             style={{ fontFamily: "Montserrat, sans-serif" }}
//           >
//             Healthy, delicious, and convenient breakfast cereals
//           </p>
//           <a
//             href="/order"
//             className="bg-yellow-400 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
//           >
//             ORDER NOW
//           </a>
//         </div>

//         {/* Right Column (Image or Decorative Element) */}
//         <div className="md:w-1/2 mt-10 md:mt-0">
//           {/* <img
//             src="https://via.placeholder.com/500x500" // Replace with your image URL
//             alt="Delicious Foods"
//             className="rounded-lg shadow-2xl"
//           /> */}
//         </div>
//       </div>
//       {/* Wavy Line Separator */}
//       <svg
//         className="absolute bottom-0 left-0 w-full"
//         height="100"
//         viewBox="0 0 1440 100"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,0 C300,100 600,0 900,0 C1200,0 1440,100 1440,100 L0,100 Z"
//           fill="white" // Change this to match your background color
//         />
//       </svg>
//     </div>
//   );
// };

//product section
// export const Product = () => {
//   return (
//     <div id="products" className="bg-white py-8">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-red-600 mb-8">Our Products</h2>
//         <p className="text-gray-700 text-lg">
//           At Brown & Brown Foods, we produce a variety of healthy and nutritious
//           breakfast cereals:
//         </p>

//         {/* Product Cards */}
//         <div className="flex flex-wrap justify-between mt-8">
//           {[
//             {
//               id: 1,
//               name: "TomBrown",
//               description:
//                 "A traditional Ghanaian cereal made from roasted corn and groundnuts, TomBrown is rich in flavor and nutrients. It's a wholesome option for children, providing energy and essential vitamins to kickstart their day.",
//             },
//             {
//               id: 2,
//               name: "Wheat Cereal",
//               description:
//                 "Made from whole wheat grains, offering a hearty and nutritious breakfast choice. Packed with fiber and protein, it helps keep you full longer and supports digestive health, making it ideal for students and busy professionals.",
//             },
//             {
//               id: 3,
//               name: "Eko-egbeemi",
//               description:
//                 "A unique blend of corn and millet, Eko-egbeemi is a nutritious cereal that provides a good source of energy. Its slightly sweet flavor and smooth texture make it a favorite among workers looking for a quick and healthy breakfast option.",
//             },
//             {
//               id: 4,
//               name: "Oblayo",
//               description:
//                 "A delicious and nutritious cereal made from a mix of grains, including oats and barley, Oblayo is designed for the whole family. It's high in fiber and low in sugar, making it a perfect choice for a balanced breakfast that supports overall health.",
//             },
//           ].map((product) => (
//             <div
//               key={product.id}
//               className="flex-1 mx-2 bg-white rounded-lg shadow-2xl p-6 transition-transform transform hover:scale-105 mb-4 w-full md:w-1/2 lg:w-1/3"
//             >
//               <h3 className="text-xl font-bold text-red-600 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-700">{product.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Connecting Line */}
//         <div className="w-full h-1 bg-red-600 mt-4"></div>
//       </div>
//     </div>
//   );
// };

//Innovator's Section
// export const Innovator = () => {
//   return (
//     <div id="innovator" className="bg-white py-16">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//         {/* Image */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <img
//             src="https://via.placeholder.com/400" // Replace with the actual image URL
//             alt="Innovator"
//             className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
//           />
//         </div>

//         {/* Information */}
//         <div className="md:w-1/2 md:pl-8">
//           <h2 className="text-3xl font-bold text-red-600 mb-4">
//             Meet Our Innovator
//           </h2>
//           <p className="text-gray-700 text-lg mb-4">
//             A passionate female entrepreneur from Oforikrom, Ashanti Region,
//             dedicated to solving the problem of skipped breakfasts. Her mission
//             is to provide healthy, affordable, and convenient breakfast options
//             to improve nutrition and well-being for children, students, and
//             workers.
//           </p>
//           <p className="text-gray-700 text-lg">
//             With a vision to scale production and train 20-50 people, she is
//             making a significant impact in the Food & Health sector.
//           </p>
//         </div>
//       </div>
//       {/* Wavy Line Separator */}
//       <svg
//         className="absolute bottom-0 left-0 w-full"
//         height="100"
//         viewBox="0 0 1440 100"
//         preserveAspectRatio="none"
//       >
//         <path
//           d="M0,0 C300,100 600,0 900,0 C1200,0 1440,100 1440,100 L0,100 Z"
//           fill="white" // Change this to match your background color
//         />
//       </svg>
//     </div>
//   );
// };

//Product Showcase section
// export const Showcase = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Kids Cereal",
//       image: {img1}, // Replace with actual image URL
//       description: "Fun and tasty cereal for children.",
//     },
//     {
//       id: 2,
//       name: "Student Cereal",
//       image: "https://via.placeholder.com/300", // Replace with actual image URL
//       description: "Energy-packed cereal for students.",
//     },
//     {
//       id: 3,
//       name: "Worker Cereal",
//       image: "https://via.placeholder.com/300", // Replace with actual image URL
//       description: "Quick and healthy cereal for professionals.",
//     },
//     {
//       id: 4,
//       name: "Worker Cereal",
//       image: "https://via.placeholder.com/300", // Replace with actual image URL
//       description: "Quick and healthy cereal for professionals.",
//     },
//   ];

//   return (
//     <div id="showcase" className="bg-yellow-100 py-16">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-red-600 mb-8">
//           Product Showcase
//         </h2>
//         <Slider {...settings}>
//           {products.map((product) => (
//             <div key={product.id} className="px-4">
//               <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-48 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-xl font-bold text-red-600 mb-2">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-700">{product.description}</p>
//                 <Link
//                   to="/order#top"
//                   className="bg-yellow-300 text-red-600 px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300 mt-4 inline-block"
//                 >
//                   Buy
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

//Review Section
// import { useState } from "react";

// const reviews = [
//   {
//     name: "Emily Johnson",
//     review: "Amazing experience! The team was incredibly professional and delivered beyond expectations.",
//     rating: 5,
//   },
//   {
//     name: "Michael Smith",
//     review: "Highly recommend! They are skilled, friendly, and dedicated to their work.",
//     rating: 4,
//   },
//   {
//     name: "Sophia Lee",
//     review: "The service was outstanding. I will definitely work with them again!",
//     rating: 5,
//   },
//   {
//     name: "Charlotte Seyab",
//     review: "The service was outstanding. I will definitely buy with them again!",
//     rating: 5,
//   },
// ];

// export const Review = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextReview = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
//   };

//   const prevReview = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
//   };

//   return (
//     <section className="py-12 bg-gray-100 text-center">
//       <div id="review" className="container mx-auto px-6 max-w-2xl">
//         <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
//         <div className="relative bg-white shadow-lg rounded-xl p-6 mt-6">
//           <p className="text-gray-700 text-lg">"{reviews[currentIndex].review}"</p>
//           <h3 className="mt-4 font-semibold text-gray-900">- {reviews[currentIndex].name}</h3>
//           <div className="mt-2 flex justify-center">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <span key={i} className={
//                 `text-yellow-400 text-xl ${i < reviews[currentIndex].rating ? "" : "opacity-30"}`
//               }>★</span>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={prevReview}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//           >
//             ◀
//           </button>
//           <button
//             onClick={nextReview}
//             className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// export const Contact = () => {
//   return (
//     <div className="flex flex-col lg:flex-row bg-white min-h-screen p-10 lg:p-20">

//       {/* Left Section - Contact Form */}
//       <div className="w-full lg:w-2/3 p-6">
//         <h2 className="text-4xl font-bold text-black">Contact <span className="text-red-500">Us</span></h2>
//         <p className="text-gray-600 mt-2">Feel free to contact us any time. We will get back to you as soon as we can!</p>

//         <form className="mt-6">
//           <label className="block text-gray-700 text-sm">Name</label>
//           <input type="text" className="w-full p-2 mt-1 border border-gray-300 rounded outline-none" />

//           <label className="block text-gray-700 text-sm mt-4">Email</label>
//           <input type="email" className="w-full p-2 mt-1 border border-gray-300 rounded outline-none" />

//           <label className="block text-gray-700 text-sm mt-4">Message</label>
//           <textarea className="w-full p-2 mt-1 border border-gray-300 rounded outline-none h-24"></textarea>

//           <button className="w-full bg-black text-white font-bold py-2 mt-4 rounded hover:bg-gray-800">SEND</button>
//         </form>
//       </div>

//       {/* Right Section - Contact Info */}
//       <div className="w-full lg:w-1/3 h-auto mb-10 max-h-60 bg-black bg-opacity-90 bg-gradient-to-r from-red-700/30 to-yellow-600/30 backdrop-filter backdrop-blur-lg text-white p-6 rounded-lg relative">
//         <div className="absolute top-0 left-0 w-6 h-6 bg-yellow-400"></div>
//         <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600"></div>

//         <h3 className="text-lg font-semibold mb-4">Info</h3>
//         <div className="space-y-3 text-sm">
//           <div className="flex items-center space-x-2">
//             <FaEnvelope className="text-yellow-400 text-base" />
//             <p>afuaohenewaaasubonteng@gmail.com</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaPhone className="text-yellow-400 text-base" />
//             <p>+233 055 976 7028</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaMapMarkerAlt className="text-yellow-400 text-base" />
//             <p>Akowa ST, Kumasi Metro, Ashanti Region</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <FaClock className="text-yellow-400 text-base" />
//             <p>09:00 - 18:00</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };







//Main homepage component
const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <Showcase />
      <Innovator />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
