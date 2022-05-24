import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/image/not-found.jpeg';

const NotFound = () => {
    return (
      <div className="">
        <div className="flex min-h-[30vh] justify-center items-center">
          <div className="w-5/12 text-center">
            <img className="w-30 h-auto" src={notFound} alt="" />
            <Link className='btn btn-primary text-center' to='/'>Back to home </Link>
          </div>
        </div>
      </div>
    );
};

export default NotFound;