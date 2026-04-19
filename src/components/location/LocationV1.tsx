"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import mapIcon from "@/assets/img/icon/map.png";
import mapThumb from "@/assets/img/map.png";
import FactV1Data from "@/assets/jsonData/fact/FactV1Data.json";
import LocationData from "@/assets/jsonData/location/LocationData.json";
import SingleFactV1 from '../fact/SingleFactV1';

interface DataType {
    isActive?: boolean;
    setActive?: (active: boolean) => void;
    children?: React.ReactNode;
}

function LocationItem({ isActive, setActive, children }: DataType) {
    return (
        <div
            className={`location-item ${isActive ? 'active' : ''}`}
            onMouseEnter={() => setActive?.(true)}
            onMouseLeave={() => setActive?.(false)}
        >
            {children}
        </div>
    );
}

const LocationV1 = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <div className="gobal-location-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="site-heading">
                                <h1 className="text-gradient" style={{ backgroundImage: 'url(/assets/img/banner/17.jpg)' }}>Global
                                    Locations</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="global-location-items">
                                {LocationData.map((data, index) =>
                                    <LocationItem
                                        key={index}
                                        isActive={activeIndex === index}
                                        setActive={() => setActiveIndex(index)}
                                    >
                                        <Image src={mapIcon} alt="Image Not Found" />
                                        <div className="location-details">
                                            <h5>{data.title}</h5>
                                            <p>{data.text} </p>
                                        </div>
                                    </LocationItem>
                                )}
                                <Image src={mapThumb} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fact */}
                <div className="container default-padding-top">
                    <div className="fun-fact-style-one-items text-center">
                        <div className="row">
                            {FactV1Data.map(fact =>
                                <div className="col-lg-3 col-md-6 funfact-style-one-item" key={fact.id}>
                                    <SingleFactV1 fact={fact} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LocationV1;