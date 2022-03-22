import ProductCard from '../elements/ProductCard'

function ProductsList({records, categoryName}) {

    const productsList = records.map(record => (
        <ProductCard
            categoryName={categoryName}
            record={record}
            key={record.id}
            view={"small"}
        />
    ))

    return (
        <div className={`products-list`}>
            {productsList}
        </div>
    );
}

export default ProductsList