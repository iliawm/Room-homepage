import { useEffect, useState } from "react";


function Home(){
    
    
    const [imgres, setImgRes] = useState("mobile-image-hero-1.jpg");
    
useEffect(() => {
    const updateImage = () => {
        setImgRes(window.innerWidth <= 1000 ? "mobile-image-hero-1.jpg" : "desktop-image-hero-1.jpg");
    };
    
    updateImage();
    window.addEventListener('resize', updateImage);
    return () => window.removeEventListener('resize', updateImage);
}, []);

    return (
        <>
        <div className="home-container">
        <div className="hero">
            <h1 className="nav">
                <div className="hammenu" onClick={()=>{
                    const ham = document.querySelector(".iconham");
                    ham.classList.toggle("active");
                    
                }}>
                    <img src="/icon-hamburger.svg" alt="" className="iconham"/>
                </div>
                <div className="title">room
                </div>
            </h1>
            <img src={imgres} alt="" className="heroimg"/>
            <div className="contentbox">
            <button className="buttonL" ><img src="icon-angle-left.svg" alt="" className="leftsvg"/></button>
        <button className="buttonR"><img src="icon-angle-right.svg" alt="" className="leftsvg"/></button>
        </div>
        </div>

            <div className="desc-cont">
            <h1 className="titledesc">Discover innovative ways to decorate</h1>
            <p className="descP">We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love</p>
            <button className="explore-button">SHOP NOW <img src="/icon-arrow.svg" alt="" className="arrow"/></button>
            <div className="contentbox-oversize">
            <button className="buttonL" ><img src="icon-angle-left.svg" alt="" className="leftsvg"/></button>
        <button className="buttonR"><img src="icon-angle-right.svg" alt="" className="leftsvg"/></button>
        </div>
        </div>
        </div>
    
        <div className="mid-cont">
            <img src="/image-about-dark.jpg" alt="" className="midimg" />
                    <div className="AboutContainern">
            <div className="aboutn">
                <h1 className="aboutTitlen">ABOUT OUR FURNITURE</h1>
                <p className="aboutPn">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
        </div>
        <div className="botcontainern">
            <img src="/image-about-light.jpg" alt="" className="botimgcontn" />
        </div>
        </div>
        <div className="AboutContainer">
            <div className="about">
                <h1 className="aboutTitle">ABOUT OUR FURNITURE</h1>
                <p className="aboutP">Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
            </div>
        </div>
        <div className="botcontainer">
            <img src="/image-about-light.jpg" alt="" className="botimgcont" />
        </div>
        </>
    );
}
export default Home;