import React from 'react'
import { FiSun, FiFacebook, FiInstagram, FiYoutube, FiTwitter, FiArrowRightCircle, FiPhoneCall } from "react-icons/fi"
import "./Css/styles.css"
import Images from './images'
import video from "./assets/video/video.mp4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./Css/swiper.css"
// import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import Navbar from './Navbar'
const Monument = () =>{

    return(
        <>
        {/* <!-- ----------------------------  Navigation ---------------------------------------------- --> */}

    <header className="header scroll-header" id="header" >
        <Navbar/>
            
        </header>

        <main className="main">
          
            <section className="home" id="home">
                <div style={{position:'absolute'}}>
            <Carousel>
                
               
                <div>
                    <img src={Images.red_fort} alt='' />
                   
                </div>
                <div>
                    <img src={Images.qutub_minar} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider1} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider2} alt='' />
                   
                </div>
                <div>
                    <img src={Images.slider10} alt='' />
                   
                </div>
                <div>
                    <img src={Images.lotus_temple} alt='' />
                   
                </div>
                <div>
                    <img src={Images.india_gate} alt='' />
                   
                </div>
                <div>
                    <img src={Images.akshar}  alt='' />
                   
                </div>
                
            </Carousel>
            </div>
                
                

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Discover your place</span>
                        <h1 className="home__data-title">Explore The <br/> Best <b>Beautiful <br/> Places</b></h1>
                        <a href="/monument" className="button">Explore</a>

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
                            <span className="home__info-title">Best places to visit</span>
                            <a href="#place" rel='noreferrer' className="button button--flex button--link home__info-button">
                                More <i className="ri-arrow-right-line"> <FiArrowRightCircle size={15}/></i>
                            </a>
                        </div>

                        <div className="home__info-overlay">
                            <img src={Images.imgp} alt="" className="home__info-img"/>
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            
            
            <section className="place section" id="place">
            <h2 className="section__title">Discover the most <br/> attractive places</h2>

                <div className="place__container container grid">
                   
                    <div className="place__card">
                        <img src={Images.red_fort} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Red Fort</h3>
                                <span className="place__subtitle" ><a href='https://www.google.com/maps/place/Red+Fort/@28.6186535,77.2453696,13z/data=!4m6!3m5!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!8m2!3d28.6561592!4d77.2410203!16zL20vMDVteXN2'target='_blank'> Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi 110006</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button" >
                        <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Red_Fort' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.india_gate} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.6</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">India Gate</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/India+Gate/@28.612912,77.2269348,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2daa9eb4d0b:0x717971125923e5d!8m2!3d28.612912!4d77.2295097!16zL20vMDM1bWMz' target='_blank'>Kartavya Path, India Gate, New Delhi, Delhi 110001</a> </span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/India_Gate' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.qutub_minar} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Qutub Minar</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Qutab+Minar,+Seth+Sarai,+Mehrauli,+New+Delhi,+Delhi+110016/@28.5244946,77.1829428,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1e065dc72379:0xf6e7259f610de1d7!8m2!3d28.5244946!4d77.1855177!16zL20vMDNjX2g4' target='_blank'>Seth Sarai, Mehrauli, New Delhi, Delhi 110030</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Qutb_Minar' target='_blank' rel='noreferrer'> <FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.akshar} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.6</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Akshardham</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Akshardham/@28.6126735,77.274687,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce35b9975b1fb:0x69a09f265ef3b22a!8m2!3d28.6126735!4d77.2772619!16zL20vMDkxbmYx' target='_blank'>Noida Mor, Pandav Nagar, New Delhi, Delhi 110092</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Swaminarayan_Akshardham_(Delhi)' target='_blank'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>

                   
                    <div className="place__card">
                        <img src={Images.lotus_temple} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Lotus Temple</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Lotus+Temple/@28.553492,77.2562515,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3c16e028cd1:0x653beb1ee85ec67a!8m2!3d28.553492!4d77.2588264!16s%2Fm%2F03bx9s0' target='_blank'>Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi, Delhi 110019</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Lotus_Temple' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider1} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.2</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Agrasen Ki Baoli</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Agrasen+ki+Baoli/@28.626062,77.222462,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd3313d868d9:0x9084a965630af01b!8m2!3d28.626062!4d77.2250369!16s%2Fm%2F027z5xq' target='_blank'>J6GG+C2F, Hailey Road, KG Marg, near Diwanchand Imaging Centre, New Delhi, Delhi 110001</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%97%E0%A5%8D%E0%A4%B0%E0%A4%B8%E0%A5%87%E0%A4%A8_%E0%A4%95%E0%A5%80_%E0%A4%AC%E0%A4%BE%E0%A4%B5%E0%A4%B2%E0%A5%80' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider2} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.7</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Chattarpur Temple</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Chattarpur+Mandir/@28.502323,77.1793751,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1e3d1fc01263:0xc0b6b3968e9b385f!8m2!3d28.502323!4d77.18195!16s%2Fg%2F1hc2l424r' target='_blank'>Chhatarpur, South Delhi district, Delhi, India</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Chhatarpur_Temple' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider3} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hauz Khas</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Hauz+Khas+Village,+Deer+Park,+Hauz+Khas,+New+Delhi,+Delhi+110016/@28.553331,77.1916359,17z/data=!3m1!4b1!4m6!3m5!1s0x390d1d8aa6bccb0f:0x357d3d8396615cec!8m2!3d28.5533997!4d77.1941654!16s%2Fg%2F11bz0bdcbv' target='_blank'>X-31, Block X, Deer Park, Hauz Khas, New Delhi, Delhi 110016</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Hauz_Khas' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider4} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.1</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Jantar Mantar</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Jantar+Mantar/@28.6270547,77.2140518,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd4a694fc49b:0xa24a6ec962781b0c!8m2!3d28.6270547!4d77.2166267!16zL20vMDdyNmQ3' target='_blank'>Connaught Place, Sansad Marg, New Delhi, Delhi 110001</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jantar_Mantar' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider5} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.2</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Purana Qila</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Purana+Qila/@28.6095744,77.2411622,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3214b3b6771:0x139279610ab2ccb3!8m2!3d28.6095744!4d77.2437371!16zL20vMDZuZzRw' target='_blank'>Mathura Rd, Near Delhi Zoo, New Delhi, Delhi 110003</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Purana_Qila' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider6} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Amrit Udyan</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Amrit+Udyan/@28.6144404,77.1952861,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce3c6bdd55eb1:0x834571b6bf250fa6!8m2!3d28.6144404!4d77.197861!16s%2Fg%2F11pgjcbph0' target='_blank'>Rashtrapati Bhawan, President's Estate, New Delhi, Delhi 110004</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Mughal_garden' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider7} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Gurudwara Bangla Sahib</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Gurudwara+Shri+Bangla+Sahib/@28.6263764,77.2064955,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd9eccc07d2d:0x6db044e71b8e8e3b!8m2!3d28.6263764!4d77.2090704!16zL20vMDRfMWtz' target='_blank'>Hanuman Road Area, Connaught Place, New Delhi, Delhi 110001</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Gurudwara_Bangla_Sahib' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider8} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Lodi Garden</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Lodhi+Garden/@28.5930959,77.2171045,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce2ececc92e35:0x86c0764b1c0d4bea!8m2!3d28.5930959!4d77.2196794!16zL20vMDRfOHF0' target='_blank'>Lodhi Rd, Lodhi Gardens, Lodhi Estate, New Delhi, Delhi 110003</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Lodi_Gardens' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider9} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.5</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Jama Masjid</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Jama+Masjid/@28.6506792,77.2308672,17z/data=!3m1!4b1!4m6!3m5!1s0x390cfd18df89b215:0xdd57369e29bf9d96!8m2!3d28.6506792!4d77.2334421!16zL20vMDR5emo1' target='_blank'>Jama Masjid Rd, Jama Masjid, Chandni Chowk, New Delhi, Delhi 110006</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jama_Masjid,_Delhi' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
                    </div>
                    <div className="place__card">
                        <img src={Images.slider10} alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4.8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hanuman Temple</h3>
                                <span className="place__subtitle"><a href='https://www.google.com/maps/place/Hanuman+Mandir+Karol+bagh/@28.6450368,77.1954869,17z/data=!3m1!4b1!4m6!3m5!1s0x390d029da94bf9d9:0xda267c5baef74594!8m2!3d28.6450368!4d77.1980618!16s%2Fg%2F11cn8pr65y' target='_blank'>Desh Bandhu Gupta Rd, Block E, Jhandewalan Extension, Paharganj, New Delhi, Delhi 110055</a></span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"> <a href='https://en.wikipedia.org/wiki/Jhandewalan_Temple' target='_blank' rel='noreferrer'><FiArrowRightCircle size={15}/></a></i>
                        </button>
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
            <i className="ri-arrow-up-line scrollup__icon"><FiSun size={50}/></i>
        </a>
        </>
    )
}
export default Monument