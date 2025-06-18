import CartList from "../features/5CartList";
import { useSelector } from "react-redux";
import Help from "../features/2Help";
import { useDispatch } from "react-redux";
import { toggleModal, toggleShipping } from "../../store/controlSlice";
import Notification from "../features/7Notifications";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from "react-bootstrap/esm/DropdownButton";

import "./3Cart.css";
import Home from "./1Landing";

// Here the logged status is imposed. Then the cart is checked to see if its full. In that case the shipment selection is displayed, and underneath all the products will be displayed.

export default function Cart(){

    const cart  = useSelector((state) => state.control.cart);
    const modalInfo = useSelector((state) => state.control.modal.modal1);
    const modalNotification = useSelector((state) => state.control.modal.modal2);
    const notification = useSelector((state)=>state.control.notification);
    const shipping = useSelector((state)=>state.control.order);
    const dispatch = useDispatch();
    const logged = useSelector((state)=>state.control.user.logged);



    return (
      <div>
        {logged === false ? (
          <Home />
        ) : (
          <div className="Products">
            {cart.length > 0 && (
              <div className="Products-shipping">
                <h4>Current shipping method:</h4>
                <h4>{shipping}</h4>
                <h4>Total: {cart.reduce((total, item) => total + item.bought, 0).toFixed(2)}</h4>

                <DropdownButton
                  className="ProductCard-dropdown"
                  title="shipping method"
                  variant="secondary"
                  onSelect={(shipping) => dispatch(toggleShipping(shipping))}
                >
                  <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>
                  <Dropdown.Item eventKey="Fast">Fast</Dropdown.Item>
                </DropdownButton>
              </div>
            )}
            <h1 className="Products-title">Cart</h1>
            {cart ? <CartList /> : <p>Empty basket</p>}
            <button
              className="Info-button"
              onClick={() => dispatch(toggleModal("modal1"))}
            >
              Info
            </button>
            {modalInfo && <Help />}
            {modalNotification && <Notification />}
          </div>
        )}
      </div>
    );

};