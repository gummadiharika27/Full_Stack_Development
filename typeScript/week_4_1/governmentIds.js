// Namespace for handling citizen document verification
var CitizenDocuments;
(function (CitizenDocuments) {
    // Private constant
    const voterIdDigits = 12;
    // Function to verify Voter ID
    function checkVoterID(idNumber) {
        return /^[0-9]+$/.test(idNumber) && idNumber.length === voterIdDigits;
    }
    CitizenDocuments.checkVoterID = checkVoterID;
    // Function to verify Driving License Number
    function checkLicense(license) {
        const licensePattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        return licensePattern.test(license.toUpperCase());
    }
    CitizenDocuments.checkLicense = checkLicense;
    // Nested namespace for tax calculation
    let Billing;
    (function (Billing) {
        const gstRate = 0.18;
        function findGST(price) {
            return price * gstRate;
        }
        Billing.findGST = findGST;
    })(Billing = CitizenDocuments.Billing || (CitizenDocuments.Billing = {}));
})(CitizenDocuments || (CitizenDocuments = {}));
// ---------------- Main Program ----------------
const voterNumber = "123456789012";
const licenseNumber = "ABCDE1234F";
console.log("Voter ID Valid :", CitizenDocuments.checkVoterID(voterNumber));
console.log("License Valid  :", CitizenDocuments.checkLicense(licenseNumber));
const amount = 2500;
const gstValue = CitizenDocuments.Billing.findGST(amount);
console.log(`GST for ₹${amount} = ₹${gstValue}`);
export {};
