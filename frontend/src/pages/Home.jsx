import { useEffect, useState } from 'react';
import { axiosInstance } from '../lib/axios';
import Cards from '../components/Cards';
import size from '../assets/size-chart.png';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get('/sellerProductUpload/getAllProducts');
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const featureDesign = products.filter((product) => {
        const categoryMatch = product.productCategory === 'Feature Design';
        return categoryMatch;
    });
    const previouslyOrdered = products.filter((product) => {
        const categoryMatch = product.productCategory === 'Previously Ordered';
        return categoryMatch;
    });
    const customerSatisfaction = products.filter((product) => {
        const categoryMatch = product.productCategory === 'Customer Satisfaction';
        return categoryMatch;
    });

    if (loading) return <p className="text-center text-lg">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    function FacebookVideoEmbed() {
        return (
            <div className="sm:w-[60vw] h-[58vw] sm:h-[37vw] mb-5 sm:mb-0 rounded-xl border border-gray-500 shadow-md shadow-black overflow-hidden">
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61565777258690%2Fvideos%2F1249143539729251%2F&show_text=false&t=0"
                    width="100%"
                    height="100%"
                ></iframe>
            </div>
        );
    }
    return (
        <div className="min-h-screen relative">

            {/* Hero Section */}
            <div className="sm:flex w-full gap-2 md:gap-5 p-5 justify-center border-b border-gray-500">
                <FacebookVideoEmbed />
                <img
                    src={size}
                    alt="Size Chart"
                    className="w-[80vw] sm:w-[32vw] h-full bg-gray-900 rounded-xl border border-gray-500 p-10 sm:p-5 lg:p-10 mx-auto sm:mx-0 shadow-md shadow-black"
                />
            </div>

            <Cards products={featureDesign} />
            <Cards products={previouslyOrdered} />
            <Cards products={customerSatisfaction} />
        </div>
    );
};

export default Home;
