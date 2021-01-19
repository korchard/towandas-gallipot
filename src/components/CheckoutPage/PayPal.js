import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function PayPal() {
  
  // const [checkout, setCheckout] = useState(false);
  const payment = useSelector(store => store.cart.paymentReducer) 
  const paypal = useRef()
  console.log('payment', payment);

  useEffect(() => {

    window.paypal.Buttons({
      createOrder: (data, actions, error) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Towanda's Gallipot",
              amount: {
                currency_code: "USD",
                value: payment,
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log('sucessful order', order);
        alert('Payment was successful!');
        // setCheckout(true);
      },
      onError: (error) => {
        console.log(error);
        alert('Payment was unsuccessful! Please try again or reach out to the herbalist.')
      }
    }).render(paypal.current)
  }, [])

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayPal;

