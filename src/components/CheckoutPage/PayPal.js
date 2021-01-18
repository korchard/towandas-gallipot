import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function PayPal(props) {
  
  const paypal = useRef()

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, error) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: this.props.store.cart.name,
              amount: {
                currency_code: "USD",
                value: 100.00,
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log('sucessful order', order);
      },
      onError: (error) => {
        console.log(error);
      }
    }).render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default connect(mapStoreToProps)(PayPal);

