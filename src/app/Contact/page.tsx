import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header'
import BottomSlider from '../../Component/BottomSlider'
import Footer from '../../Component/Footer'


function Contact() {
    return (
        <>
            {/*  Section : Header */}
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>بيانات الاتصال</span>
                            </div>
                            <div className="app101-component-box-content">
                                <p><b
                                    className="app101-general-informationList-icon app101-general-informationList-icon-address"></b>
                                    طريق القاهره الاسكندريه الزراعي بجوار توكيل هيونداي - طنطا - محافظة الغربيه</p>
                                <p><b
                                    className="app101-general-informationList-icon app101-general-informationList-icon-mobile"></b>
                                    0106674404</p>
                                <p><b className="app101-general-informationList-icon app101-general-informationList-icon-phone"></b>
                                    0409119998</p>
                                <p><b className="app101-general-informationList-icon app101-general-informationList-icon-email"></b>
                                    <a href="mailto:deltamix@eamaraldelta.com">Deltamix@eamaraldelta.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>اتصل بنا</span>
                            </div>
                            <div className="app101-component-box-content">
                                <form action="/" method="post">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div className="form-group">
                                                    <input type="text" name="data[Contact][user_name]" className="form-control"
                                                        placeholder="الاسم" dir="rtl" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div className="form-group">
                                                    <input type="text" name="data[Contact][user_phone]" className="form-control"
                                                        placeholder="الهاتف" dir="rtl" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                <div className="form-group">
                                                    <input type="email" name="data[Contact][user_email]" className="form-control"
                                                        placeholder="البريد الالكترونى" dir="rtl" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" name="data[Contact][title]" className="form-control"
                                                        placeholder="الموضوع" dir="rtl" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="data[Contact][message]" className="form-control"
                                                        placeholder="رسالتك" dir="rtl"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button type="submit" className="btn btn-default">ارسل</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Section : BottomSlider */}
            <BottomSlider></BottomSlider>
            {/* Section : Footer */}
            <Footer></Footer>
        </>

    )
}
export default Contact;