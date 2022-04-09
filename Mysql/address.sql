CREATE Table address (   
    customerId int not null, 
    address varchar(150), 
    city varchar(30), 
    pincode int,
    state varchar(20),
    primary key(customerId)
);