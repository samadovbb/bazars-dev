use bazars_business;

drop table if exists Vendors;
create table Vendors(
                        VendorID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        Login varchar(15) not null,
                        Password varchar(100) not null,
                        PhoneNumber varchar(13) not null,
                        Email varchar(30) null,
                        RegisterDate datetime not null default current_timestamp(),
                        LastOnline datetime not null default current_timestamp()
);

drop table if exists RegisterInfo;
create table RegisterInfo(
                        FounderID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        Personality enum('entity', 'person'),
                        Firstname varchar(30) not null,
                        Lastname varchar(30) not null,
                        MiddleName varchar(30) null,
                        STIR varchar(20) not null,
                        PIN varchar(20) not null,
                        CertificateFile varchar(100) null,
                        CertificateNumber varchar(10) null,
                        IFUTCode varchar(10) not null,
                        Address varchar(30) null,
                        RegisterDate datetime not null default current_timestamp()
);

drop table if exists VendorInfo;
create table VendorInfo(
                        InfoID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        VendorID varchar(8),
                        Firstname varchar(30) not null,
                        Lastname varchar(30) not null,
                        MiddleName varchar(30) null,
                        BirthDate datetime
);

drop table if exists Invoices;
create table Invoices(
                      InvoiceID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                      BankName varchar(30) not null,
                      MFO varchar(20) not null,
                      InvoiceNumber varchar(20),
                      InvoiceName varchar(20),
                      VendorID varchar(8),
                      AddedDate datetime not null default current_timestamp()
);

drop table if exists Attempts;
create table Attempts(
                         AttemptID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                         PhoneNumber varchar(13) not null,
                         Code varchar(4) not null,
                         Attempts int default 1 not null,
                         AttemptTime datetime default current_timestamp(),
    -- keys
                         primary key (AttemptID)
);

drop table if exists Depot;
create table Depot(
                        DepotID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        DepotName varchar(20) not null,
                        Location varchar(20) not null,
                        Description varchar(50),
                        Status enum('active', 'passive'),
                        VendorID varchar(8)
);

Create table Product(
                        ProductID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        SubcategoryID varchar(8),
                        DepotID varchar(8),
                        MeasurementID varchar(8),
                        Quantity float,
                        OriginCountry varchar(20),
                        VAT enum('without', 0.15) not null,
                        ProductName varchar(30) not null,
                        Cost float not null,
                        Delivery varchar(100),
                        PaymentType varchar(40),
                        Discount float,
                        BrandID varchar(8),
                        Barcode varchar(30),
                        Weight float,
                        Height float,
                        Length float,
                        Breath float,
                        Status enum('frozen', 'active')
);

create table ProductFiles(
                        ProductImageID varchar(8) not null default (UPPER(LEFT(UUID(), 8))),
                        FilePath varchar(100),
                        FileType enum('image', 'video'),
                        ProductID varchar(8)
);