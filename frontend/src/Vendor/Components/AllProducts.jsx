import { useEffect, useState } from "react";
import { API_URL, deleteProductById, getProducts } from "../Services/api";
import { AiOutlineDelete } from "react-icons/ai";
const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.products);
            
        } catch (error) {
            console.log("Error while calling getProducts api", error);
        }
    };

    const deleteProduct = async (productId) => {
        const confirmed = confirm("Are you sure you want to delete this product?");
        if (!confirmed) return;
        
        try {
            const response = await deleteProductById(productId);
            if (response && response.status === 200) {
                setProducts(products.filter((product) => product._id !== productId));
                alert("Product deleted successfully");
            }
        } catch (error) {
            console.log("Error while calling deleteProduct api", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="w-full" >
            <h2 className="text-center text-2xl font-medium">Menu</h2>
            {/* <p>Total Items: {products.count()}</p> */}
            <div className="h-[85vh] overflow-y-scroll" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 px-4  " >
                {
                    products.length === 0 ? (
                        <h2>No products in Menu</h2>
                    ) : (
                        products.map((product) => (
                            <div key={product._id} className="p-4 border rounded-lg drop-shadow-lg bg-white cursor-pointer my-4">
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={`${API_URL}/uploads/${product.image}`} alt={product.productName} className="w-full h-full object-cover mb-4 rounded-md"/>
                                </div>
                                <div className="py-4">
                                    <p>Product Name: {product.productName}</p>
                                    <p>Price: ₹ {product.price}</p>
                                    <p>Category: {product.category.join(', ')}</p>
                                    {/* <p>Description: {product.description}</p> */}
                                </div>
                                <button onClick={() => deleteProduct(product._id)} className="text-[#F4640B] text-2xl"><AiOutlineDelete /></button>
                            </div>
                        ))
                    )
                }
            </div>
            </div>
        </div>
    );
};

export default AllProducts;
