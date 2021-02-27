import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Favorite.scss';
import recipe2 from '../../assets/img/recipe2.jpg';

const SwiperCard: React.FC = () => {
    const cards = [1,2,3,5,6,4];
    
    return (
        <React.Fragment>
            <h4 className="fw-600 mb1">Related Recipies</h4>
            <Swiper
                spaceBetween={16}
              
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} >
                
                {
                    cards.map(item =>(
                        <SwiperSlide key= {item} className="shadow-sm bg-white swipper-card">
                        <div className="swipper-cover">
                            <img src={recipe2} alt="related recipies"/>
                            <div className="swipper-content">
                                <h4 className="fw-600 text-white" style={{margin: '0'}}>Name</h4>
                                <small className="text-white">{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad distinctio dolorum sed labore, doloremque in autem recusandae eligendi! Minima, molestiae exercitationem quaerat ducimus sequi nostrum quis unde laborum ipsum?'.substr(0,40)+'...'}</small> 
                            </div>
                        </div>
                      </SwiperSlide>
                    ))
                }

               
            </Swiper>
        </React.Fragment>
    )
}

export default SwiperCard
