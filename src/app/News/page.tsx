"use client"
import { useEffect } from 'react';
import Footer from '../../Component/Footer';
import NavBar2 from '../../Component/NavBar2';
import Image from 'next/image';
import '../News/main.css';

function News() {
    useEffect(() => {
        const items = document.querySelectorAll('.hero-slider .slider-list .item') as NodeListOf<HTMLElement>;
        const next = document.getElementById('next') as HTMLButtonElement;
        const prev = document.getElementById('prev') as HTMLButtonElement;
        const thumbnails = document.querySelectorAll('.thumbnail .item') as NodeListOf<HTMLElement>;

        // config param
        const countItem = items.length;
        let itemActive = 0;

        // function to show the slider
        const showSlider = () => {
            // remove item active old
            const itemActiveOld = document.querySelector('.hero-slider .slider-list .item.active');
            const thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
            if (itemActiveOld && thumbnailActiveOld) {
                itemActiveOld.classList.remove('active');
                thumbnailActiveOld.classList.remove('active');
            }

            // activate new item
            items[itemActive].classList.add('active');
            thumbnails[itemActive].classList.add('active');

            // clear auto time run slider
            clearInterval(refreshInterval);
            refreshInterval = setInterval(() => {
                next.click();
            }, 5000);
        };

        // event next click
        next.onclick = function () {
            itemActive = (itemActive + 1) % countItem;
            showSlider();
        };

        // event prev click
        prev.onclick = function () {
            itemActive = (itemActive - 1 + countItem) % countItem;
            showSlider();
        };

        // auto run slider
        let refreshInterval = setInterval(() => {
            next.click();
        }, 5000);

        // click thumbnail
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                itemActive = index;
                showSlider();
            });
        });

        return () => {
            clearInterval(refreshInterval);
            next.onclick = null;
            prev.onclick = null;
            thumbnails.forEach(thumbnail => thumbnail.replaceWith(thumbnail.cloneNode(true)));
        };
    }, []);


    return (
        <>

            <NavBar2  ></NavBar2>

            {/* Slider */}
            <div className="hero-slider">
                <div className="slider-list">
                    <div className="item active">
                        <img src="/Slider/1.png" alt="Slider Image 1" />
                        <div className="content">
                            <h2>الخرسانة الجاهزة</h2>
                            <p>شركة دلتا ميكس هي إحدى الشركات الرائدة في إنتاج وتوريد الخرسانة الجاهزة،
                                حيث تقدم مزيجًا عالي الجودة يُحضّر في مصانعها
                                ثم يُنقل إلى مواقع البناء لضمان تنفيذ المشاريع بكفاءة وسرعة.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/Slider/5.png" alt="Slider Image 2" />
                        <div className="content">
                            <h2>الطوب الأسمنتى الخفيف</h2>
                            <p>طوب أسمنتي خفيف من دلتا ميكس يوفر عزلًا حراريًا ممتازًا، ويتميز بالمتانة وسهولة التعامل..
                                مثالي للبناء والتشييد، ويعزز من كفاءة استهلاك الطاقة في المباني بفضل خصائصه المميزة.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/Slider/2.png" alt="Slider Image 3" />
                        <div className="content">
                            <h2> الإشراف والإنتاج</h2>
                            <p>يشرف فريق من المهندسين المتخصصين على إنتاج خلطات الخرسانة،
                                تحت إشراف أ.د. شريف عبدون، خبير استشاري في تصميم الخلطات المناسبة لكل منشأة وظروفها.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/Slider/4.png" alt="Slider Image 4" />
                        <div className="content">
                            <h2>معمل دلتا ميكس</h2>
                            <p>تتم مراقبة جودة المواد والخرسانة عبر أحواض المعالجة،
                                ماكينة التكسير، والفرن الحراري، مع إجراء جميع الاختبارات طبقًا للمواصفات المصرية والعالمية.
                                يتولى فني معمل فحص كل صبة خرسانية وتوفير خدمة تكسير المكعبات بأحدث الأجهزة.</p>
                        </div>
                    </div>

                    <div className="item">
                        <img src="/Slider/3.png" alt="Slider Image 5" />
                        <div className="content">
                            <h2>الخرسانة </h2>
                            <p>يشرف فريق من المهندسين المتخصصين على إنتاج خلطات الخرسانة،
                                تحت إشراف أ.د. شريف عبدون، خبير استشاري في تصميم الخلطات المناسبة لكل منشأة وظروفها.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* arrows */}
            {/* <div className='arrows'>
                <span><button id="prev"> &lt; </button></span>
                <span> <button id="next"> &gt; </button></span>
            </div> */}
            {/* thumbnail */}
            <div className="thumbnail">
                <div className="item active">
                    <img src="/Slider/1.png" alt="Slider Image 1" />
                    <div className="content">
                        الخرسانة الجاهزة
                    </div>
                </div>
                <div className="item">
                    <img src="/Slider/5.png" alt="Slider Image 2" />
                    <div className="content">
                        الطوب الأسمنتى
                    </div>
                </div>
                <div className="item">
                    <img src="/Slider/2.png" alt="Slider Image 3" />
                    <div className="content">
                        الإشراف والإنتاج
                    </div>
                </div>
                <div className="item">
                    <img src="/Slider/4.png" alt="Slider Image 4" />
                    <div className="content">
                        معمل دلتا ميكس
                    </div>
                </div>
                <div className="item">
                    <img src="/Slider/3.png" alt="Slider Image 5" />
                    <div className="content">
                        الخرسانة
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News;
