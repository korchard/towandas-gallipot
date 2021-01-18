const express = require('express');
const pool = require('../modules/pool');
const handler = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
// const XMLParser = require('react-xml-parser');
const folger = require('../controller/folger');
// const axios = require('axios');

const fetch = require("node-fetch");

const USER_ID = process.env.USERID;
const BASE_URI =
  "https://secure.shippingapis.com/ShippingAPI.dllAPI=RateV4&amp&XML=";
const config = {
  headers: {
    "Content-Type": "text/xml",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET",
  },
  method: "get",
};

exports.handler = async function (event, context) {
    // The zipcode is sent by the frontend application. 
    // This is where we use it.
  
    // The xml variable is the string we are going to send to the
    // USPS to request the information
    const xml = `<RateV4Request USERID="${USER_ID}">
                <Revision>2</Revision>
                <Package ID="1ST">
                <Service>PRIORITY</Service>
                <ZipOrigination>55127</ZipOrigination>
                <ZipDestination>55407</ZipDestination>
                <Pounds>3</Pounds>
                <Ounces>2</Ounces>
                <Container>VARIABLE</Container>
                <Width>5</Width>
                <Length>7</Length>
                <Height>4</Height>
                </Package>
                </RateV4Request>`;
    
    
    try {
      // Using syntactic sugar (async/await) we send a fetch request
      // with all the required information to the USPS.
      const response = await fetch(`${BASE_URI}${xml}`, config);
      // We first check if we got a good response. response.ok is
      // saying "hey backend API, did we receive a good response?"
      if (!response.ok) {
        // If we did get a good response we store the response
        // object in the variable
        return { statusCode: response.status, body: response };
      }
      // Format the response as text because the USPS response is
      // not JSON but XML
      const data = await response.text();
      // Return the response to the frontend where it will be used.
      return {
        statusCode: 200,
        body: data,
      };
      // Error checking is very important because if we don't get a
      // response this is what we will use to troubleshoot problems
    } catch (err) {
      console.log("Error: ", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: err.message }),
      };
    }
  };

// GET ROUTE - for shipping cost
// const shipping = async(url) => {
//     return await folger(url)
//   }
  
// router.get('/shipping/:xml', (req, res) => {
//     console.log('xml params are', req.params.xml.name);
//     console.log('xml params are', req.params.xml.attributes);
//     console.log('xml params are', req.params.xml.children);
  
//     shipping(`/https://secure.shippingapis.com/ShippingAPI.dllAPI=RateV4&amp&XML=${req.params}`)
//     .then((results) => {
//       res.send(results);
//       console.log('result', results)
//     }).catch((error) => {
//       console.log('Bad news bears error in server GET route ---->', error)
//       res.sendStatus(500);
//     })
//   });

module.exports = handler;