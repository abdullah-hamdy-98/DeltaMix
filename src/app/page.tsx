"use client"
import HomeSlider from '../Component/HomeSlider';
import NavBar2 from '../Component/NavBar2';
import OurCompanies from '../Component/OurCompanies'

function News() {

    return (
        <>
            <NavBar2  ></NavBar2>
            {/* Slider */}
            <HomeSlider></HomeSlider>

            <OurCompanies></OurCompanies>
        </>
    );
}

export default News;
