import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'

function RawMat() {
    return (
        <>
            <Header></Header>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>المواد الخام </span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/14/5756b06e5ead8.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p>&nbsp;</p>

                                    <p>تستخدم الشركه اجود انواع المواد الخام التي تهدف الي زيادة كفاءة الخرسانه</p>

                                    <p>1 - الاسمنت : تستخدم الشركه انتاج مصانع العربية المصرية للاسمنت لما لها من سمعه طيبة ومواصفات قياسيه
                                        واختبار جوده عاليه ودائما ما يتم عمل الاختبار الازم علي الاسمنت بمجرد وصوله للمحطه يخضع للفحص
                                        المتواصل&nbsp;</p>

                                    <p>2 - السن : نسعي دائما للوصول والاطلاع والتعرف علي اجود المحاجر مع الاعتماد علي وجود مغسله و مهزات للسن
                                        بالمحطه للتخلص من المواد الناعمه والتاكد من نظافة السن&nbsp;</p>

                                    <p>3 - الرمل : ما نقوم باستخدامه فقط هوه رمل محاجر مع الاعتماد علي وجود مهزات للرمل للتخلص من الاتربه
                                        والطفله&nbsp;</p>

                                    <p>4 - الاضافات : يتم استخدام منتجات msc لمواد البناء حيث تمتاز الشركه بالسمعه الجيده في مجالها&nbsp;</p>
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
export default RawMat;