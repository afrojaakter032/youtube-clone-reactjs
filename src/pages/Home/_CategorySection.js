import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";

function Placeholder() {
    return(
        <>
            <div className="d-flex align-item-center justify-content-between placeholder-glow">
                {[1,2,3,4,5,6,7,8,9,10].map((item) =>
            <div className="placeholder py-3 col-1 rounded" key={`category-placeholder-${item}`}></div>)}
            </div>
        </>
    )
}

function Categories({categories}) {
    return(
        <>
            <div className="d-flex align-item-center gap-3 overflow-x-scroll">
                {categories.map((category, index) => {
                    return (
                        <a href="#" className={`btn ${index===0 ? 'btn-dark' : 'btn-secondary'}`} key={`category-${index}`}>
                            {/* {category.name} */}
                            {category && category.name ? category.name : 'Unnamed Category'}
                        </a>
                    );
                })}
            </div>
        </>
    )
}

function CategorySection() {
    let [isLoading, setIsLoading] = useState(true)
     let [categories, setCategories]= useState([]);
    // let categories = [
    //     {name: 'All'},
    //     {name: 'Mixes'},
    //     {name: 'Music'},
    //     {name: 'Reservation'},
    //     {name: 'Lo-fi'},
    //     {name: 'Filmi'},
    //     {name: 'Natok'},
    //     {name: 'Mixes'},
    //     {name: 'Music'},
    //     {name: 'Lo-fi'},
    //     {name: 'Filmi'},
    //     {name: 'Natok'},
    //     {name: 'Javascript'},
    //     {name: 'Poadcast'},
    //     {name: 'Lo-fi'},
    //     {name: 'Filmi'},
    //     {name: 'Lectures'},
    // ];
    useEffect (() => {
        ApiService.get('genre/movie/list')
            .then((data) => {
                    setCategories(data.genres);

                    setIsLoading(false);
             });
    }, []);

    // useEffect (() => {
    //     fetch(`${config.api_base_url}/genre/movie/list?api_key=${(config.api_key)}`)
    //         .then (res => res.json())
    //         .then((data) => {
    //             setTimeout (() => {
    //                 setCategories(data.genres);

    //                 setIsLoading(false);
    //             },5000);
    //          });
    // }, []);

    return (
        <>
            <section className="categories-section py-3">
                {isLoading ? <Placeholder /> : <Categories categories={categories}/>}


           </section>
        </>
    );
}

export default CategorySection;