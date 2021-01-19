import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

function PayPal(props) {
  
  const paypal = useRef()

  useEffect((props) => {
    // console.log('cart', props.store.cart.cartReducer);
    // console.log('total', props.store.cart.totalReducer);
    window.paypal.Buttons({
      createOrder: (data, actions, error) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Towanda's Gallipot",
              amount: {
                currency_code: "USD",
                value: props.store.cart.paymentReducer,
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

