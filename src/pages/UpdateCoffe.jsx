import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateCoffe = () => {
  const coffee = useLoaderData();
  const { _id, name, photo, supplier, chef, details, category, prices } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const prices = e.target.prices.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;

    const updatedCoffee = { name, chef, supplier, prices, category, details, photo };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Your coffee updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        } else {
          Swal.fire({
            title: 'Info',
            text: 'No changes were made!',
            icon: 'info',
            confirmButtonText: 'Okay',
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
        <button className="text-sm text-gray-500 flex items-center mb-6 hover:text-gray-800 transition">
          <i className="fas fa-arrow-left mr-2"></i>
          <Link to="/">Back to home</Link>
        </button>

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Update Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input name="name" type="text" defaultValue={name} placeholder="Enter coffee name" />
            <input name="chef" type="text" defaultValue={chef} placeholder="Enter coffee chef" />
            <input name="supplier" type="text" defaultValue={supplier} placeholder="Enter coffee supplier" />
            <input name="prices" type="text" defaultValue={prices} placeholder="Enter coffee prices" />
            <input name="category" type="text" defaultValue={category} placeholder="Enter coffee category" />
            <input name="details" type="text" defaultValue={details} placeholder="Enter coffee details" />
            <input name="photo" type="text" defaultValue={photo} placeholder="Enter coffee photo URL" />
          </div>
          <button type="submit" className="w-full py-3 bg-[#c2a478] text-white">
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffe;
