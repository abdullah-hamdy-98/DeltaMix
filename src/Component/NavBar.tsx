"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import $ from 'jquery';

function NavBar() {
    useEffect(() => {
        var sys = {
            window: {
                lang: $('html').attr('lang'),
                direction: $('html').attr('dir'),
                width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
                height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
            }
        };

        $('.app101-general-menu').each(function () {
            $('li ul', $(this)).each(function () {
                $(this).parents('li').addClass('expandable');
            });
        });

        $('.expandable').each(function () {
            $('> ul', $(this)).slideUp(0);
            $(this).removeClass('expanded');
            $(this).addClass('collapsed');
        });

        $('body').on('click', '.expandable > span', function () {
            if (sys.window.width < 768) {
                $('> ul', $(this).parents('li')).slideToggle(function () {
                    if ($(this).css('display') === 'block') {
                        $(this).parents('li').removeClass('collapsed');
                        $(this).parents('li').addClass('expanded');
                    } else {
                        $(this).parents('li').removeClass('expanded');
                        $(this).parents('li').addClass('collapsed');
                    }
                });
            }
        });

        $(window).resize(function () {
            sys.window.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
            sys.window.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
            $('.expandable').each(function () {
                $('ul', $(this))[0].style.display = '';
            });
        });

        // Clean up on unmount
        return () => {
            $('body').off('click', '.expandable > span');
            $(window).off('resize');
        };
    }, []);

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
                                    <li className="grid "><Link className="nav-link" href="/Station/Equipment">المعدات</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/Station/RawMaterials">المواد الخام </Link></li>
                                    <li className="grid "><Link className="nav-link" href="/Station/Lab">المعمل </Link></li>
                                    <li className="grid "><Link className="nav-link" href="/Station/Stations">المحطات</Link></li>
                                </ul>
                            </li>
                            <li className="grid "><Link className="nav-link" href="/Careers">الوظائف</Link></li>
                            <li className="grid "><Link className="nav-link" href="/News">أخبارنا</Link></li>
                            <li className="grid "><span>المشروعات</span>
                                <ul>
                                    <li className="grid "><Link className="nav-link" href="/Projects/Last">المشروعات السابقة</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/Projects/Coming">المشروعات اللاحقة</Link></li>
                                </ul>
                            </li>
                            <li className="grid "><span>مصنع الطوب الأسمنتي الخفيف</span>
                                <ul>
                                    <li className="grid "><Link className="nav-link" href="/BrickFactory/LightBrick">الطوب الخفيف</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/BrickFactory/Features">مميزات المنتج</Link></li>
                                    <li className="grid "><Link className="nav-link" href="/BrickFactory/Concrete">منتج الخرسانة الخفيفة</Link></li>
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


