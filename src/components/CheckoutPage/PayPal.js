import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import swal from 'sweetalert';

function PayPal(props) {
  
  const { checkout, sendOrder } = props;
  const payment = useSelector(store => store.cart.paymentReducer) 
  const paypal = useRef()
  const history = useHistory();
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
        // swal({
        //   title: "Payment successful!",
        //   text: "Thank you for supporting Towanda's Gallipot!",
        //   icon: "success",
        //   button: "Woot!",
        // });
        checkout();
        history.push({ pathname:  "/checkout" })
        sendOrder();
      },
      onError: (error) => {
        console.log(error);
        swal({
          title: "Your payment has not gone through yet!",
          text: "Please try again or reach out to the Herbalist!",
          icon: "error",
          button: "Thank you!",
        });
        checkout();
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

