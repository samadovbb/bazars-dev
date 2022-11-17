use bazars_products;

set foreign_key_checks = 0;
drop table if exists Catalog;
create table Catalog(
        CatalogID varchar(8) default ((UPPER(LEFT(UUID(), 8)))),
        CatalogName varchar(30),
        CatalogImage varchar(100) default '/images/catalog/ced695e9bb1b54396406ce33aa70e0fd7251f8a03118a682cd815c6d.jpg',
        CreatedDate datetime default current_timestamp(),

        -- keys
        primary key (CatalogID)
);
set foreign_key_checks = 1;

drop table if exists Categories;
create table Categories(
    CategoryID varchar(8) default ((UPPER(LEFT(UUID(), 8)))),
    CatalogID varchar(8),
    CategoryName varchar(30),
    CategoryImage varchar(100),
    CreatedDate datetime default current_timestamp(),

    -- keys
    primary key (CategoryID),
    foreign key (CatalogID) references Catalog(CatalogID) on delete cascade
);


drop table if exists Subcategories;
create table Subcategories(
    SubcategoryID varchar(8) default (UPPER(LEFT(UUID(), 8))),
    CategoryID varchar(8),
    Subcategory varchar(30),
    SubcategoryImage varchar(100),
    CreatedDate datetime default current_timestamp(),
    -- keys
    primary key (SubcategoryID),
    foreign key (CategoryID) references Categories(CategoryID) on delete cascade
);
