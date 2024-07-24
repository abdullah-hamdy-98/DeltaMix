import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'


function Capacity() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>امكانيات الشركه</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/13/5784e0e53d3f2.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <ol>
                                        <li>يوجد عدد 20 سيارة نقل خلاطات ماركة مرسيدس اكتروس . وذللك يضمن للعميل سرعة نقل الخرسانه لعمل الصبات
                                            في اقل وقت ممكن&nbsp;</li>
                                        <li>يوجد عدد 4 مضخات بأطوال مختلفه تصل الي 47م وكذلك يوجد مضخات ثابته . وهذا يضمن للعميل العمل في جميع
                                            احتمالات عمليات الصب باحدث الوسائل ذو حرفيه عاليه &nbsp;وبأقل وقت</li>
                                        <li>لوادر للتشوينات . لخدمات المحطات لضمان استمرارية العمل في اي وقت دون توقف&nbsp;</li>
                                        <li>عدد 3 سيارات نصف نقل . لخدمات التنقل لاحتياجات العميل&nbsp;</li>
                                        <li>عدد 2 مولد كهربي . وذلك للحرص علي العمل دون توقف علي مدار 24 ساعه&nbsp;</li>
                                        <li>لدي الشركه ورشة ميكانيكا كامله وورشة غسيل وتشحيم سيارات متكالمله . لعمل اليانات الازمه لجميع
                                            السيارات لتجنب توقف العمل والحفاظ علي الجوده&nbsp;</li>
                                    </ol>

                                    <p>غايتنا المساعده علي ايجاد افضل الحلول الخرسانيه&nbsp;التي تتناسب مع بيئة الموقع&nbsp;</p>

                                    <p>نسعي دائما ان نكون الافضل من خلال استخدام افضل انواع الخامات المستخدمه</p>
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
export default Capacity;