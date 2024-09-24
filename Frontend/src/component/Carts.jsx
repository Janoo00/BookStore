// import React from 'react'

function carts({item}) {
    console.log(item);
    
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300 ">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
        <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline hover:bg-pink-500 duration-300 hover:text-white px-3 py-4 cursor-pointer border-black">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 duration-300 hover:text-white px-3 py-4 cursor-pointer border-black">Buy now</div>
            </div>

        </div>

        </div>

      </div>
    </>
  );
}

export default carts;
