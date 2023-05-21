import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysDetail from './MyToysDetail';


const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://toys-hub-server-two.vercel.app/myToys/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyToys(data);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`https://toys-hub-server-two.vercel.app/toys/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Successfully deleted');
            const remaining = myToys.filter(toy => toy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Picture
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Toy Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Rating
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Seller Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Seller Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Available Quantity
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit/Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {myToys.map(toy => (
              <MyToysDetail handleDelete={handleDelete} toy={toy} key={toy._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
