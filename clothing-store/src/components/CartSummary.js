// import React from 'react';
// import { Card, ListGroup, Button, Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
// //import paypalLogo from '../assets/paypal.svg';
// import './CartSummary.css';

// const CartSummary = ({ subTotal }) => {
//   const deliveryCharge = 8.50;
//   const total = subTotal + deliveryCharge;

//   return (
//     <Card>
//       <Card.Body>
//         <Card.Title className="section-title">TOTAL</Card.Title>
//         <ListGroup variant="flush">
//           <ListGroup.Item>Sub-total: €{subTotal.toFixed(2)}</ListGroup.Item>
//           <ListGroup.Item>Delivery: €{deliveryCharge.toFixed(2)}</ListGroup.Item>
//           <ListGroup.Item>Total: €{total.toFixed(2)}</ListGroup.Item>
//           <ListGroup.Item>
//             <Form.Group controlId="deliveryOptions">
//               <Form.Label>Delivery options</Form.Label>
//               <Form.Control as="select">
//                 <option>Standard Pick Up Point (€8.50)</option>
//                 <option>Express Home Delivery (€15.00)</option>
//               </Form.Control>
//             </Form.Group>
//           </ListGroup.Item>
//         </ListGroup>
//         <Button variant="primary" className="checkout-button">Check out</Button>
//         <div className="payment-icons mt-4">
//           <FontAwesomeIcon icon={faCcVisa} size="2x" className="mr-2" />
//           <FontAwesomeIcon icon={faCcMastercard} size="2x" className="mr-2" />
//           <FontAwesomeIcon icon={faCcAmex} size="2x" className="mr-2" />
//           <FontAwesomeIcon icon={faCcDiscover} size="2x" className="mr-2" />
//           <FontAwesomeIcon icon={faCcPaypal} size="2x" className="mr-2" />
//         </div>
//         <p className="mt-3">Got a discount code? Add it in the next step</p>
//       </Card.Body>
//     </Card>
//   );
// };

// export default CartSummary;
import React from 'react';
import { Card, ListGroup, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CartSummary.css';

const CartSummary = ({ cartItems, subTotal }) => {
  const deliveryCharge = 8.00;
  const total = subTotal + deliveryCharge;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, subTotal: total } });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="section-title">TOTAL</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Sub-total: €{subTotal.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item>Delivery: €{deliveryCharge.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item>Total: €{total.toFixed(2)}</ListGroup.Item>
          <ListGroup.Item>
            <Form.Group controlId="deliveryOptions">
              <Form.Label>Delivery options</Form.Label>
              <Form.Control as="select">
                <option>Standard Pick Up Point (€8.00)</option>
                <option>Express Home Delivery (€15.00)</option>
              </Form.Control>
            </Form.Group>
          </ListGroup.Item>
        </ListGroup>
        <Button variant="primary" className="checkout-button" onClick={handleCheckout}>
          Check out
        </Button>
        <div className="payment-icons mt-4">
          <FontAwesomeIcon icon={faCcVisa} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faCcMastercard} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faCcAmex} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faCcDiscover} size="2x" className="mr-2" />
          <FontAwesomeIcon icon={faCcPaypal} size="2x" className="mr-2" />
        </div>
        <p className="mt-3">Got a discount code? Add it in the next step</p>
      </Card.Body>
    </Card>
  );
};

export default CartSummary;
