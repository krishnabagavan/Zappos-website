// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { ProductContext } from "../contexts/ProductContext";
// import axios from "axios";

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const contextData = useContext(ProductContext);
//   const { cart, setCart } = contextData;

//   const getFood = async () => {
//     try {
//       let response = await axios.get(`http://159.65.21.42:9000/product/${id}`);
//       const data = response.data;
//       console.log(data);
//       setProduct(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getFood();
//     // eslint-disable-next-line
//   }, [id]);

//   const ratingstar = (num) => "⭐".repeat(num);

//   const handleCart = (product) => {
//     const currentCart = [...cart];
//     const checkIfItemExist = currentCart.find((item) => item.id === product.id);
//     // console.log(checkIfItemExist);
//     if (checkIfItemExist) {
//       alert("You already have this in your cart");
//       return;
//     }
//     const newItem = { ...product, quantity: 1, totalPrice: product.price };
//     currentCart.push(newItem);
//     localStorage.setItem("cart", JSON.stringify(currentCart));
//     setCart(currentCart);
//   };

//   return (
//     <div>
//       {product ? (
//         <div className="  text-md ">
//           <div className='bg-gray-100 h-80 w-full p-3 flex items-center relative group'>
//             <img src={product.image} alt="product" className="w-80 mix-blend-multiply my-auto" />
//           </div>
//           <div>
//             <h3 className='mt-4 font-semibold text-sky-900 text-sm group-hover:text-blue-600 group-hover:underline underline-offset-4'>{product.name}</h3>
//             <small className='group-hover:text-blue-600 group-hover:underline underline-offset-4'>{product.description}</small>
//             <p className="text-green-800">${product.price}</p>
//             <p>⭐⭐⭐⭐⭐<small><span>  (</span>{product.quantity}<span>)</span></small></p>
//           </div>
//         </div>
//        ) : ( 
//          <p>Not Available</p> 
//        )} 
//     </div>
//   );
// }

// export default ProductDetails;
