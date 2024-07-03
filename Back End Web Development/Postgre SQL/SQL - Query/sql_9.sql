-- CREATE TABLE student(
-- 	id INT PRIMARY KEY NOT NULL,
-- 	name TEXT,
-- 	age INT NOT NULL
-- );

-- INSERT INTO student(id,name,age)
-- VALUES (1,'Shardendu Mishra',19);

-- ALTER TABLE student
-- 	RENAME TO user1;

-- ALTER TABLE user1
-- 	ADD email TEXT;

-- CREATE TABLE example(
--     a INT,
--     b INT,
--     c INT,
--     UNIQUE(a, c)
-- );

-- DROP TABLE example;

-- CREATE TABLE example(
--     a INT,
--     b INT,
--     c INT
--     -- UNIQUE(a, c)
-- );

-- ALTER TABLE example
-- 	ADD UNIQUE(a,c);

-- INSERT INTO example(a,b,c)
-- VALUES (22,18,4);

-- INSERT INTO example(a,b,c)
-- VALUES (2,3,4);

-- UPDATE example 
-- SET c = 18  
-- WHERE a = 22;

-- SELECT * FROM example
-- ORDER BY a DESC;

-- SELECT * FROM example
-- ORDER BY a ASC;

-- DELETE FROM example 
-- WHERE a = 2;

-- SELECT * FROM example;