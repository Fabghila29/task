import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {toggleModal} from '../../store/controlSlice';


export default function Notification() {



  // Here I used the modal template provided by the task to showcase the infos of the app as a Modal. It will pass the notifications 

  const dispatch = useDispatch();
  const show = useSelector((state) => state.control.modal.modal2);
	const notification = useSelector((state) => state.control.notification)
    

  return (
    <Modal className="Modal" show={show} onHide={() => dispatch(toggleModal("modal2"))}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
				{notification}        
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(toggleModal("modal2"))}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};