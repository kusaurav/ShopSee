create table items (
    productId int AUTO_INCREMENT not null,
    product varchar(50) not null,
    description VARCHAR(100),
    price int not null,
    type varchar(20),
    PRIMARY KEY(productId),
    UNIQUE KEY(product)
); 

INSERT INTO items VALUES(1, "The Alchemist"," by Paulo Coelho",225,"book");
INSERT INTO items VALUES(default, "The English teacher"," by R.K. Narayan",170,"book");
INSERT INTO items VALUES(default, "Redmi 10 Prime"," Astral White 6 GB RAM 128 GB ROM",13999,"mobile");
INSERT INTO items VALUES(default, "Database Systems:The Complete Book"," by Garcia-Molina",1000,"book");
INSERT INTO items VALUES(default, "Samsung Galaxy S21 Ultra"," Phantom Black 12GB RAM 256GB ROM",99000,"mobile");
INSERT INTO items VALUES(default, "Samsung 192 L"," 2 Star Direct Cool Single Door Refrigerator",12999,"electronics");
INSERT INTO items VALUES(default, "Cricket Kit Bag"," Unique-Nylon Unique Army Red Printed",650,"sport");
INSERT INTO items VALUES(default, " Klapp IPL21 Series"," KCS-01 Kashmir Willow Cricket Kit ",3829,"sport");
INSERT INTO items VALUES(default, "Unisex Jaffa 22"," Cricket Shoes",1905,"shoes");
INSERT INTO items VALUES(default, "OPPO F19 Pro"," Fluid Black, 8GB RAM, 128GB Storage",23000,"mobile");
INSERT INTO items VALUES(default, "Whirlpool 190 L"," 3 Star Direct-Cool Single Door Refrigerator",13499,"electronics");
INSERT INTO items VALUES(default, "Men's Rayon T-Shirt"," Cotton Lining Digital Printed ",889,"cloth");

INSERT INTO items VALUES(default, "RCB  Jersey"," RED cricket Team 2022",359,"cloth");
INSERT INTO items VALUES(default, "OnePlus 9R 5G"," Carbon Black, 12GB RAM, 256 GB ROM",37999,"mobile");
INSERT INTO items VALUES(default, "Vector X"," Stealth Synthetic Football Shoes (Black-Grey)",1159,"shoes");
INSERT INTO items VALUES(default, "SLIVA Brazuca","Football (Multicolour) with Pump Free ",659,"sport");
INSERT INTO items VALUES(default, "OPPO A31"," Mystery Black, 6GB RAM, 128GB Storage",12899,"mobile");
INSERT INTO items VALUES(default, "AmazonBasics Smart LED TV"," 139cm (55 inch) 4K Ultra HD",34599,"electronics");
INSERT INTO items VALUES(default, "Hisense 564 L"," Inverter Frost-Free Side-by-Side Door Refrigerator",53499,"electronics");
INSERT INTO items VALUES(default, "Redmi Smart LED TV"," 80 cm (32 inch es) HD Ready",15499,"electronics");
INSERT INTO items VALUES(default, "Death: An Inside Story"," A book for all those who shall die by Sadhguru",359,"book");
INSERT INTO items VALUES(default, "Vivo Y21"," Diamond Glow 4 GB RAM 64 GB ROM",13999,"mobile");
INSERT INTO items VALUES(default, "Relentless: Gray Man 10"," by Mark Greaney",1259,"book");
INSERT INTO items VALUES(default, "Sierra six: Gray Man 11"," by Mark Greaney",1729,"book");
INSERT INTO items VALUES(default, "Think And Grow Rich"," by Napoleon Hill",1459,"book");
INSERT INTO items VALUES(default, "Rich Dad Poor Dad"," by Robert T. Kiyosaki",542,"book");
INSERT INTO items VALUES(default, "The Power of A Positive Attitude","  by Roger Fritz and Arthur R. Pell ",105,"book");
INSERT INTO items VALUES(default, " Irisign Eyes Talk"," Printed Half Sleeve Round Neck",459,"cloth");
INSERT INTO items VALUES(default, "Propper Tactical"," Shirt - Short Sleeve",7707,"cloth");
INSERT INTO items VALUES(default, "Bourge Loire-z126","Men's Running Shoes",729,"shoes");
INSERT INTO items VALUES(default, "SHOE DOG" , "A MEMORY BY THE CREATOR OF NIKE by PHIL KNIGHT",1404,"book");
INSERT INTO items VALUES(default, "HP Pavilion x360"," 8 GB RAM 512 GB SSD 10th Gen Intel Core i5",59999,"laptop");
INSERT INTO items VALUES(default, "SS Ikon"," Kashmir Willow Cricket Bat",1499,"sport");
INSERT INTO items VALUES(default, "Lenovo Ideapad 3","8 GB RAM 512 GB SSD 10th Gen Intel Core i5 ",52900,"laptop");
INSERT INTO items VALUES(default, "Swinger Cricket Ball"," ALUM TANNED (pack of 1)",500,"sport");