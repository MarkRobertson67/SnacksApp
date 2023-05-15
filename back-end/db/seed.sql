\c snacks;


INSERT INTO snack (name, category, rating, calories, is_vegan, is_halal, is_favorite, image) VALUES
('Arepas Venezolanas from White Maize', 'Fast Food', 3, 309, false, false, true,'https://cdn.vox-cdn.com/thumbor/y9BNcQAu_xeeasDxBlKxk2sg0V4=/0x0:5966x3977/1820x1213/filters:focal(2506x1512:3460x2466):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69959480/VICTA_EATER_AT_HOME_VENEZUELAN_AREPAS__1.0.jpg'), 
('Taco Bell Crunchwrap Supreme from Taco Bell', 'Fast Food', 2, 380, false, false, true, 'https://www.theslowroasteditalian.com/wp-content/uploads/2021/12/Taco-Bell-Crunchwrap-Supreme-4979970.jpg'), 
('Haagen Daaz Churro Ice Cream', 'Sweets', 4, 250, false, false, true, 'https://i5.peapod.com/c/9S/9SPB2.png'), 
('Haribo GoldBears', 'Candy', 4, 473, false, false, true,'https://m.media-amazon.com/images/I/61FIqNYS5WL._AC_.jpg'), 
('Cubano from my Cuban Spot ', 'Fast Food', 3, 1170, false, false, true, 'https://www.nycgo.com/images/uploads/My-Cuban-Spot-Caroll-Gardens-Brooklyn-Courtesy.jpg'), 
('Wendys Double Baconator', 'Fast Food', 3, 1150, false, false, true, 'https://www.chicagotribune.com/resizer/pf6g1uWBsy3Bsa0SJFOMVs7Cm18=/1024x0/filters:format(jpg):quality(70)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/TWV53YKAAJBUZC4HUN2ATQUJOU.jpg'),   
('Baklava Cheesecake from Oais Cafe','sweets', 5, 897, true, false, true, 'https://cdn.shopify.com/s/files/1/0158/6308/7152/products/8BED8990-DD82-414C-AE03-B35B5FB44816.jpg?v=1656192643&width=1080'),  
('Frankies Souvlaki platter', 'Good eats', 4, 890, true, false, false, 'https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/32958e5e475439ec008da784fe951bb6-w2880-bf_mavykd'),   
('Magnolia Bakery Banana Pudding', 'Sweets', 3, 987, false, true, true, 'https://cdn.shopify.com/s/files/1/0565/9757/7916/products/ClassicBananaPudding_fbafb0e3-72fb-4bec-bcc5-936dcf64ecd0_1194x.jpg?v=1660586000'),  
('Spicy Oxtail from Cut and Slices', 'Pizza', 5, 566, true, false, true, 'https://cdn.vox-cdn.com/thumbor/NAAxcKULjq0XaG6OFaeuA3_AZYA=/0x0:4031x3023/1720x0/filters:focal(0x0:4031x3023):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23353877/oxtail_two.jpg');


INSERT INTO review (title, reviewer, content , snack_id) VALUES
('Best Snack Ever', 'John', 'This is the best snack ever', 1),
('Worst Snack Ever', 'Jane', 'This is the worst snack ever', 2),
('Meh Snack', 'Joe', 'This is a meh snack', 3),
('Great Snack', 'Jill', 'This is a great snack', 4),
('Good Snack', 'Jack', 'This is a good snack', 5);

