export const userQueries = {
    getAllUsers: "SELECT * FROM Users;",
    getUserById: "SELECT * FROM Users WHERE IdUser = @id",
    getTitleFollowedFundingByUserId: "SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN Followed_Funding FF ON FF.IdUser = U.IdUser LEFT JOIN Funding F ON FF.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY FF.IdUser, F.IdFunding, F.Title, F.FastDescription",
    getTitleOfFundingDonateByUserId: "	SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN Donations D ON D.IdUser = U.IdUser  LEFT JOIN Funding F ON D.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY  D.IdUser, F.IdFunding, F.Title, F.FastDescription",
    getTitleFundingByUserId: "	SELECT F.IdFunding , F.Title, F.FastDescription FROM Users U  LEFT JOIN User_Funding UF ON UF.idUser = U.IdUser LEFT JOIN Funding F ON UF.IdFunding = F.IdFunding WHERE U.IdUser = @id GROUP BY UF.idUser, F.IdFunding, F.Title, F.FastDescription",
    getCountFollowedByUserId:"SELECT COUNT(FF.IdUser) AS 'countFollowedFunding' FROM Users U LEFT JOIN Followed_Funding FF ON FF.IdUser = U.IdUser WHERE U.IdUser = @id GROUP BY FF.IdUser",
    getCountDonationsByUserId:"SELECT COUNT(D.IdUser) AS 'countDonationsFunding' FROM Users U LEFT JOIN Donations D ON D.IdUser = U.IdUser WHERE U.IdUser = @id GROUP BY  D.IdUser",
    getCountFundingsCreateByUserId:"SELECT COUNT(UF.idUser) AS 'countCreateFunding' FROM Users U LEFT JOIN User_Funding UF ON UF.idUser = U.IdUser WHERE U.IdUser = @id  GROUP BY UF.idUser",
    getUserDonateFunding: "SELECT idUser FROM Funding F INNER JOIN Donations D ON D.idFunding = F.idFunding WHERE F.IdFunding = @idFunding",
    getUserById: "SELECT U.IdUser,[Name],[Email],[PhoneNumber],[IdUserType],[LastName],[SecondLastName],U.RegisterDate,[UserName],[Address],[IdUsersImage] FROM Users U WHERE U.IdUser = @id GROUP BY U.IdUser,[Name],[Email],[PhoneNumber],[IdUserType],[LastName],[SecondLastName],U.RegisterDate,[UserName],[Address],[IdUsersImage]",
    getLoginUser: "SELECT IdUser, UserName FROM Users WHERE Email = @email AND [Password]= HashBytes('MD5',@password)",
    getUserCommandlist: "SELECT U.IdUser, U.Name , U.Email , U.PhoneNumber , UT.TypeUserName , U.LastName , U.SecondLastName , U.RegisterDate , U.LastUpdate , U.UserName , U.Address FROM Users U INNER JOIN UserType UT ON U.IdUserType = UT.IdUserType",
    getTypeUserById: "SELECT TypeUserName FROM Users U INNER JOIN UserType UT ON UT.IdUserType = U.IdUserType WHERE U.IdUser = @id;",
    changePassword: " UPDATE Users  SET Password = HASHBYTES('MD5', @newPassword)  ,Email = @email WHERE IdUser = @id",

    changeImageProfile: "UPDATE UI SET UI.UserImage = @newImageProfile FROM UserImage UI INNER JOIN Users U ON UI.IdImage = U.idUsersImage WHERE U.IdUser = @id",
    
    deleteUserById: "DELETE FROM Users WHERE IdUser = @id",
    updateUserById: "UPDATE Users SET [Name] = @name ,[PhoneNumber] = @phonenumber ,[LastName] = @lastname ,[SecondLastName] = @secondlastname ,[UserName] = @username ,[Address] = @address WHERE IdUser = @id",

    createNewUser: "INSERT INTO Users ([Name] ,LastName, Email, [Password], UserName,[IdUserType] ) VALUES (@name, @lastName, @email, HashBytes('MD5', @password), @username, 2)",
    
    createNewAdmin: "INSERT INTO Users ([Name], Email, [Password], PhoneNumber, IdUserType, LastName, SecondLastName, State, RegisterDate,UserName,Address) VALUES (@name, @email, HashBytes('MD5',@password), @phonenumber, 1, @lastname, @secondlastname, 1, CURRENT_TIMESTAMP, @username, @address)",

    getExistEmailVerification: "SELECT COUNT(IdUser) AS email FROM  Users WHERE email LIKE CONCAT(@email, '%')",

    setPasswordUpdate: "UPDATE Users SET [Password] = HASHBYTES('MD5', @password) WHERE Email = @email",

    setUserFollowedInsert: "INSERT INTO Followed_Funding ([IdUser] ,[IdFunding]) VALUES (@idUser ,@idFunding)"
}