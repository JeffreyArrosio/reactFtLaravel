

export default function ProductList({ products, totalPages, currentPage, onPageChange }) {
    
    return (
        <>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h1>{product.id}</h1>
                        <h2>Name: {product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: {product.amount}</p>
                        <img src={product.image} alt="image" />
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
                {/* Botón Anterior */}
                <button
                    className={`px-4 py-2 mx-1 text-white rounded ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
                        }`}
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    ← Anterior
                </button>

                {/* Números de Página */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1
                            ? "bg-blue-700 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        onClick={() => onPageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Botón Siguiente */}
                <button
                    className={`px-4 py-2 mx-1 text-white rounded ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
                        }`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Siguiente →
                </button>
            </div>
        </>
    )
}