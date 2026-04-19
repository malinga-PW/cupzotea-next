/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"
import React, { useEffect, useRef, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const gradientStyles = {
    path: {
        stroke: 'url(#gradient)',
    },
    trail: {
        stroke: '#e7e7e7',
    },
    text: {
        fill: "#04000b",
    }
}

interface DataType {
    id?: number;
    title?: string;
    maxValue?: any;
}

const SingleChooseProgressV1 = ({ progress }: { progress: DataType }) => {

    const { maxValue, title } = progress;
    const [progressValue, setProgressValue] = useState(0);

    const [progressText, setProgressText] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const intersectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (intersectionRef.current) {
            observer.observe(intersectionRef.current);
        }

        return () => {
            if (intersectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(intersectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setProgressValue((prevValue) => Math.min(prevValue + 5, maxValue));
            }, 50);

            return () => clearInterval(interval);
        }
    }, [isVisible, maxValue]);


    return (
        <>
            <li key={progress.id} ref={intersectionRef}>
                <div className="progressbar">
                    <svg style={{ height: 0, width: 0 }}>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#2667FF', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#6c19ef', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar strokeWidth={3} value={progressValue} text={`${progressValue}%`} styles={gradientStyles} />
                    <h4>{title}</h4>
                </div>
            </li>
        </>
    );
};

export default SingleChooseProgressV1;