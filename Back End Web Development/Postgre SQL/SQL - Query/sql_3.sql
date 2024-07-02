create table visited_country(
	id serial primary key,
	country_code char(2) not null unique
);

