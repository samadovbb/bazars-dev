use bazars_business;

create table vendors(
    id varchar(36) primary key default (uuid())
);

create table depot(
    id varchar(36) primary key default (uuid())
);

create table employees(
    id varchar(36) primary key default (uuid())
);
