-- DROP TABLE IF EXISTS visited_countries, users;

-- CREATE TABLE users(
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(15) UNIQUE NOT NULL,
-- 	color VARCHAR(15)
-- );

-- CREATE TABLE visited_countries(
-- 	id SERIAL PRIMARY KEY,
-- 	country_code CHAR(2) NOT NULL , 
-- 	user_id INTEGER REFERENCES users(id)
-- );

-- INSERT INTO users (name, color)
-- VALUES ('Shardendu', 'teal'), ('Mishra', 'powderblue');

-- SELECT * FROM visited_countries,users;