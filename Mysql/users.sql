create table users (
    customerId int AUTO_INCREMENT not NULL,
    firstName varchar(20) not null,
    lastName varchar(20) not null,
    userEmail varchar(30) not null,
    password varchar(20) not null,
    PRIMARY key(customerId),
    UNIQUE KEY(userEmail)
);

create Table cart (
    customerId int not null,
    productId int not null,
    FOREIGN KEY (customerId) REFERENCES users(customerId)
);

create table items (
    productId int AUTO_INCREMENT not null,
    product varchar(20) not null,
    price int not null,
    PRIMARY KEY(productId),
    UNIQUE KEY(product)
); 

