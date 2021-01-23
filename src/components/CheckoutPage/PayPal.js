import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import swal from 'sweetalert';

function PayPal(props) {
  
  const { checkout, sendOrder } = props; // checkout and sendOrder are passed from checkout page
  const payment = useSelector(store => store.cart.paymentReducer) // accessing payment total
  const paypal = useRef()
  const history = useHistory();

  useEffect(() => {

    window.paypal.Buttons({
      createOrder: (data, actions, error) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              description: "Towanda's Gallipot", // what will show up when user makes a purchase
              amount: {
                currency_code: "USD",
                value: payment, // payment total here
              }
            }
          ]
        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log('sucessful order', order);
        swal({ // sweetalert ensuring payment was processed
          title: "Your payment is being processed!",
          icon: "success",
          button: "Woot!",
        });
        checkout(); // closes the paypal modal
        history.push({ pathname:  "/checkout" }) // routes user to checkout confirmation page
        sendOrder(); // calls the sendOrder function to dispatch order to database
      },
      onError: (error) => {
        console.log(error);
        swal({ // sweetalert error message if payment was not processed
          title: "Your payment has not gone through yet!",
          text: "Please try again or reach out to the Herbalist!",
          icon: "error",
          button: "Thank you!",
        });
        checkout(); // closes the paypal modal
      }
    }).render(paypal.current)
  }, [checkout, history, payment, sendOrder])

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}

export default PayPal;

