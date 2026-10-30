import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import shop from '/public/images/offer-1.png'
import shop2 from '/public/images/offer-2.png'
import start from '/public/images/start.svg'
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const OfferSectionS2 = () => {
    const storedTargetDate = localStorage.getItem("offerEndTime");
    const targetDate = storedTargetDate ? parseInt(storedTargetDate) : new Date().getTime() + 15 * 24 * 60 * 60 * 1000; 

    if (!storedTargetDate) {
        localStorage.setItem("offerEndTime", targetDate);
    }


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                localStorage.removeItem("offerEndTime");
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="wpo-offer-section-s2">
            <div className="offer-wraper">
                <div className="offer-left">
                    <div className="image">
                        <Image src={shop} alt="Stylish Green Chair" />
                    </div>
                    <div className="content">
                        <h2><Link onClick={ClickHandler} href="/shop">Stylish Green Chair</Link></h2>
                        <ul className="reting">
                            <li><Image src={start} alt="star" /></li>
                            <li><Image src={start} alt="star" /></li>
                            <li><Image src={start} alt="star" /></li>
                            <li><Image src={start} alt="star" /></li>
                            <li><Image src={start} alt="star" /></li>
                            <li><span>205</span></li>
                        </ul>
                        <span>$320.00</span>
                        <span className="dat">$280.00</span>
                        <div className="d-block">
                            <Link onClick={ClickHandler} href="/shop" className="shop-btn">Shop Now</Link>
                        </div>
                        <div id="clock" className="offer-time">
                            <div className="box">
                                <div className="time">{timeLeft.days}</div>
                                <span>Days</span>
                            </div>
                            <div className="box">
                                <div className="time">{timeLeft.hours}</div>
                                <span>Hours</span>
                            </div>
                            <div className="box">
                                <div className="time">{timeLeft.minutes}</div>
                                <span>Minutes</span>
                            </div>
                            <div className="box">
                                <div className="time">{timeLeft.seconds}</div>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offer-right">
                    <div className="content">
                        <h2><Link onClick={ClickHandler} href="/shop">Modern Gray Sofa Set</Link></h2>
                        <span>$320.00</span>
                        <span className="dat">$280.00</span>
                        <div className="d-block">
                            <Link onClick={ClickHandler} href="/shop" className="shop-btn">Shop Now</Link>
                        </div>
                    </div>
                    <div className="image">
                        <Image src={shop2} alt="Modern Gray Sofa Set" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSectionS2;
