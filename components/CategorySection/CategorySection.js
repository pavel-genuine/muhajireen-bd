import React from 'react';
import Link from 'next/link';


import Cicon1 from '/public/images/category/sofa-01.svg'
import Cicon2 from '/public/images/category/bed-double.svg'
import Cicon3 from '/public/images/category/sink-01.svg'
import Cicon4 from '/public/images/category/candelier-01.svg'
import Cicon6 from '/public/images/category/table-lamp-02.svg'
import Cicon7 from '/public/images/category/lamp-03.svg'
import Image from 'next/image';

const CategorySection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <h3 className="d-none">category</h3>
            <ul>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon1} alt="" />
                        <span>Sofas</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon2} alt="" />
                        <span>Bedrooms</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon3} alt="" />
                        <span>Washroom</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon4} alt="" />
                        <span>Chandelier</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon6} alt="" />
                        <span>Living Room</span>
                    </Link>
                </li>
                <li>
                    <Link onClick={ClickHandler} href="#">
                        <Image src={Cicon7} alt="" />
                        <span>Lamps</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default CategorySection;