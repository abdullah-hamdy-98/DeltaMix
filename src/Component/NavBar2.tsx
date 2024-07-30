import Link from 'next/link';
import Image from 'next/image';


function NavBar2() {

    return (
        <>
            <div className='header-background'>
                <header >
                    <div className='sitelogo'>
                        <Image width={180} height={38} src='/data/images/companies/site-logo.png' alt='Site Logo' />
                    </div>
                    <div className='Navbar-test'>
                        <ul className='menu'>
                            <li className="grid"><span>عن الشركه</span>

                            </li>
                            <li className="grid"><span>المحطات </span>

                            </li>
                            <li className="grid"><Link className="nav-link" href="/Careers">الوظائف</Link></li>
                            <li className="grid"><Link className="nav-link" href="/News">أخبارنا</Link></li>
                            <li className="grid"><span>المشروعات</span>

                            </li>
                            <li className="grid"><span>مصنع الطوب الأسمنتي الخفيف</span>

                            </li>
                            <li className="grid"> <Link className="nav-link" href="/Contact">إتصل بنا</Link> </li>

                        </ul>
                    </div>
                    <div className="search-bar">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                </header>
            </div>
        </>
    )
}

export default NavBar2;


