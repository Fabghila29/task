import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../../store/controlSlice";
import "./0Navbar.css"



// here i hold all the navigational links to be added as a permanent component in the app.js and the log out button for when the user is logged 

export default function Navbar() {

	const logged = useSelector((state) => state.control.user.logged)
  const user = useSelector((state) => state.control.user.username)
	
	const dispatch = useDispatch();

  return (
    <nav className="Navbar">

      <Link className="Navbar-link" to="/">Home</Link>

      <Link className="Navbar-link" to="/products">Products</Link>

      <Link className="Navbar-link" to="/cart">Cart</Link>

			{logged && (
        <div>
          <h4>{user}</h4>
          <Button onClick={() => dispatch(resetUser())}>Log out</Button>
        </div>
      )}

    </nav>
  );
}

