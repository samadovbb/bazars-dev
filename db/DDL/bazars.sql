use bazars;

create table Channels(
                         ChannelID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                         Channel varchar(30) not null,
    -- keys
                         primary key (ChannelID)
);

create table Status(
                       StatusID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                       Status varchar(20) not null,
    -- keys
                       primary key (StatusID)
);

set foreign_key_checks = 0;
drop table if exists Customer;
set foreign_key_checks = 1;
create table Customer(
                        CustomerID varchar(8) default (UPPER(LEFT(UUID(), 8))) not null,
                        ChannelID varchar(30) not null,
                        StatusID varchar(8) default ('7A082603') not null,
                        PhoneNumber varchar(13) not null unique,
                        Firstname varchar(50) null,
                        Lastname varchar(50) null,
                        MiddleName varchar(50) null,
                        Gender enum('Male', 'Female') null,
                        BirthDate date null,
                        Email varchar(50) null,
                        AdditionalPhoneNumber varchar(13),
                        Description varchar(100) null,
                        ImagePath varchar(100) null,
                        RegisterDate datetime not null default current_timestamp(),
                        LastOnline datetime not null default current_timestamp(),

                        -- keys
                        primary key (CustomerID),
                        foreign key (ChannelID) references Channels(ChannelID),
                        foreign key (StatusID) references Status(StatusID)
);

drop table if exists Address;
create table Address(
                        AddressID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        CustomerID varchar(8) not null,
                        AddressName varchar(30) not null,
                        CountryName varchar(30) not null,
                        RegionName varchar(30) not null,
                        CityName varchar(30) not null,
                        Flat varchar(10)  null,
                        Entrance varchar(10)  null,
                        Floor varchar(10)  null,
                        Location varchar(16) not null,
                        -- keys
                        primary key(AddressID),
                        foreign key (CustomerID) references Customer(CustomerID) on delete cascade
);

create table Attempts(
                        AttemptID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        PhoneNumber varchar(13) not null,
                        Code varchar(4) not null,
                        Attempts int default 1 not null,
                        AttemptTime datetime default current_timestamp(),
                        -- keys
                        primary key (AttemptID)
);

drop table if exists Cards;
create table Cards(
                    CardID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                    CustomerID varchar(8),
                    CardName varchar(50),
                    CardNumber varchar(16),
                    ValidDate varchar(5),

                    primary key (CardID),
                    foreign key (CustomerID) references Customer(CustomerID)
);

# create table cashback(
#     id varchar(8) primary key default (UPPER(LEFT(UUID(), 8)))
# );