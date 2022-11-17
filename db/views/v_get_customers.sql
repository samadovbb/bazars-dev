use bazars;

drop view if exists v_get_customers;

create view v_get_customers as
    select
           CustomerID, ChannelID, StatusID, PhoneNumber, Firstname,
           Lastname, MiddleName, Gender, Email,LastOnline,
           AdditionalPhoneNumber, Description, RegisterDate,
           if(ImagePath='/' or ImagePath is null, 'user.png', ImagePath) as ImagePath,
           DATE_FORMAT(BirthDate, '%Y-%m-%d') as BirthDate,
           ifnull(concat(Firstname, ' ', Lastname, ' ', MiddleName), '') as FullName
    from bazars.Customer;