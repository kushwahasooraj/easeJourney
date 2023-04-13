import react, { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiArrowRightCircle, FiPlay, FiPhoneCall } from "react-icons/fi"
import "./Css/styles.css"
import video from "./assets/video/video.mp4"
import imgp from "./assets/img/home1.jpg"
import home1 from "./assets/img/home1.jpg"
import about1 from "./assets/img/about1.jpg"
import about2 from "./assets/img/about2.jpg"
import experience1 from "./assets/img/experience1.jpg"
import experience2 from "./assets/img/experience2.jpg"
import place1 from "./assets/img/place1.jpg"
import place2 from "./assets/img/place2.jpg"
import place3 from "./assets/img/place3.jpg"
import place4 from "./assets/img/place4.jpg"
import place5 from "./assets/img/place5.jpg"
import "./Css/swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Navbar from './Navbar'
const Home = () =>{
const [theme,settheme] = useState("light-theme")
const [name, setname] = useState(<FiSun size={20} />)

const toggledark = () => {
    theme === "dark-theme" ? settheme("light-theme") : settheme("dark-theme")
    theme === "dark-theme" ? setname(<FiMoon size={20} />) : setname(<FiSun size={20} />)

}
localStorage.setItem('selected-theme', theme)
localStorage.setItem('selected-icon', name)
useEffect(()=>{
    document.body.className= theme

},[theme])
    return(
        <>
        {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

    <header className="header scroll-header" id="header" >
        <Navbar/>
            
        </header>

        <main className="main">
          
            <section className="home" id="home">
                <img src={home1} alt="" className="home__img"/>

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Discover your place</span>
                        <h1 className="home__data-title">Explore The <br/> Best <b>Beautiful <br/> Places</b></h1>
                        <a href="#/" className="button">Explore</a>

                    </div>

                    <div className="home__social">
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-facebook-box-fill"><FiFacebook size={15}/></i>
                        </a>
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-instagram-fill"><FiInstagram size={15}/></i>
                        </a>
                        <a href="#/" target="_blank" rel='noreferrer' className="home__social-link">
                            <i className="ri-twitter-fill"><FiTwitter size={15}/></i>
                        </a>
                    </div>

                    <div className="home__info">
                        <div>
                            <span className="home__info-title">5 best places to visit</span>
                            <a href="#/" className="button button--flex button--link home__info-button">
                                More <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                            </a>
                        </div>

                        <div className="home__info-overlay">
                            <img src={imgp} alt="" className="home__info-img"/>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">More Information <br/> About The Best Hotels</h2>
                        <p className="about__description">You can find the most beautiful and pleasant places at the best 
                            prices with special discounts, you choose the place we will guide you all the way to wait, get your 
                            place now.
                        </p>
                        <a href="#/" className="button">Reserve a place</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src={about1} alt="" className="about__img-one"/>
                        </div>

                        <div className="about__img-overlay">
                            <img src={about2} alt="" className="about__img-two"/>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="place section" id="place">
            <h2 className="section__title">Discover the most <br/> attractive places</h2>

                <div className="place__container container grid">
                   
                    <div className="place__card">
                        <img src={place1} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bali</h3>
                                <span className="place__subtitle">Indonesia</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place2} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">5,0</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bora Bora</h3>
                                <span className="place__subtitle">Polinesia</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place3} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,9</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hawaii</h3>
                                <span className="place__subtitle">EE.UU</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line">  <FiArrowRightCircle size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place4} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Whitehaven</h3>
                                <span className="place__subtitle">Australia</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place5} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hvar</h3>
                                <span className="place__subtitle">Croacia</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                        </button>
                    </div>
                </div>
            </section>
            {/* <section className="discover section" id="discover">
                <h2 className="section__title">Discover the most <br/> attractive places</h2>
                
                <div className="discover__container container swiper-container">
                    <div className="swiper-wrapper">
                       <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={discover1} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover2} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover3} alt="" className="discover__img"/></SwiperSlide>
      <SwiperSlide>  <img src={discover4} alt="" className="discover__img"/></SwiperSlide>
      
    </Swiper>
                       
                    </div>
                </div>
            </section> */}

           
            <section className="experience section">
                <h2 className="section__title">With Our Experience <br/> We Will Serve You</h2>

                <div className="experience__container container grid">
                    <div className="experience__content grid">
                       
                    </div>

                    <div className="experience__img grid">
                        <div className="experience__overlay">
                            <img src={experience1} alt="" className="experience__img-one"/>
                        </div>
                        
                        <div className="experience__overlay">
                            <img src={experience2} alt="" className="experience__img-two"/>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="video section">
                <h2 className="section__title">Video Tour</h2>

                <div className="video__container container">
                    <p className="video__description">Find out more with our video of the most beautiful and 
                        pleasant places for you and your family.
                    </p>

                    <div className="video__content">
                        <video src={video} type="video/mp4" id="video-file">
                        </video>

                        <button className="button button--flex video__button" id="video-button">
                            <i className="ri-play-line video__button-icon" id="video-icon"><FiPlay size={15}/></i>
                        </button>
                    </div>
                </div>
            </section>

           
            <section className="place section" id="place">
                <h2 className="section__title">Choose Your Place</h2>

                <div className="place__container container grid">
                   
                    <div className="place__card">
                        <img src={place1} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                              
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bali</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiPhoneCall size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place2} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bora Bora</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiPhoneCall size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place3} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hawaii</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line">  <FiPhoneCall size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place4} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Whitehaven</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiPhoneCall size={15}/></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={place5} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hvar</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiPhoneCall size={15}/></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={place5} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hvar</h3>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <FiPhoneCall size={15}/></i>
                        </button>
                    </div>
                </div>
                
            </section>

           
            <section className="subscribe section">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                        <h2 className="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
                        <p className="subscribe__description">Subscribe to our newsletter and get latest
                        information about nearest places.
                        </p>
    
                        <form action="" className="subscribe__form">
                            <input type="text" placeholder="Enter email" className="subscribe__input"/>
    
                            <button className="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
           
           
        </main>

        <footer className="footer section">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Travel</h3>
                        <p className="footer__description">Travel you choose the <br/> destination, 
                            we offer you the <br/> experience.
                        </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-facebook-box-fill"><FiFacebook size={20}/></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-twitter-fill"><FiTwitter size={20}/></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-instagram-fill"><FiInstagram size={20}/></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" rel='noreferrer' className="footer__social">
                                <i className="ri-youtube-fill"><FiYoutube size={20}/></i>
                            </a>
                        </div>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Log</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Plan y Pricing</a>
                            </li>
                           
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="#/" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2023 Byte Busters. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="#/" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#/" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>

        
        <a href="#/" className="scrollup" id="scroll-up">
            <i className="ri-arrow-up-line scrollup__icon"></i>
        </a>
        </>
    )
}
export default Home