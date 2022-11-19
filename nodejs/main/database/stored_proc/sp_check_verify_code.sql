use bazars;
create procedure sp_check_verify_code(in p_attemptID varchar(8), in p_code varchar(4))
begin
    select true as res from bazars.Attempts a
                                right join bazars.Customer c on c.PhoneNumber = a.PhoneNumber
    where AttemptID = p_attemptID
      and `Code` = p_code
      and current_timestamp() <= date_add(AttemptTime,interval 90 second);
end;