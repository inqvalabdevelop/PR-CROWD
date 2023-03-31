export const donationQueries = {
    Donations:"SELECT * FROM Donations INNER JOIN Funding ON Donations.IdDonation = Funding.IdFunding",
}