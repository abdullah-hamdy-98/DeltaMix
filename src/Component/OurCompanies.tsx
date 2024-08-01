"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import './OurCompanies.css';

function OurCompanies() {
    return (
        <section className='companies-slider'>
            <div className="slider">
                <div className="slider-items">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/1.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/2.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/3.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/4.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/5.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/Companies/6.png"
                            alt="E3mar Al-Delta"
                            width={250}
                            height={45}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OurCompanies;
