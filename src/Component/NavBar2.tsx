import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

function NavBar2() {
    useEffect(() => {
        const toggleBtn = document.querySelector('.toggle-btn') as HTMLElement | null;
        const dropDownMenu = document.querySelector('.dropdown_menu') as HTMLElement | null;

        if (toggleBtn && dropDownMenu) {
            const handleToggle = () => {
                dropDownMenu.classList.toggle('open');
            };

            toggleBtn.addEventListener('click', handleToggle);

            return () => {
                toggleBtn.removeEventListener('click', handleToggle);
            };
        }
    }, []);

    return (
        <>
            <div className='header-background'>
                <header>
                    <div className='sitelogo'>
                        <Link href='/'><Image width={180} height={38} src='/data/images/companies/site-logo.png' alt='Site Logo' /></Link>
                    </div>
                    <div className='Navbar-test'>
                        <ul className='menu'>
                            <li className="grid"><span>عن الشركه</span></li>
                            <li className="grid"><span>المحطات </span></li>
                            <li className="grid">
                                <Link style={{ textDecoration: 'none' }} className="nav-link" href="/Careers">الوظائف</Link>
                            </li>
                            <li className="grid">
                                <Link style={{ textDecoration: 'none' }} className="nav-link" href="/News">أخبارنا</Link>
                            </li>
                            <li className="grid"><span>المشروعات</span></li>
                            <li className="grid"><span>مصنع الطوب الأسمنتي الخفيف</span></li>
                            <li className="grid">
                                <Link style={{ textDecoration: 'none' }} className="nav-link" href="/Contact">إتصل بنا</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="svg">
                        <svg className="search-bar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                        <svg className="toggle-btn" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>
                    </div>
                    <div className='dropdown_menu'>
                        <li className="grid"><span>عن الشركه</span></li>
                        <li className="grid"><span>المحطات </span></li>
                        <li className="grid">
                            <Link style={{ textDecoration: 'none' }} className="nav-link" href="/Careers">الوظائف</Link>
                        </li>
                        <li className="grid">
                            <Link style={{ textDecoration: 'none' }} className="nav-link" href="/News">أخبارنا</Link>
                        </li>
                        <li className="grid"><span>المشروعات</span></li>
                        <li className="grid"><span>مصنع الطوب الأسمنتي الخفيف</span></li>
                        <li className="grid">
                            <Link style={{ textDecoration: 'none' }} className="nav-link" href="/Contact">إتصل بنا</Link>
                        </li>
                    </div>
                </header>
            </div>
        </>
    );
}

export default NavBar2;
