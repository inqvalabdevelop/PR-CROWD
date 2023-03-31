export const categoryQueries = {
    getAllCategory: "SELECT * FROM Category",
    createNewCategory: "INSERT INTO Category (CategoryName, Description, ImageUrl, PublicIDImage) VALUES (@CategoryName, @Description,@ImageUrl,@PublicIDImage)",
    getCategoryById: "SELECT * FROM Category WHERE IdCategory = @id",
    deleteCategoryById: "DELETE FROM Category WHERE IdCategory = @id",
    getCountCategory: "SELECT COUNT(*) FROM Category",
    updateCategoryById: "UPDATE Category SET CategoryName = @CategoryName, Description = @Description, ImageUrl = @ImageUrl, PublicIDImage = @PublicIDImage WHERE IdCategory = @id",
    rankCategory: "SELECT TOP 10 * FROM Funding ORDER BY CurrentGoal DESC"
}