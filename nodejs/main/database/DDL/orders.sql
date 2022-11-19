use bazars_orders;

create table orders(
    id varchar(36) primary key default (uuid())
);

create table order_details(
    id varchar(36) primary key default (uuid())
);

create table order_payment(
    id varchar(36) primary key default (uuid())
);