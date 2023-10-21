function CategorySection() {
    let categories = [
        {name: 'All'},
        {name: 'Mixes'},
        {name: 'Music'},
        {name: 'Reservation'},
        {name: 'Lo-fi'},
        {name: 'Filmi'},
        {name: 'Natok'},
        {name: 'Mixes'},
        {name: 'Music'},
        {name: 'Lo-fi'},
        {name: 'Filmi'},
        {name: 'Natok'},
        {name: 'Javascript'},
        {name: 'Poadcast'},
        {name: 'Lo-fi'},
        {name: 'Filmi'},
        {name: 'Lectures'},
    ];

    return (
        <>
            <section className="categories-section py-3">
                <div className="d-flex align-item-center gap-3 overflow-x-scroll">
                    {categories.map((category, index) => {

                        
                        return (
                            <a href="#" className={`btn ${index===0 ? 'btn-dark' : 'btn-secondary'}`} key={`category-${index}`}>
                                {category.name}
                            </a>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default CategorySection;