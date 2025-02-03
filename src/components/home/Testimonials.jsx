import { useState } from "react";
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import user_5 from '../../assets/user-4.png'



const Testimonials = () => {
    const testimonials = [
        {
          name: "Manzi Jack",
          role: "Product Designer, Kigali",
          profileImage: user_1,
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          name: "Jane Doe",
          role: "UX Designer, Nairobi",
          profileImage: user_2,
          video: "https://www.w3schools.com/html/movie.mp4",
        },
        {
          name: "John Smith",
          role: "Frontend Developer, Lagos",
          profileImage: user_3,
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
        {
          name: "Alice Johnson",
          role: "Backend Developer, Cape Town",
          profileImage: user_4,
          video: "https://www.w3schools.com/html/movie.mp4",
        },
        {
          name: "Chris Brown",
          role: "Data Scientist, Accra",
          profileImage: user_5,
          video: "https://www.w3schools.com/html/mov_bbb.mp4",
        },
      ];
    
      // Pagination state
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 3;
    
      // Calculate the range of items for the current page
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentTestimonials = testimonials.slice(
        indexOfFirstItem,
        indexOfLastItem
      );
    
      // Calculate total pages
      const totalPages = Math.ceil(testimonials.length / itemsPerPage);
    
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-left">
    <h2 className="text-2xl font-bold ">
      Users are in Love with Skills Challenges Program
    </h2>
    <p className=" text-gray-600 mt-2">
      See what our clients say about working with us. Their success speaks for
      our dedication and expertise.
    </p>
    </div>

    {/* Testimonials Grid */}
    <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
      {currentTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 flex flex-col items-center"
        >
          {/* Video */}
          <div className="w-full h-40 rounded-md overflow-hidden">
            <video
              controls
              className="w-full h-full object-cover"
              src={testimonial.video}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* User Profile */}
          <div className="mt-6 flex  items-center">
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
            <div className="flex-col text-center">
            <h3 className="font-bold mt-2 " >{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Pagination */}
    <div className="mt-6 flex justify-center space-x-2">
      {[...Array(totalPages)].map((_, pageIndex) => (
        <button
          key={pageIndex}
          onClick={() => handlePageChange(pageIndex + 1)}
          className={`w-4 h-4 rounded-full ${
            currentPage === pageIndex + 1
              ? "bg-blue-500"
              : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  </div>
  )
}

export default Testimonials
