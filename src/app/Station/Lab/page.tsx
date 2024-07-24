import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'

function Lab() {
    return (
        <>
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>المعمل </span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/15/5756b0cfacb4d.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <p>يقوم معمل دلتا مكس بالعمل علي جانبين وهما :</p>

                                    <ol>
                                        <li>ضبط جودة للمواد عن طريق احواض المعالجه وماكينة التكسير والفرن الحراري&nbsp;لعمل جميع اختبارات الجوده
                                            علي مواد الخرسانه وعلي الخلطه طبقا للمواصفات المصريه والعالميه&nbsp;</li>
                                        <li>ضبط جودة الخرسانه عن طريق فني معمل علي كل صبة خرسانه وتوفير خدمة تكسير مكعبات للعميل بعد الصب عن
                                            طريق احدث الاجهزه ELE&nbsp;</li>
                                    </ol>
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
export default Lab;