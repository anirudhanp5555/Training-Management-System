CREATE DATABASE tms_db;

USE tms_db;

create table users(
 user_id INT auto_increment PRIMARY KEY,
        email varchar(30),
        passwords varchar(20),
        roles varchar(5),
        fname varchar(20),
        lname varchar(20),
        phone varchar(10),
        created_at DATE
);

DESCRIBE users;

create table training(
course_id INT auto_increment PRIMARY KEY,
name varchar(20),
start_date DATE
);

DESCRIBE training;

create table user_training(

user_id INT,
course_id INT,
PRIMARY KEY (user_id, course_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
ON UPDATE CASCADE ON DELETE RESTRICT,

FOREIGN KEY (course_id) REFERENCES training(course_id)
ON UPDATE CASCADE ON DELETE RESTRICT

);

DESCRIBE user_training;


-- Admin user

insert into users values("anirudhan@gmail.com","password","admin","Ani","p","94939399299");

