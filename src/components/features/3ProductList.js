import ProductCard from "./4ProductItem";
import  { useSelector } from 'react-redux';

export default function ProductList(){

	const products = useSelector((state)=>state.control.copy);

	// Here i created all the the product items in the product display. They use an identical copy of the initial products, so that the shop remains untouched on user interaction.

	return(
		<div>
			{products.map((product, index) =>(    
				<ProductCard key={index} product={product} page={false}/>
			))}
		</div>
	);
};
