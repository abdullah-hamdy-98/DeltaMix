import Header from '../../Component/Header'
import BottomSlider from '../../Component/BottomSlider'
import Footer from '../../Component/Footer'


function Careers() {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>الوظائف المتاحة</span>
                            </div>
                            <div className="app101-component-box-content">
                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading16">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse16"
                                                    aria-expanded="true" aria-controls="collapse16" className="job-title">
                                                    فني معمل
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse16" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading16">
                                            <div className="panel-body">
                                                <p>مطلوب فني معمل خبرة لاتقل عن 5 سنوات في مجال الخرسانة.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading18">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse18"
                                                    aria-expanded="true" aria-controls="collapse18" className="job-title">
                                                    مسئول مبيعات خرسانة
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse18" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading18">
                                            <div className="panel-body">
                                                <p>مطلوب للعمل بشركة دلتا ميكس .. مسئول مبيعات خرسانة .. بالشروط الآتية:<br />
                                                    - خبرة لاتقل عن سنتين في مجال مبيعات الخرسانة الجاهزة أو في مجال جودة
                                                    الخرسانة.<br />
                                                    - حاصل على مؤهل عالي.<br />
                                                    - لديه رخصة قيادة سارية.<br />
                                                    - يفضل من سكان محافظات الدلتا.</p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading17">
                                            <h4 className="panel-title">
                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse17"
                                                    aria-expanded="true" aria-controls="collapse17" className="job-title">
                                                    سباك
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapse17" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading17">
                                            <div className="panel-body">
                                                <p>مطلوب للعمل بشركة دلتا ميكس .. مسئول مبيعات خرسانة .. بالشروط الآتية:<br />
                                                    - خبرة لاتقل عن سنتين في مجال مبيعات الخرسانة الجاهزة أو في مجال جودة
                                                    الخرسانة.<br/>
                                            </p></div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                        <div className="app101-component-box">
                            <div className="app101-component-box-title">
                                <span>تقدم لوظيفة</span>
                            </div>
                            <div className="app101-component-box-content">
                                <form method="post" action="https://deltamix.eamaraldelta.com/pages/send/apply">
                                    <input type="hidden" name="data[Career][job]" id="applyhiddenfield" value=""/>
                                        <div className="col-lg-4 form-group">
                                            <label >الإسم</label>
                                            <input name="data[Carrers][name]" type="text" className="form-control" id="" placeholder="الإسم" required />
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >رقم الهاتف</label>
                                            <input name="data[Carrers][phone]" type="text" className="form-control" id="" placeholder="رقم الهاتف"
                                                required/>
                                        </div>

                                        <div className="col-lg-4 form-group">
                                            <label >البريد الإلكتروني</label>
                                            <input name="data[Carrers][email]" type="email" className="form-control" id=""
                                                placeholder="البريد الإلكتروني" required/>
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >العنوان</label>
                                            <input name="data[Carrers][address]" type="text" className="form-control" id="" placeholder="العنوان"/>
                                        </div>

                                        <div className="col-lg-4 form-group">
                                            <label >المؤهل</label>
                                            <input name="data[Carrers][gradiuation]" type="text" className="form-control" id="" placeholder="المؤهل"/>
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >التقدير</label>
                                            <input name="data[Carrers][grade]" type="text" className="form-control" id="" placeholder="التقدير"/>
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >تاريخ التخرج</label>
                                            <input name="data[Carrers][graduated_date]" type="text" className="form-control" id=""
                                                placeholder="تاريخ التخرج" required/>
                                        </div>

                                        <div className="col-lg-4 form-group">
                                            <label >تاريخ الميلاد</label>
                                            <input name="data[Carrers][birth_date]" type="text" className="form-control datepicker" id=""
                                                placeholder="تاريخ الميلاد" required/>
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >متقدم لوظيفة</label>
                                            <select name="data[Carrers][job]" className="form-control selectboxstyle" id="jobList">
                                                <option value="" disabled>الوظيفة</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-4 form-group">
                                            <label >الراتب السابق</label>
                                            <input name="data[Carrers][last_salary]" type="text" className="form-control" id=""
                                                placeholder="الراتب السابق"/>
                                        </div>
                                        <div className="col-lg-4 form-group">
                                            <label >السيرة الذاتية</label>
                                            <input name="data[Carrers][cv]" type="file" id="" required/>
                                                <p className="help-block"> الحد الأقصي 5 ميجا بايت</p>

                                        </div>


                                        <div className="col-lg-4 radio form-group">
                                            <div >الجنس</div>
                                            <label className="radio-inline">
                                                <input type="radio" name="data[Carrers][gender]" id="inlineRadio1" value="ذكر"/> ذكر
                                            </label>
                                            <label className="radio-inline">
                                                <input type="radio" name="data[Carrers][gender]" id="inlineRadio2" value="أنثى"/> أنثي
                                            </label>
                                        </div>


                                        <div className="col-lg-12 form-group">
                                            <label >الدورات التدريبية/الكمبيوتر</label>
                                            <textarea name="data[Carrers][courses]" className="form-control" rows={5}
                                                placeholder="الدورات التدريبية/الكمبيوتر" required></textarea>
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <label >اللغة/درجة الاجادة</label>
                                            <textarea name="data[Carrers][langs]" className="form-control" rows={5} placeholder="اللغة/درجة الاجادة"
                                                required></textarea>
                                        </div>
                                        <div className="col-lg-12 form-group">
                                            <label >الخبرات السابقة</label>
                                            <textarea name="data[Carrers][experience]" className="form-control" rows={5} placeholder="الخبرات السابقة"
                                                required></textarea>
                                        </div>
                                        <button type="submit" className="col-lg-3 btn btn-default solid-blue-btn">أرسل</button>
                                </form>
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
export default Careers;