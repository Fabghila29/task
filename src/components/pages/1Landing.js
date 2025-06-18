import {useSelector, useDispatch} from 'react-redux';
import Login from "../features/1Login";
import Help from "../features/2Help";
import {toggleModal} from '../../store/controlSlice';
import "./1Landing.css"

// Home holds landing and login, and its also featured as the redirection path for the other pages, ultimately forcing log in

export default function Home() {

	const user = useSelector((state)=> state.control.user);
	const dispatch = useDispatch();
	const modalInfo = useSelector((state) => state.control.modal.modal1);
	const header = useSelector((state) => state.control.header);
    

	return(
		<div className='Home--box'>
			<h1 className='Home'>{header}</h1>
			<div className='Landing-duo'>
				
				{user.logged?(
					<div className='Login-message'>
						<h2 className='Login-welcome'>Welcome, {user.username}</h2>
					</div>
					) : (
					<div className='Login-form'>
						<Login/>
					</div>
				)}
			</div>
			<button className="Info-button" onClick={()=> dispatch(toggleModal("modal1"))}>Info</button>
			{modalInfo && <Help/>}			
		</div>
		
	);    
};

// LANDING PAGE

/*LOGIN:
    -FORM
    -BUTTON
*/ 

/*HOME:
    -HEADER(control.user.username)

*/