

export default function ProductList({ product }) {

    return (
        <>
            <li key={product.id}>
                <h1>{product.id}</h1>
                <h2>Name: {product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.amount}</p>
                <img src={product.image} alt="image" />
            </li>
        </>
    )
}