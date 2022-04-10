create Table cart (
    customerId int not null,
    productId int not null,
    FOREIGN KEY (customerId) REFERENCES users(customerId)
    ON DELETE CASCADE
);
