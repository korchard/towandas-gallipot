[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://img.shields.io/github/license/korchard/towandas-gallipot.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/korchard/towandas-gallipot.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/korchard/towandas-gallipot.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/korchard/towandas-gallipot.svg?style=social)

# TOWANDA'S GALLIPOT

## Description

_Duration: 2 Week Sprint_ // 70 HOURS

Towanda's Gallipot is an herbalist's apothecary. This site is the business page for Steph Peltier, as well as her virtual store. She is able to share information about herself, herbalism, her services, and products. Users are able to contact her, make appointments with her via email, and order items she has cultivated. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Screen Shot

![towanda's_gallipot](./public/images/ss1.png)
![towanda's_gallipot](./public/images/ss2.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [postgreSQL](https://www.postgresql.org/download/)
- [react-redux](https://redux.js.org/introduction/installation)
- [react-pdf](https://www.npmjs.com/package/react-pdf)
- [react-moment](https://www.npmjs.com/package/react-moment)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [react-filestack](https://www.npmjs.com/package/filestack-react)
- [PayPal](https://developer.paypal.com/docs/api/overview/)

## Installation 

1. Create a database named `towandas_gallipot`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Go to Filestack (https://www.filestack.com/) to retrieve an API. Place the API key in the .env file and name it `REACT_APP_FILESTACK_API_KEY`.
4. Create a unique password named `SERVER_SESSION_SECRET` in the .env file as well - this is for the user login authentication.
5. Inclued your email password in the .env file and name it `password` - this is for the nodemailer to receive emails.
6. Open up your editor of choice and run an `npm install`
7. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. User who is not logged in is able to view the landing page, information about the herbalist, the consultations page, which includes a printable PDF to send to the herbalist so she may follow-up with making an appointment. They may view the products page, as well as the contact page, which allows the user to send the herbalist an email.
2. Logged-in users are able to add items to their cart, to delete items from their cart and view their previous orders.
3. Admin/herbalist is able to view the entire site, and in addition, able to add products to the product list, including image upload, as well as edit and delete the products. 

## Built With

- react
- redux
- node.js
- express
- postgreSQL
- react-PDF
- react-moment
- sweetalert
- nodemailer
- passport
- filestack-react API
- PayPayl API

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Acknowledgement
Thank you to my peers, for being my coding buddies, for supporting me, and answering all my questions. Thank you to Steph Peltier for allowing me to exercise my creative decision making and providing me with the opportunity to create something that will be utilized for her business. Thank you to my amazing partner, Eddy, for keeping me sane during this process, and my sweet puppy, Sir David Attenbowwow, for keeping things cute. Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to my primary instructor, 
-[Mary Mossman](https://github.com/mbMosman)

My peers to went out of their way to offer support and coding input throughout this project.
-[Brady Baker]()
-[Carl Barfuss]()
-[Josie Fredericksen](https://github.com/freder48)
-[Steven Maloney](https://github.com/sdeda1us)
-[Jordan Newberry]()
-[James Posey]()

## Support
If you have suggestions or issues, please email me at [kimberly.a.orchard.@gmail.com].