import Header from '../../../Component/Header'
import BottomSlider from '../../../Component/BottomSlider'
import Footer from '../../../Component/Footer'


function Message() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>كلمة رئيس مجلس الإدارة</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="app101-general-imageBox">
                                    <img src="/content/photo/19/5756beba3abf1.jpg" />
                                </div>
                                <div className="app101-general-textBox">
                                    <p dir="RTL" style={{marginRight:"-18.0pt"}}>تلتزم &nbsp;شركة دلتا ميكس&nbsp;للخرسانة الجاهزة بتنفيذ جميع
                                        التعليمات الصادرة بشأن الجودة فى تأدية الخدمة طبقا للمواصفة العالمية الأيزو 9001/2008 وفى الوقت القياسى
                                        طبقا للمعايير العالمية وكل ما جاء بدليل الجودة والذى يتمثل فى:</p>

                                    <ul>
                                        <li dir="RTL">تقديم خدمات الخرسانة الجاهزةبجودة عالية.</li>
                                        <li dir="RTL">استخدام جميع الإمكانيات التكنولوجية الحديثة فى جميع مراحل تأدية الخدمة.</li>
                                        <li dir="RTL">العمل كفريق جماعى من خلال منظومة متكاملة تسعى إلى التحسين والتطوير المستمر لنظام
                                            إدارةالجودة بالشركة بغرض إرضاء عملائها.</li>
                                        <li dir="RTL">العمل على تحقيق متطلبات واحتياجات العملاء بصفة مستمرة.</li>
                                        <li dir="RTL">تطوير وتحسين نظام إدارة الجودة بالشركة بصفة مستمرة ليتواكب مع أحدث
                                            المواصفاتالقياسيةالعالمية لجودة تأدية الخدمة.</li>
                                    </ul>

                                    <p dir="RTL" style={{marginRight:"-18.0pt"}}>وتؤكد الإدارة العليا للشركة على مسئوليتها فى تطوير وتحسين جودة
                                        تأدية خدماتها بصفة مستمرةوتحسين وسائل الاتصال بالعملاء والموردين والعاملين بالشركة وذلك من خلال:</p>

                                    <ul>
                                        <li dir="RTL">التحديد الدقيق لمتطلبات العملاء وتحقيق احتياجاتهم الحالية والمستقبلية.</li>
                                        <li dir="RTL">العمل على التطوير المستمر لعملية تأدية الخدمة المقدمة للعملاء لمواكبة التغير المستمر فى
                                            رغبات العملاء.</li>
                                        <li dir="RTL">اختيارأكثر الموردين والعاملين كفاءة وذلك على أسس ومعايير جودة المنتجات الموردة للشركة
                                            والخدمات المؤداة للعميل إلى جانبالتقييم المستمر لمستوى أداء الموردين والعاملين.</li>
                                        <li dir="RTL">العمل على توفير المناخ الجيد للعمل بتشجيع العمل الجماعي وتحفيز العاملين بالشركة.</li>
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
export default Message;