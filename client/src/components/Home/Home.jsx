
import { useEffect, useContext, useState } from "react";

import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);
    const [cat1, setCat1] = useState();
    const [cat2, setCat2] = useState();
    const [cat3, setCat3] = useState();
    const [cat4, setCat4] = useState();

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    const getProducts = () => {
        fetchDataFromApi(`/api/products?populate=*`).then((res) => {
            console.log(res);
            setProducts(res);
        });
        // catlog1
        fetchDataFromApi(`/api/products?populate=*&filters[categories][id]=${1}&pagination[start]=0&pagination[limit]=4`).then((res) => {
            console.log(res);
            setCat1(res);
        });
        // catlog2
        fetchDataFromApi(`/api/products?populate=*&filters[categories][id]=${2}&pagination[start]=0&pagination[limit]=4`).then((res) => {
            console.log(res);
            setCat2(res);
        });
        // catlog3
        fetchDataFromApi(`/api/products?populate=*&filters[categories][id]=${3}&pagination[start]=0&pagination[limit]=4`).then((res) => {
            console.log(res);
            setCat3(res);
        });
        // catlog4
        fetchDataFromApi(`/api/products?populate=*&filters[categories][id]=${4}&pagination[start]=0&pagination[limit]=4`).then((res) => {
            console.log(res);
            setCat4(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    {/* catlog1 */}
                    <Products products={cat1} headingText="headphones" />
                    {/* catlog2 */}
                    <Products products={cat2} headingText="Bluetooth Speaker" />
                    {/* catlog3 */}
                    <Products products={cat3} headingText="Wireless Earbuds" />
                    {/* catlog4 */}
                    <Products products={cat4} headingText="Smart Watch" />
                </div>
            </div>
        </div>
    );
};

export default Home;














// import { useEffect, useContext } from "react";

// import "./Home.scss";

// import Banner from "./Banner/Banner";
// import Category from "./Category/Category";
// import Products from "../Products/Products";
// import { fetchDataFromApi } from "../../utils/api";
// import { Context } from "../../utils/context";

// const Home = () => {
//     const { products, setProducts, categories, setCategories } = useContext(Context);

//     useEffect(() => {
//         getProducts();
//         getCategories();
//     }, [])

//     const getProducts = () => {
//         fetchDataFromApi("/api/products?populate=*").then((res) => {
//             console.log(res);
//             setProducts(res);
//         });
//     };
//     const getCategories = () => {
//         fetchDataFromApi("/api/categories?populate=*").then((res) => {
//             console.log(res);
//             setCategories(res);
//         });
//     };

//     return (
//         <div>
//             <Banner />
//             <div className="main-content">
//                 <div className="layout">
//                     <Category categories={categories} />
//                     <Products products={products} headingText="Popular Products" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
