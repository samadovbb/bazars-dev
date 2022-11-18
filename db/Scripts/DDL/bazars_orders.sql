use bazars_orders;

drop table if exists Orders;
create table Orders(
            OrderID varchar(8) not null default (UPPER(LEFT(UUID(), 8)))
);

drop table if exists OrderDetails;
create table OrderDetails(
    OrderID varchar(8) not null default (UPPER(LEFT(UUID(), 8)))
);