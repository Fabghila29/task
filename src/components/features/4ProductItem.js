import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addCart, removeCart } from '../../store/controlSlice';
import "./4ProductItem.css"
import logo from '../../logo.svg'
 


export default function ProductCard({product, page}) {

  // VARIABLES
  const { id, text, price, color } = product;


  const dispatch = useDispatch();

  // this state allows me change the variant of the dropdown menu
  const [selectedColor, setSelectedColor] = useState(color);

  // here every key refers to the dropdown event keys, so that when the user triggers the onSelect function modifying the 'selectedColor', they ultimately change the index of this colorToVariant selection in the card's dropdown 'variant=' selection
  const colorToVariant = {
    Red: 'danger',
    Green: 'success',
    Blue: 'primary',
  };

  

  return (
    // I added a conditional class so that if the card is bought=true it will show up with a green border(code_matter, 2025)^1
    <Card className='ProductCard'>
      <Card.Img variant="top" src={logo}  /> 
      
      <Card.Body className='ProductCard-body'>
        <Card.Title>{text}</Card.Title>
        <Card.Text>{id}</Card.Text>
        <Card.Text className='ProductCard-text'><strong>{price.toFixed(2)}</strong></Card.Text>
 
        <DropdownButton
          className='ProductCard-dropdown'
          title= "Color"
          variant={colorToVariant[selectedColor]}
          onSelect={(color) => setSelectedColor(color)}
        >
          <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
          <Dropdown.Item eventKey="Green">Green</Dropdown.Item>
          <Dropdown.Item eventKey="Blue">Blue</Dropdown.Item>
        </DropdownButton>


        <Button
          className="ProductCard-buy"
          variant={page ? 'warning' : 'primary'}
          onClick={page? (() => dispatch(removeCart(product.id))) : (() => dispatch(addCart({productId: id, color: selectedColor})))}
        >
         {page? ('Remove') : ('Buy')}
        </Button>
      </Card.Body>
    </Card>
  );
}


// REFERENCES:
// 1-code_matter (26AD) What are the most common ways to do conditional class names in React? Available at: https://www.reddit.com/r/reactjs/comments/15dbxte/what_are_the_most_common_ways_to_do_conditional/ (Accessed: May 26AD).

