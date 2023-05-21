import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit ,FaRegTrashAlt } from "react-icons/fa";
const MyToysDetail = ({toy, handleDelete}) => {

    const {available_quantity,category,description,picture,price,rating,seller_email,seller_name,toy_name,_id}  = toy;

    
console.log(toy);
    return (
        <tr key={toy._id}>
        <td className="px-6 py-4 whitespace-nowrap">
            <img
                src={picture}
                alt={toy_name}
                className="h-8 w-8"
            />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {toy_name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {price}$
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {rating}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {seller_name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {seller_email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {category}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {available_quantity}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        
        <div className='flex items-center'>
        <Link to={`/updatedToys/${_id}`}> <FaEdit  className="text-gray-600 w-6 h-6 hover:text-blue-600">
                Update
            </FaEdit> </Link>
           

            <FaRegTrashAlt onClick={()=>handleDelete(toy._id)} className="text-gray-600 w-6 h-6 hover:text-red-600 ml-2">
                Delete
            </FaRegTrashAlt>
        </div>
        </td>
    </tr>
    );
};

export default MyToysDetail;