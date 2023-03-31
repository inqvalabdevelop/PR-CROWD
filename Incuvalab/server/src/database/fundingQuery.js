export const fundingQueries = {
    getRackFundingTop3: "SELECT  TOP (3) * FROM Funding a INNER JOIN (SELECT IdFunding, MAX(Goal) AS rev FROM Funding GROUP BY IdFunding) b ON a.IdFunding = b.IdFunding AND a.Goal = b.rev WHERE  State  = 1 AND Aprove = 1",
    
    getAllFunding: "SELECT * FROM Funding WHERE State = 1 AND Aprove = 1",
    getCompleteFunding: "SELECT * FROM Funding WHERE CurrentGoal >= Goal AND State = 1 AND Aprove = 1",
    getAllNoAprobedFunding: "SELECT * FROM Funding WHERE State = 1 AND Aprove = 0",
    getDeletedFunding: "SELECT * FROM Funding WHERE State = 0",
    getAllFundingByCat: "SELECT * FROM Funding WHERE IdCategory = @id AND [State] = 1 AND Aprove = 1",
    getFundingByName: "SELECT * FROM Funding WHERE Title LIKE CONCAT('%',@search,'%') AND State  = 1 AND Aprove = 1",
    getFundingById: "SELECT IdFunding, Title,Question1,Question2,Question3,FastDescription,F.Description,FundingImage1,FundingImage2,FundingImage3,FundingVideo,SocialMedia,RegisterDate, f.IdCategory, C.CategoryName,Goal,CurrentGoal, AccountNumber FROM Funding F INNER JOIN Category C ON C.IdCategory = F.IdCategory WHERE IdFunding = @id",
    deleteFundingById: "DELETE FROM Funding WHERE IdFunding = @id",
    deleteFundingByLogical:"UPDATE Funding  SET State = 0 WHERE IdFunding  = @id",
    aproveFundingById:"UPDATE Funding  SET Aprove = 1 WHERE IdFunding  = @id",
    getCountFunding: "SELECT COUNT(*) FROM Funding",
    updateCategoryById: "UPDATE FUNDING SET Description = @funding WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC",
    createNewFunding: "INSERT INTO Funding(Title, Question1, Question2, Question3, FastDescription, Description, FundingImage1, FundingImage2, FundingImage3, FundingVideo, AccountNumber, SocialMedia, IdCategory, Goal) VALUES (@Title, @Question1, @Question2, @Question3, @FastDescription, @Description, @FundingImage1, @FundingImage2, @FundingImage3, @FundingVideo, @AccountNumber, @SocialMedia, @IdCategory, @Goal)",
    restoreFunding:"UPDATE Funding  SET State = 1, Aprove = 0 WHERE IdFunding  = @id",
    updateFunding:"UPDATE Funding SET [Title] = @Title ,[Question1] = @Question1 ,[Question2] = @Question2 ,[Question3] = @Question3,[FastDescription] = @FastDescription,[Description] = @Description,[FundingImage1] = @FundingImage1,[FundingImage2] = @FundingImage2,[FundingImage3] = @FundingImage3,[FundingVideo] = @FundingVideo,[AccountNumber] = @AccountNumber,[SocialMedia] = @SocialMedia,[IdCategory] = @IdCategory,[Goal] = @Goal WHERE IdFunding = @Id"
}