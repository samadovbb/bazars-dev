use bazars;
drop procedure if exists sp_sign;
create procedure sp_sign(in p_phoneNumber varchar(13), in p_code varchar(4))
begin
    declare customer_id varchar(8) default (select CustomerID from bazars.Customer where PhoneNumber = p_phoneNumber);
    declare attempt_id varchar(8) default (UPPER(LEFT(UUID(), 8)));
    if customer_id is null
    then
        insert into bazars.Customer (ChannelID, PhoneNumber, StatusID)
        values ('7AE41B6F', p_phoneNumber, '7A082603');
    end if;

    insert into bazars.Attempts(AttemptID, PhoneNumber, Code)
    values (attempt_id, p_phoneNumber, p_code);

    select attempt_id as attemptID, if(ImagePath is null or ImagePath = '/', 'user.png', ImagePath) as ImagePath from Customer where PhoneNumber = p_phoneNumber;
end;
