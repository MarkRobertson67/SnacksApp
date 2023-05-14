\c snacks;


INSERT INTO snack (name, category, rating, calories, is_vegan, is_halal, is_favorite, photo) VALUES
('Wendys Double Baconator', 'Fast Food', 3, 1150, false, false, true, 'assets/BurgerKing.png'),   
('Godiva Milk Chocolate Decadence','Candy', 5, 897, true, false, true),  
('Orville Reddenbachers Movie Theater Butter', 'Snacks', 4, 890, true, false, false),   
('Oats of Honey Special Maple', 'Snacks', 3, 987, false, true, true),  
('L-industrie pepperoni superb', 'Fast Food', 5, 566, true, false, true);


INSERT INTO review (title, reviewer, content , if_favorite, snack_id) VALUES
('Best Snack Ever', 'John', 'This is the best snack ever', faslse, 1),
('Worst Snack Ever', 'Jane', 'This is the worst snack ever', true, 2),
('Meh Snack', 'Joe', 'This is a meh snack', true, 3),
('Great Snack', 'Jill', 'This is a great snack', false, 4),
('Good Snack', 'Jack', 'This is a good snack', true, 5);

