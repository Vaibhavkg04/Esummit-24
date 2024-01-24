import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import Angel from "../assets/newSponsors/AngelOne.png"
const PastCard = ({pic}) => {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2000,
        },
    
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    
    var swiper = new Swiper('.people-carousel', {
        effect: 'swipe',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 1000,
        },
    });
  return (
    <div class="swiper-slide">
        <div class="member-container">
            <div class="member">
                <div class="image">
                    <img src={pic} alt="Sponsor" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PastCard