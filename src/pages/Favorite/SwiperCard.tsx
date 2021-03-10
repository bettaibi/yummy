import React, { useContext } from 'react'
import { v4 } from 'uuid';
import { Context } from '../../store/Context';

import './Favorite.scss';

const SwiperCard: React.FC = () => {
    const { state } = useContext(Context);
    const recipies = state.recipies.slice(0, 8);
    console.log(recipies)
    return (
        <React.Fragment>
            <h4 className="fw-600 mb1 m1">Recently searched</h4>
            <div className="d-flex flex-row mb1 w-100 scroll-container">
                {
                    recipies.map((item: any) => (
                        <div key={v4()} className="ml1 r_item">
                            <div className="cover shadow-sm bg-white" style={{marginBottom: '0.5rem'}}>
                                <img draggable={false} src={item.recipe.image} alt="related recipies" />
                            </div>
                            <h4 className="fw-600 text-dark" style={{ margin: '0' }}>{item.recipe.label}</h4>
                        </div>
                    ))
                }


            </div>
        </React.Fragment>
    )
}

export default SwiperCard
