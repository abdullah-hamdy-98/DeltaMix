import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'


function QManagement() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>إدارة الجوده</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/26/5784d14f1e444.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <ul>
                                        <li dir="RTL"><strong>تمتلك شركة دلتا ميكس معمل مجهز لعمل جميع اختبارات ضبط الجوده المطلوبة على المواد و
                                            الخرسانة بصفة دورية .</strong></li>
                                        <li dir="RTL"><strong>توفر شركة دلتا ميكس فني معمل فى الموقع و ذلك لتسليم الخرسانة للعميل طبقا للموصفة
                                            المطلوبة ويتم اخد عينات من الخرسانة لعمل اختبارات الازمة طبقا للكود المصري .</strong></li>
                                        <li dir="RTL"><strong>توفر ادارة الجوده بالمحطة تصميم لجميع الخلاطات المطلوبة للعميل من حيث (الجهد نوع
                                            الركام المستخدم &ndash; اجهاد مبكر &ndash; ذاتية الدمك &ndash; اجهادات عالية).</strong></li>
                                    </ul>

                                    <p dir="RTL" style={{ marginRight: "-18.0pt" }}><strong>ادارة التنفيذ:.</strong></p>

                                    <p><strong><span dir="RTL">تتميز الشركة بادارة تنفيذ قوية تساعد العميل على مدار 24 ساعة للترتيب العمل مع
                                        العميل و المساعده فى اي مشكلة اثناء الصب . لضمان سرعة الصب للعميل و الحصول على اعلى معدلات للاداء
                                        .</span></strong></p>
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
export default QManagement ;