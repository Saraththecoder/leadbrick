import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-light flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        {/* Big 404 */}
        <h1 className="text-[120px] font-extrabold text-brick leading-none select-none">
          404
        </h1>
        <h2 className="text-2xl font-extrabold text-charcoal mt-2 mb-4">
          Page Not Found
        </h2>
        <p className="text-grey mb-8 text-base leading-relaxed">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary text-center">
            Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
