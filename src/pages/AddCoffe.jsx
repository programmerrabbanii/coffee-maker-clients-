import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';




const AddCoffe = () => {

    const handleAddToCoffee = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const prices = e.target.prices.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
      
        const allcategory = { name, chef, supplier, prices, category, details, photo };
      
        fetch('http://localhost:5000/coffees', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(allcategory),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'Your coffee has been added successfully!',
                icon: 'success',
                confirmButtonText: 'Cool',
              });
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong!',
              icon: 'error',
              confirmButtonText: 'Okay',
            });
          });
      };


    return (
      <div className="bg-[#f8f8f8] min-h-screen flex items-center justify-center py-10 px-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
          {/* Back Button */}
          <button className="text-sm text-gray-500 flex items-center mb-6 hover:text-gray-800 transition">
            <i className="fas fa-arrow-left mr-2"></i>  <Link to="/">Back to home</Link>
          </button>
  
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Add New Coffee</h2>
          <p className="text-center text-gray-600 mb-8">
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
  
          {/* Form */}
          <form onSubmit={handleAddToCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Chef */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Chef</label>
                <input  
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Supplier */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Supplier</label>
                <input
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Taste */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">prices</label>
                <input 
                  name="prices"
                  type="text"
                  placeholder="prices"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Category</label>
                <input
                  name="category"
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Details */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Details</label>
                <input
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
              {/* Photo */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Photo</label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter photo URL"
                  className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c2a478]"
                />
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#c2a478] text-white text-lg font-semibold rounded-md hover:bg-[#a7865b] transition"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddCoffe;
  