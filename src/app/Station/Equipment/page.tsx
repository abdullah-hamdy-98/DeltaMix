import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'

function Equipment() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>المعدات</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/10/5784e1f6de7a7.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <ul>
                                        <li>عدد 20 عربة ناقله للخرسانه &nbsp;mercedes actros Mb1 - Mb3</li>
                                        <li>مضخه schwing S47x</li>
                                        <li>مضخه schwing S36x</li>
                                        <li>عدد 3 لودر</li>
                                        <li>عدد 2 مولد كهربي&nbsp;</li>
                                    </ul>
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
export default Equipment;