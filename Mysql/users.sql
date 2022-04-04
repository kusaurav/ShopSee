create table users (
    customerId int AUTO_INCREMENT not NULL,
    firstName varchar(20) not null,
    lastName varchar(20) not null,
    userEmail varchar(30) not null,
    password varchar(20) not null,
    PRIMARY key(customerId),
    UNIQUE KEY(userEmail)
);



