import './category.css'



function Category({ category, children }) {
    return (
        <section className="category">
            <h2>{category}</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;