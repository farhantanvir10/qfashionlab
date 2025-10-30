import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState(null);

    const MAX_QUANTITY = 10;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:2005/api/sellerProductUpload/getProduct/${id}`
                );
                setProduct(response.data);
            } catch (err) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, token]);

    const handleAddToCart = async () => {
        if (!token) {
            setMessage('You must be logged in to add items to the cart.');
            return;
        }

        try {
            const cartData = {
                productId: id,
                quantity,
                price: product.productOfferPrice,
            };

            const response = await axios.post('http://localhost:2005/api/cart/addCart', cartData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 202) {
                setMessage('This product is already in your cart.');
            } else if (response.status === 201) {
                setMessage('Added to cart successfully!');
                setIsInCart(true);
            } else {
                setMessage('There was an error processing your request.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to place order.');
        }
    };

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center ">
            <div className="bg-white rounded-xl shadow-lg flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
                {/* Product Image */}
                <div className="w-full lg:w-1/2 flex flex-col items-center bg-gray-950">
                    <img
                        src={product.productImage || 'https://via.placeholder.com/300'}
                        alt={product.productName}
                        className="object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className=" lg:w-1/2 m-6">
                    <h2 className="text-3xl font-bold">{product.productName}</h2>
                    <div className="text-justify">
                        <p className="text-gray-600 mt-1">
                            A jersey printing machine works by transferring the design or colour
                            onto the fabric using heat, pressure, and ink.
                        </p>
                        <p className="text-gray-600 mt-1">
                            <span className="font-bold">1. Design Preparation:</span> The design is
                            first made on a computer using software like Photoshop or CorelDraw.
                        </p>
                        <p className="text-gray-600 mt-1">
                            <span className="font-bold">2. Printing on Transfer Paper:</span> The
                            design is printed on special sublimation paper using sublimation ink.
                        </p>
                        <p className="text-gray-600 mt-1">
                            <span className="font-bold">3. Placing on Fabric:</span> The printed
                            paper is placed on the jersey cloth (polyester or synthetic fabric).
                        </p>
                        <p className="text-gray-600 mt-2">
                            <span className="font-bold">4. Heat Pressing:</span> The heat press
                            machine gives high temperature (around 180–200°C) and pressure for a few
                            seconds.
                        </p>
                        <p className="text-gray-600 mt-2">
                            <span className="font-bold">5. Colour Transfer:</span> The heat turns
                            the ink into gas and the colour transfers permanently onto the fabric
                            fibers.
                        </p>
                        <p className="text-gray-600 mt-2">
                            <span className="font-bold">6. Final Product:</span> The paper is
                            removed, and the design remains bright, washable, and long-lasting on
                            the jersey.
                        </p>
                        <p className="text-gray-600 italic mt-2">
                            <span className="font-bold">Note:</span> A jersey printing machine uses
                            heat and pressure to transfer the ink design from paper to fabric — this
                            process is called sublimation printing.
                        </p>
                    </div>

                    <div className="mt-6 flex items-center space-x-4">
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                        >
                            -
                        </button>
                        <span className="text-xl font-semibold">{quantity}</span>
                        <button
                            className="px-4 py-2 bg-gray-200 rounded-lg"
                            onClick={() => setQuantity((prev) => Math.min(MAX_QUANTITY, prev + 1))}
                        >
                            +
                        </button>
                    </div>

                    <div className="flex mt-6 space-x-4 justify-end">
                        <button
                            className="flex items-center space-x-3 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            onClick={handleAddToCart}
                        >
                            <FaWhatsapp className="text-3xl" /> <span className='text-xl'>Order Now</span>
                        </button>
                    </div>

                    {message && <p className="text-center text-blue-500 mt-4">{message}</p>}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
