import React from "react";
import HeaderS2 from '../headerS2/HeaderS2';

export default function NavbarS2(props) {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => setScroll(document.documentElement.scrollTop);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

    return (
        <div className={className}>
            <HeaderS2 hclass={props.hclass} Logo={props.Logo} col1={props.col1} col2={props.col2} col3={props.col3} col4={props.col4} />
        </div>
    );
}