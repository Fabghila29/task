import ProductCard from "./4ProductItem";
import  { useSelector, useDispatch } from 'react-redux';
import "./5CartList.css"

export default function ProductList(){

	const products = useSelector((state)=>state.control.cart);

	// Here i created all the the product items in the cart

	return(
		<div>
			{products.map((product, index) =>(    
				<ProductCard key={index} product={product} page={true}/>
			))}
		</div>
	);
};
