"use client"
import React, { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';
import { ToastContainer } from 'react-toastify';

const Dependency = () => {

  useEffect(() => {

    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      console.log('Project loaded successfully.');
    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  return (
    <>
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
      <ToastContainer />
    </>
  );
};

export default Dependency;