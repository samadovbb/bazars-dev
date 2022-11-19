use bazars_products;

insert into bazars_products.Catalog(CatalogID,CatalogName)
values ('9FD9676A','Foods');

insert into bazars_products.Categories(CategoryID,CatalogID,CategoryName)
values ('FC9E67FC','9FD9676A', 'Vegetables'),
       ('FC9E75DA','9FD9676A', 'Groceries'),
       ('FC9E79EE','9FD9676A', 'Fruits'),
       ('FC9E7C42','9FD9676A', 'Dairy'),
       ('FC9E7E0D','9FD9676A','Sea Food'),
       ('FC9E7F6C','9FD9676A','Fast foods'),
       ('FC9E8116','9FD9676A','Drinks'),
       ('FC9E857E','9FD9676A','Meats'),
       ('FC9E8748','9FD9676A','Fishes'),
       ('FC9E88FB','9FD9676A', 'Dry foods');

INSERT INTO bazars_products.Subcategories (SubcategoryID, CategoryID, Subcategory, CreatedDate)
VALUES ('E2B5AEBD', 'FC9E67FC', 'Carrot', '2022-10-26 11:16:33')
     , ('E30C6773', 'FC9E67FC', 'Broccoli', '2022-10-26 11:16:34')
     , ('E36F9723', 'FC9E67FC', 'Asparagus', '2022-10-26 11:16:35')
     , ('E3CF4094', 'FC9E67FC', 'Cauliflower', '2022-10-26 11:16:35')
     , ('E42BE1B7', 'FC9E67FC', 'Cucumber', '2022-10-26 11:16:36')
     , ('E4ACF75F', 'FC9E67FC', 'Eggplant', '2022-10-26 11:16:37')
     , ('E506D7EE', 'FC9E67FC', 'Green Pepper', '2022-10-26 11:16:37')
     , ('E583E8D7', 'FC9E67FC', 'Lettuce', '2022-10-26 11:16:38')
     , ('E5DAA4F1', 'FC9E67FC', 'Mushrooms', '2022-10-26 11:16:39')
     , ('E6434116', 'FC9E67FC', 'Onion', '2022-10-26 11:16:39')
     , ('E69FA6EC', 'FC9E67FC', 'Potato', '2022-10-26 11:16:40')
     , ('E6FE661A', 'FC9E67FC', 'Pumpkin', '2022-10-26 11:16:41')
     , ('E759CD8D', 'FC9E67FC', 'Tomato', '2022-10-26 11:16:41')
     , ('E7B745EE', 'FC9E67FC', 'Beetroot', '2022-10-26 11:16:42')
     , ('E8091355', 'FC9E67FC', 'Zucchini', '2022-10-26 11:16:42')
     , ('E87165FD', 'FC9E67FC', 'Radish', '2022-10-26 11:16:43')
     , ('E8CF6CC3', 'FC9E67FC', 'Artichoke', '2022-10-26 11:16:44')
     , ('E93109F6', 'FC9E67FC', 'Cabbage', '2022-10-26 11:16:44')
     , ('E98F90D2', 'FC9E67FC', 'Celery', '2022-10-26 11:16:45')
     , ('EA073588', 'FC9E67FC', 'Parsley', '2022-10-26 11:16:46');
