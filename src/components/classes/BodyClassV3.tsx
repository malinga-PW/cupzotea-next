"use client"
import { useEffect } from 'react';

const BodyClassV3 = () => {

    useEffect(() => {
        document.body.classList.add('bg-black');

        return () => {
            document.body.classList.remove('bg-black');
        };
    }, []);

    return (
        <>

        </>
    );
};

export default BodyClassV3;