import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const ProcessingPageMessage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen-fit bg-gray-100 text-gray-900 p-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-red-500"
        >
          শুধু মাত্র প্রাইভেট ছাত্র-ছাত্রীর জন্য  
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg mt-6 text-center"
        >
          ভর্তি হতে যোগাযোগঃ 017-019-0-6543 
        </motion.p>
  
        {/* Back to Home Button */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 0.8 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          // whileTap={{rotate:35}}
        >
          <Link
            to="/"
            className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
  
        {/* Contact Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-8 p-6 bg-white rounded-lg shadow-lg w-full max-w-md text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            
          </h2>
          <div className="flex flex-col gap-3 text-gray-700">
            <p className="flex items-center justify-center gap-2">
              <span>Email: almubin78@gmail.com</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Phone: 017 019 06543</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span>Or: 01987 600 611</span>
            </p>
          </div>
        </motion.div> */}
      </div>
    );
  };

export default ProcessingPageMessage;