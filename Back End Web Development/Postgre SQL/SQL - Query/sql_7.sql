-- -- DROP TABLE IF EXISTS visited_countries,users;

-- CREATE TABLE users(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(45) ,
-- 	color VARCHAR(45)
-- );

-- CREATE TABLE visited_countries(
-- 	id SERIAL PRIMARY KEY,
-- 	country_code CHAR(2) NOT NULL,
-- 	user_id INT REFERENCES users(id)
-- );

-- INSERT INTO users (name,color)
-- VALUES ('Shardendu','teal');

-- INSERT INTO users (name,color)
-- VALUES ('Mishra Ji','powderblue');

-- SELECT * FROM visited_countries
-- JOIN users ON users.id = visited_countries.user_id;

-- SELECT * FROM users;