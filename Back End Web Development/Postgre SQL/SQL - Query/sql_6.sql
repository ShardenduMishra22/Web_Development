-- -- Create the student table
-- CREATE TABLE student (
--   id SERIAL PRIMARY KEY,
--   first_name TEXT,
--   last_name TEXT
-- );

-- -- Create the contact_detail table for One-to-One relationship
-- CREATE TABLE contact_detail (
--   id INTEGER PRIMARY KEY REFERENCES student(id),
--   tel TEXT,
--   address TEXT
-- );

-- -- Insert data into student table
-- INSERT INTO student (first_name, last_name)
-- VALUES ('Angela', 'Yu');

-- -- Insert data into contact_detail table
-- INSERT INTO contact_detail (id, tel, address)
-- VALUES (1, '+123456789', '123 App Brewery Road');

-- -- Query to join student and contact_detail tables
-- SELECT *
-- FROM student
-- JOIN contact_detail ON student.id = contact_detail.id;

-- -- Create the homework_submission table for Many-to-One relationship
-- CREATE TABLE homework_submission (
--   id SERIAL PRIMARY KEY,
--   mark INTEGER,
--   student_id INTEGER REFERENCES student(id)
-- );

-- -- Insert data into homework_submission table
-- INSERT INTO homework_submission (mark, student_id)
-- VALUES (98, 1), (87, 1), (88, 1);

-- -- Query to join student and homework_submission tables
-- SELECT * FROM student
-- JOIN homework_submission ON student.id = homework_submission.student_id;

-- -- Query to select specific columns from student and homework_submission tables
-- SELECT student.id, student.first_name, student.last_name, homework_submission.mark
-- FROM student
-- JOIN homework_submission ON student.id = homework_submission.student_id;

-- SELECT * from student,homework_submission;
-- SELECT * from student,contact_detail;

-- -- Many to Many --
-- CREATE TABLE class (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(45)
-- );

-- CREATE TABLE enrollment (
--   student_id INTEGER REFERENCES student(id),
--   class_id INTEGER REFERENCES class(id),
--   PRIMARY KEY (student_id, class_id)
-- );

-- -- Data --
-- INSERT INTO student (first_name, last_name)
-- VALUES ('Jack', 'Bauer');

-- INSERT INTO class (title)
-- VALUES ('English Literature'), ('Maths'), ('Physics');

-- INSERT INTO enrollment (student_id, class_id ) VALUES (1, 1), (1, 2);
-- INSERT INTO enrollment (student_id ,class_id) VALUES (2, 2), (2, 3);

-- -- Join --
-- SELECT * FROM enrollment 
-- JOIN student ON student.id = enrollment.student_id
-- JOIN class ON class.id = enrollment.class_id;

-- SELECT student.id AS id, first_name, last_name, title FROM enrollment 
-- JOIN student ON student.id = enrollment.student_id
-- JOIN class ON class.id = enrollment.class_id;

-- -- ALIAS --
-- SELECT s.id AS id, first_name, last_name, title
-- FROM enrollment AS e
-- JOIN student AS s ON s.id = e.student_id
-- JOIN class AS c ON c.id = e.class_id;


-- SELECT s.id AS id, first_name, last_name, title
-- FROM enrollment e
-- JOIN student s ON s.id = e.student_id
-- JOIN class c ON c.id = e.class_id;