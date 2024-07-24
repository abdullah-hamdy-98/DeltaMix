import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'


function Production() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>الاشراف والانتاج</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/11/5756af433855b.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <ul>
                                        <li>
                                            <p>الانتاج واعداد خلطات الخرسانه يشرف عليهم طاقم من المهندسين ذو الخبره في هذا المجال تحت اشراف أ. د/
                                                شريف عبدون وهوه اخصائي واستشاري في عمل خلطات التصميميه التي تتناسب ظروفها مع كل منشأه&nbsp;</p>
                                        </li>
                                        <li>ايضا يوجد بالشركه معمل به احواض معالجه وماكينة تكسير وفرن حريري لعمل جميع اختبارات الجوده علي مواد
                                            الخرسانه وعلي الخلطه طبقا للمواصفات المصريه والعالميه&nbsp;</li>
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
export default Production;