import ProductList from "../features/3ProductList";
import Help from "../features/2Help";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/controlSlice";
import Notification from "../features/7Notifications";
import "./2Products.css"
import Home from "./1Landing";

// Products is the shop component built with the copy of the actual products acting as an inventory to feed the display. All logic is actually applied to the 'list' and 'cart' store arrays.

export default function Products (){

	const logged = useSelector((state)=>state.control.user.logged);
	
	
	const modalInfo1 = useSelector((state) => state.control.modal.modal1);
	const modalInfo2 = useSelector((state) => state.control.modal.modal2);
	const dispatch = useDispatch();
	

	return(

		<div>
			{logged === false? (<Home/>) :(
				<div className="Products">
					<h1 className="Products-title" >Products</h1>
					<ProductList />
					<button className="Info-button" onClick={()=> dispatch(toggleModal("modal1"))}>Info</button>
					{modalInfo1 && <Help/>}
					{modalInfo2 && <Notification/> }
			</div>
			)}
		</div>

			
	);

};