CREATE PROCEDURE `inserirLogin` (in emailDigitado varchar(45), in senhaDigitada varchar(45))
	if NOT EXISTS(SELECT * from login where email = emailDigitado) then    
	   begin    
		 INSERT INTO login(email, ) VALUES (5,"2012-11-30",10)  ;
	   end;    
	else    
	   begin    
		 INSERT INTO login(email, senha) VALUES (emailDigitado,senhaDigitada)  ;
	   end;    
	end if;   
END
