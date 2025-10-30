import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgroung-blue.jpeg';

const Home = ({ searchQuery }) => {
    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '800px 800px',
        minHeight: '100vh',
        padding: '20px',
    };

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:2005/api/sellerProductUpload/getAllProducts'
                );
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter((product) => {
        const searchMatch =
            !searchQuery ||
            product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.productCategory.toLowerCase().includes(searchQuery.toLowerCase());

        const categoryMatch =
            selectedCategory === '' || product.productCategory === selectedCategory;

        return searchMatch && categoryMatch;
    });

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    function FacebookVideoEmbed() {
        return (
            <div className="video-container">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fexamplepage%2Fvideos%2F1234567890%2F&show_text=0&width=560"
                    width="560"
                    height="315"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Facebook Video"
                />
            </div>
        );
    }
    return (
        <div className="p-8 min-h-screen relative" style={backgroundStyle}>
            {/* <FacebookVideoEmbed /> */}
            <h2 className="text-white text-4xl font-bold text-center mb-8">Explore Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {filteredProducts.map((product) => (
                    <div
                        key={product._id}
                        className="bg-white border border-gray-200 rounded-xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                        onClick={() => navigate(`/product/${product._id}`)}
                    >
                        <img
                            src={product.productImage || 'https://via.placeholder.com/150'}
                            alt={product.productName}
                            className="w-full h-60 object-cover object-center"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 m-4">Order Now</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
