import { useEffect, useState } from "react";
import "./HeaderNav.css";

const HeaderNav = () => {
    const images = {
        mobile: '/assets/img/TopBanner-mobile.png',
        laptop: '/assets/img/TopBanner-lap.png',
        desktop: '/assets/img/TopBanner-desktop.png'
    };

    const [bannerImage, setBannerImage] = useState(images.desktop);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            if (width <= 992) {
                setBannerImage(images.mobile);
            } else if (width <= 1440) {
                setBannerImage(images.laptop);
            } else {
                setBannerImage(images.desktop);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="header-nav">
            <img
                src={bannerImage}
                alt="Banner Background"
                className="header-nav-bg"
            />
            
            <div className="header-nav-content">
                <p className="header-nav-message">
                    Admission is Open, Grab your seat now
                </p>
                <img
                    src="/assets/img/Iconheadernav(13).png"
                    alt="arrow icon"
                    className="header-nav-icon"
                />
            </div>
        </div>
    );
};

export default HeaderNav;