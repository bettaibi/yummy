import React from 'react';
import SwiperCard from './SwiperCard';
import recipe2 from '../../assets/img/recipe2.jpg';

const Favorite: React.FC = () => {
    const cards = [1,2,3,5,6,4];

    return (
        <main className="main w-100 overflow-hidden" style={{marginTop: '50px'}}>
           <div className="p1">
                <SwiperCard />
                <h4 className="fw-600 my-1">My Favorite recipies</h4>
                {
                    cards.map(item => (
                        <div className="shadow-sm d-flex flex-row mb1 bg-white" style={{borderRadius: '8px'}}>
                            <div className="img-container">
                            <img src={recipe2} alt="recipe image"/>
                            </div>
                            <div className="content d-flex flex-column" style={{padding: '0.5rem', justifyContent:'space-between'}}>
                                <div>
                                    <h4 className="fw-600 m0">Recipe name</h4>
                                    <small>
                                        Swiper React component will create.
                                    </small>
                                </div>
                                <div>
                                    <a className="link text-right">Read More</a>
                                    <a className="link text-right ml1">Delete Favorite</a>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }

           </div>

        </main>
    )
}


export default Favorite
