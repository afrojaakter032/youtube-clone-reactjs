import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


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
    let { slug, name } = useParams();
    return(
        <>
            <div className="d-flex align-item-center gap-3 overflow-x-scroll">
                {categories.map((category, index) => {
                    return (
                        <Link to={`/category-movie-list/${category.id}/${category.name}`} className={`btn btn-secondary ${slug == category.id ? 'active' : ''}`} key={`category-${index}`}>
                        {/* {category && category.name ? category.name : 'Unnamed Category'} */}
                        {category.name}

                        </Link>
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