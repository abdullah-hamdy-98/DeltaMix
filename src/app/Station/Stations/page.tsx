import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'
import Link from 'next/link';


function Station() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div className="app101-component-box">
                            <div className="app101-component-box-content">
                                <div className="app101-products">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                <div className="app101-product">
                                                    <div className="app101-product-image">
                                                        <Link href="/Station/Stations/view/Defra"><img
                                                            src="/product/photo/2/vga_back07.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="app101-product-details">
                                                        <div className="app101-product-name">
                                                            <a href="/Station/Stations/view/Defra"><span>محطة دفرة</span></a>
                                                        </div>
                                                        <div className="app101-product-category">
                                                            <a href="/Station/Stations/view/2"><span></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                <div className="app101-product">
                                                    <div className="app101-product-image">
                                                        <Link href="/Station/Stations/view/KafrZayat"><img
                                                            src="/product/photo/11/vga_back03.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="app101-product-details">
                                                        <div className="app101-product-name">
                                                            <Link href="/Station/Stations/view/KafrZayat"><span>محطة كفر الزيات</span></Link>
                                                        </div>
                                                        <div className="app101-product-category">
                                                            <a href="/Station/Stations/view/KafrZayat"><span></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                <div className="app101-product">
                                                    <div className="app101-product-image">
                                                        <Link href="/Station/Stations/view/Labs"><img
                                                            src="/product/photo/14/vga_back05.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="app101-product-details">
                                                        <div className="app101-product-name">
                                                            <Link href="/Station/Stations/view/Labs"><span>المعمل </span></Link>
                                                        </div>
                                                        <div className="app101-product-category">
                                                            <Link href="/Station/Stations/view/Labs"><span></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                <div className="app101-product">
                                                    <div className="app101-product-image">
                                                        <Link href="/Station/Stations/view/Equipments"><img
                                                            src="/product/photo/15/vga_back09_6_2.jpg" alt="" /></Link>
                                                    </div>
                                                    <div className="app101-product-details">
                                                        <div className="app101-product-name">
                                                            <Link href="/Station/Stations/view/Equipments"><span>المعدات</span></Link>
                                                        </div>
                                                        <div className="app101-product-category">
                                                            <Link href="/Station/Stations/view/Equipments"><span></span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BottomSlider></BottomSlider>
            <Footer></Footer>
        </>

    )
}
export default Station;