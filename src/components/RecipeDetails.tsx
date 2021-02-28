import React, {useRef, useEffect} from 'react'

import recipe2 from '../assets/img/recipe2.jpg';
import favorite from '../assets/icons/favorite.svg';

const RecipeDetails: React.FC = () => {
    let navbarRef= useRef<any>();

    useEffect(()=>{
        window.addEventListener('scroll', updateNavbarPosition);

        return () =>{
            window.removeEventListener('scroll', updateNavbarPosition);
        }
    },[]);


    function updateNavbarPosition(){
        if(window.scrollY > 200){
            (navbarRef.current).style.top = '0';
        }
        if(window.scrollY < 15){
            (navbarRef.current).style.top = '-50px';
        }
    }

    return (
        <div>
            <header ref={navbarRef} className="slide-down-header d-flex flex-row flex-space-between p1 w-100 shadow-sm bg-dark" style={{height: '50px'}}>
                <SlideDownHeader />
            </header>
            <div className="recipe-pic-container w-100 shadow-sm">
                <div className="nav-header d-flex flex-row flex-space-between p1 w-100">
                   <SlideDownHeader />
                </div>
                <img src={recipe2} alt="recipe details"/>
            </div>
            
            <div className="p1">
                <h1 className="fw-600">Recipe Name</h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente soluta ducimus. Quisquam excepturi ut facere fugit autem, modi pariatur harum at illo iusto, vitae nisi rem, consequatur molestiae vero.
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente itaque a delectus saepe officia explicabo ea sint hic error dolorum cum eveniet distinctio quibusdam nam fuga dolor, atque dignissimos impedit?
                    Quaerat est voluptates, cum qui tenetur doloribus aut ratione ea sit similique. Itaque, doloribus. Cum consectetur corporis corrupti cumque nisi? Pariatur dolorum dolore nihil eligendi facilis! Explicabo facilis asperiores soluta.
                    Sint, consectetur ipsum rem obcaecati aliquam ullam natus illum? Esse nostrum optio dolore repudiandae architecto debitis, cupiditate sapiente eius adipisci inventore, et modi dolorem alias. Obcaecati fugit voluptatem dolore soluta!
                    Libero eaque cupiditate eius pariatur fugit recusandae voluptatum eos natus, enim, amet inventore hic reprehenderit dolorem facilis similique iusto! Officia sapiente quos illum quas voluptatum provident inventore perspiciatis. Qui, a!
                    Quis cumque libero deserunt quibusdam facere repellendus dolores aut, reiciendis veniam corporis consequuntur ratione perspiciatis, eveniet praesentium porro adipisci itaque quas? Reiciendis modi ut nam vitae ex rerum natus quasi?
                    Adipisci quaerat minus autem porro perspiciatis quia, deserunt cumque labore, beatae nam totam aspernatur molestias, illum eaque sit commodi sed. Ipsa voluptatum dolor, sint laboriosam dolorem sit? Laborum, optio ducimus.
                    Aut iste ab id quod eum deleniti repudiandae libero sapiente mollitia accusantium in totam explicabo esse veniam fugit vero corporis non pariatur, incidunt fuga magni temporibus saepe! Nulla, voluptatibus cumque.
                    Veritatis voluptatum doloremque qui tempora, vero modi quas esse sint facilis amet sequi labore ad veniam omnis! Sed, voluptatum ducimus ipsam, cumque enim fugit repellat, nemo vitae tempora labore nesciunt.
                    Aliquam accusantium vel odit fugiat officia pariatur vero libero quas, at aliquid quam blanditiis est repellendus sit sapiente, unde facere hic dolores earum, eveniet consequatur eius atque velit sunt! Accusantium!
                    Suscipit minus totam explicabo nisi ullam iure. Esse recusandae cupiditate nobis odit quae eaque nesciunt ea, quo illo magni obcaecati quasi distinctio eius libero, error ex tempore rem. Animi, vel.
                </p>
            </div>

        </div>
    )
}

const SlideDownHeader: React.FC = () =>{

    return(
        <React.Fragment>
            <button className="btn btn-secondary">Back</button>
            <span>
                <img src={favorite} alt="favorite icon" style={{filter: 'invert(1)'}}/>
            </span>
        </React.Fragment>
    )
}

export default RecipeDetails
