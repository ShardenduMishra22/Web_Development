-- create table student(
-- 	id serial primary key,
-- 	first_name text,
-- 	last_name text
-- );

-- create table contact_detail(
-- 	id integer references student(id) unique not null,
-- 	tel text,
-- 	address text
-- );


-- also written as--
-- CREATE TABLE student (
--     id serial PRIMARY KEY,
--     first_name text,
--     last_name text
-- );

-- CREATE TABLE contact_detail (
--     id integer UNIQUE NOT NULL,
--     tel text,
--     address text,
--     FOREIGN KEY (id) REFERENCES student(id)
-- );

-- insert into student (first_name,last_name)
-- values('Shardendu','Mishra');

-- insert into contact_detail (id,tel,address)
-- values(1,9988776655,'9933 Kanpur Malum Hai Naa');

-- select * from student
-- join contact_detail on student.id = contact_detail.id;

-- select * from student,contact_detail; 

-- -------------------------------------------------------------------

-- CREATE TABLE student2 (
--     id serial PRIMARY KEY,
--     first_name text,
--     last_name text
-- );

-- CREATE TABLE contact_detail2 (
--     id integer UNIQUE NOT NULL,
--     tel text,
--     address text,
--     FOREIGN KEY (id) REFERENCES student2(id)
-- );

-- insert into student2 (id,first_name,last_name)
-- values(2,'Shardendu1','Mishra1');

-- insert into contact_detail2 (id,tel,address)
-- values(3,9911776655,'9911 Kanpur Malum Hai Naa');

-- select * from student2
-- join contact_detail2 on student2.id = contact_detail2.id;

-- select * from student2,contact_detail2; 

-- ERROR:  Key (id)=(3) is not present in table "student2".insert or update on table "contact_detail2" violates foreign key constraint "contact_detail2_id_fkey" 

-- ERROR:  insert or update on table "contact_detail2" violates foreign key constraint "contact_detail2_id_fkey"
-- SQL state: 23503
-- Detail: Key (id)=(3) is not present in table "student2".

-- -------------------------------------------------------------------

-- CREATE TABLE student3 (
--     id serial PRIMARY KEY,
--     first_name text,
--     last_name text
-- );

-- CREATE TABLE contact_detail3 (
--     id integer UNIQUE NOT NULL,
--     tel text,
--     address text,
--     FOREIGN KEY (id) REFERENCES student2(id)
-- );

-- insert into student2 (id,first_name,last_name)
-- values(1,'Shardendu','Mishra');

-- insert into contact_detail2 (id,tel,address)
-- values(1,9911776655,'9911 Kanpur Malum Hai Naa');

-- select * from student2
-- join contact_detail2 on student2.id = contact_detail2.id;

-- select * from student2,contact_detail2;


-- ERROR:  Key (id)=(1) already exists.duplicate key value violates unique constraint "student2_pkey" 

-- ERROR:  duplicate key value violates unique constraint "student2_pkey"
-- SQL state: 23505
-- Detail: Key (id)=(1) already exists.
-- ERROR:
	
-- 	Key (id)=(1) already exists.duplicate key value violates unique constraint "student2_pkey" 

-- ERROR:  duplicate key value violates unique constraint "student2_pkey"
-- SQL state: 23505
-- Detail: Key (id)=(1) already exists.