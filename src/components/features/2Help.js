import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {toggleModal} from '../../store/controlSlice';
import "./2Help.css"


export default function Help() {



  // Here I used the modal template provided by the task to showcase the infos of the app as a Modal.

  const dispatch = useDispatch();
	const show = useSelector(state => state.control.modal.modal1);

  return (
    <Modal className="Info" show={show} onHide={() => dispatch(toggleModal("modal1"))}>
      <Modal.Header closeButton>
        <Modal.Title>Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          - log in to access the website.<br />
          - view or our showcased merch in the "Products" section.<br />
          - All cart movements will be displayed to you.<br />
          - You can choose the color of the product, and it will be displayed.<br />
          - Shipment selection will simulate a purchase.<br />
          - The same item can be purchased more than once.<br/>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(toggleModal("modal1"))}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}