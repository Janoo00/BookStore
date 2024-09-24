// import React from 'react'; // Uncomment this if you're using an older version of React
import Carts from './Carts';
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Book() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">Here! :)</span></h1>
          <p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni cupiditate porro ducimus facilis ex aperiam impedit eligendi autem nesciunt eum fugiat ratione, tempora culpa minima ipsam, recusandae aspernatur rerum natus nam.
             At amet culpa quibusdam atque alias id eos illo blanditiis commodi sit harum, unde, fuga dignissimos enim ipsam.</p>
          <Link to="/">
          <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 mt-5 rounded-md">Back</button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            list.map((item) => (
              <Carts key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Book;
