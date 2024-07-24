import Link from 'next/link';


function NavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div className="app101-general-menu">
                        <ul>
                            <li className="grid ">  <Link href="/">الرئيسية</Link></li>
                            <li className="grid "><span>عن الشركه</span>
                                <ul>
                                    <li className="grid "><Link className="nav-link" href="/About/Production">الاشراف والانتاج</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/About/Capacity">امكانيات الشركه</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/About/Message">كلمة رئيس مجلس الإدارة</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/About/JobStructure">الهيكل الوظيفي</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/About/QManagement">إدارة الجوده</Link></li>
                                </ul>
                            </li>
                            <li className="grid "><span>المحطات </span>
                                <ul>
                                    <li className="grid "><a className="nav-link" href="/pages/view/10.html">المعدات</a></li>
                                    <li className="grid "><a className="nav-link" href="/pages/view/14.html">المواد الخام </a></li>
                                    <li className="grid "><a className="nav-link" href="/pages/view/15.html">المعمل </a></li>
                                    <li className="grid "><a className="nav-link" href="/products/products.html">المحطات</a></li>
                                </ul>
                            </li>
                            <li className="grid "><a className="nav-link" href="careers.html">الوظائف</a></li>
                            <li className="grid "><a className="nav-link" href="#pages/view/17.html">أخبارنا</a></li>
                            <li className="grid "><span>المشروعات</span>
                                <ul>
                                    <li className="grid "><a className="nav-link" href="#projects/index/-1.html">المشروعات السابقة</a></li>
                                    <li className="grid "><a className="nav-link" href="#projects/index/1.html">المشروعات اللاحقة</a></li>
                                </ul>
                            </li>
                            <li className="grid "><span>مصنع الطوب الأسمنتي الخفيف</span>
                                <ul>
                                    <li className="grid "><a className="nav-link" href="/pages/view/28.html">الطوب الخفيف</a></li>
                                    <li className="grid "><a className="nav-link" href="/pages/view/29.html">مميزات المنتج</a></li>
                                    <li className="grid "><a className="nav-link" href="/pages/view/30.html">منتج الخرسانة الخفيفة</a></li>
                                </ul>
                            </li>
                            <li className="grid "> <Link className="nav-link" href="/Contact">إتصل بنا</Link> </li>

                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="app101-general-search">
                        <form action="products/search" method="post">
                            <input type="submit" value="" />
                            <input type="text" name="data[Product][keyword]" placeholder="بحث" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;