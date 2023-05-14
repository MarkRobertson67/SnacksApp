\c snacks;


INSERT INTO snack (name, category, rating, calories, is_vegan, is_halal, is_favorite) VALUES
('Pizza Hut Big New Yorker', 'Fast Food', 3, 309, false, false, true), 
('Taco Bell Chili Chese Burrito', 'Fast Food', 2, 380, false, false, true), 
('Skittles', 'Candy', 4, 250, false, false, true), 
('Haribo GoldBears', 'Candy', 4, 473, false, false, true), 
('Burger King', 'Fast Food', 3, 1170, false, false, true), 
('Wendys Double Baconator', 'Fast Food', 3, 1150, false, false, true),   
('Godiva Milk Chocolate Decadence','Candy', 5, 897, true, false, true),  
('Orville Reddenbachers Movie Theater Butter', 'Snacks', 4, 890, true, false, false),   
('Oats of Honey Special Maple', 'Snacks', 3, 987, false, true, true),  
('L-industrie pepperoni superb', 'Fast Food', 5, 566, true, false, true);


INSERT INTO review (title, reviewer, content , snack_id) VALUES
('Best Snack Ever', 'John', 'This is the best snack ever', 1),
('Worst Snack Ever', 'Jane', 'This is the worst snack ever', 2),
('Meh Snack', 'Joe', 'This is a meh snack', 3),
('Great Snack', 'Jill', 'This is a great snack', 4),
('Good Snack', 'Jack', 'This is a good snack', 5);

