import Image from 'next/image'
function station() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="app101-component-box">
                        <div className="app101-component-box-title">
                            <span>المحطات</span>
                        </div>
                        <div className="app101-component-box-content">
                            <div className="app101-products">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <div className="app101-product">
                                                <div className="app101-product-image">
                                                    <a href="products/view/2"><Image width={650} height={250} src="/product/photo/2/vga_back07.jpg" alt="" /></a>
                                                </div>
                                                <div className="app101-product-details">
                                                    <div className="app101-product-name">
                                                        <a href="products/view/2"><span>محطة دفرة</span></a>
                                                    </div>
                                                    <div className="app101-product-category">
                                                        <a href="products/view/2"><span></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <div className="app101-product">
                                                <div className="app101-product-image">
                                                    <a href="products/view/11"><Image width={650} height={250} src="/product/photo/11/vga_back03.jpg" alt="" /></a>
                                                </div>
                                                <div className="app101-product-details">
                                                    <div className="app101-product-name">
                                                        <a href="products/view/11"><span>محطة كفر الزيات</span></a>
                                                    </div>
                                                    <div className="app101-product-category">
                                                        <a href="products/view/11"><span></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <div className="app101-product">
                                                <div className="app101-product-image">
                                                    <a href="products/view/14"><Image width={650} height={250} src="/product/photo/14/vga_back05.jpg" alt="" /></a>
                                                </div>
                                                <div className="app101-product-details">
                                                    <div className="app101-product-name">
                                                        <a href="products/view/14"><span>المعمل </span></a>
                                                    </div>
                                                    <div className="app101-product-category">
                                                        <a href="products/view/14"><span></span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <div className="app101-product">
                                                <div className="app101-product-image">
                                                    <a href="products/view/15"><Image width={650} height={250} src="/product/photo/15/vga_back09_6_2.jpg" alt="" /></a>
                                                </div>
                                                <div className="app101-product-details">
                                                    <div className="app101-product-name">
                                                        <a href="products/view/15"><span>المعدات</span></a>
                                                    </div>
                                                    <div className="app101-product-category">
                                                        <a href="products/view/15"><span></span></a>
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
    )
}
export default station;