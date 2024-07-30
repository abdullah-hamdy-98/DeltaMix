
import Link from 'next/link';


function LastNews() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="app101-component-box">
                        <div className="app101-component-box-title">
                            <span>أخر الأخبار</span>
                        </div>
                        <div className="app101-component-box-content">
                            <div className="app101-allNews">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                            <div className="app101-news">
                                                <div className="app101-news-image">
                                                <Link href="/News"><img src="/content/photo/17/5756accc903f8.jpg" alt="" /></Link>
                                                </div>
                                                <div className="app101-news-date">
                                                    <span>2016-06-07</span>
                                                </div>
                                                <div className="app101-news-details">
                                                    <div className="app101-news-title">
                                                        <Link href="/News"><span>إفتتاح محطة دلتا ميكس 2 (كفر الزيات)</span></Link>
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

export default LastNews;