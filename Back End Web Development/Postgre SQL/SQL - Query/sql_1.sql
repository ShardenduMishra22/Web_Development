create table friends(
	id int primary key,
	name varchar(50),
	marks float,
	age int
);

insert into friends(id,name,marks,age)
values (1,'Shardendu Mishra',95,18),(2,'Shivika Mishra',99,21),(3,'Mishra',98,19);

select * from friends;

insert into friends(id)
values (69),(4),(5),(6);

update friends
set name = 'varsha bkl', marks = 90, age = 69
where id = 69; 

delete from friends
where id in (4, 5, 6);

select * from friends;
