DROP TABLE "user";

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR (100) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	street_address VARCHAR(200) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(50) NOT NULL,
	zip INTEGER NOT NULL,
	phone_number VARCHAR(50),
	email_address VARCHAR(100) NOT NULL,
	administrator BOOLEAN DEFAULT false
);

DROP TABLE "product";

CREATE TABLE "product" (
	id SERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	description VARCHAR(400) NOT NULL,
	size VARCHAR(50) NOT NULL,
	cost DECIMAL(20, 2) NOT NULL,
	image_path VARCHAR(700) NOT NULL,
	type VARCHAR(200) NOT NULL,
	archived BOOLEAN DEFAULT false
);

DROP TABLE "order";

CREATE TABLE "order" (
	id SERIAL PRIMARY KEY,
	order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	user_id INT REFERENCES "user",
	product_cost DECIMAL(20, 2),
	shipping_cost DECIMAL(20, 2),
	total_cost DECIMAL(20, 2),
	shipped BOOLEAN DEFAULT false
);

DROP TABLE "cart";

CREATE TABLE "cart" (
	id SERIAL PRIMARY KEY,
	product_id INT REFERENCES "product",
	quantity INTEGER,
	total_cost DECIMAL(20, 2),
	user_id INT REFERENCES "user",
	order_completed BOOLEAN DEFAULT false
);

DROP TABLE "order_connection";

CREATE TABLE "order_connection" (
	id SERIAL PRIMARY KEY,
	cart_id INT REFERENCES "cart" NULL,
	order_id INT REFERENCES "order" NULL
);