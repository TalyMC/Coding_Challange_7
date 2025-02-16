//Task 1 Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    return ((subtotal + (subtotal * taxRate)) - discount).toFixed(2)
};//Function to calculate final invoice discount

console.log (`Total Invoice: $${calculateInvoice(100, 0.08, 5)}`); //Output: Total Invoice: $103.00
console.log (`Total Invoice: $${calculateInvoice(500, 0.1, 20)}`);//Output: Total Invoice: $530.00

//Task 2 Function Expression
function calculateHourlyWage(salary, hoursPerWeek) {
    return (salary / (hoursPerWeek * 52)).toFixed(2)
}// Function that calculates hourly wages

console.log(`Hourly Wages: $${calculateHourlyWage(52000, 40)}`)//Output: Hourly Wages: $25.00
console.log(`Hourly Wages: $${calculateHourlyWage(75000, 35)}`)//Output: Hourly Wage: $41.21

//Task 3 Arrow Function
let calculateLoyaltyDiscount = (amount, years) => {
    let discount; 
    if (years >= 5) { 
        discount = amount * 0.15; // 15% discount
    } else if (years >= 3) { 
        discount = amount * 0.1; // 10% discount 
    } else if (years < 3) {
        discount = amount * 0.05; // 5% discount 
    }
    return (amount - discount).toFixed(2); 
    // subtracting the amount in the test data by the calculated discount 
};

console.log(`Discounted Price: $${calculateLoyaltyDiscount(100, 6)}`); // Expected output: "Discounted Price: $85.00"
console.log(`Discounted Price: $${calculateLoyaltyDiscount(200, 2)}`); // Expected output: "Discounted Price: $190.00"

//Task 4 Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) {
    let rates = 0;
    if (location === "USA") {
        rates = 5 + (weight * 0.5);
    } else if (location === "Canada") {
        rates = 10 + (weight * 0.7);
    }
    if (expedited) rates += 10;
    return rates
};//Function to calculate the shipping cost

console.log(`Shipping Cost: $${calculateShippingCost(10, "USA", true)}`)//Output: Shipping Cost $20
console.log(`Shipping Cost: $${calculateShippingCost(5, "Canada", false)}`)// Output: Shipping Cost $13.5

//Task 5 Returning Value
function calculateLoanInterest(principal, rate, years) {
    const interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`);
    
    return interest;
};//function to calculate intrest

calculateLoanInterest(1000, 0.05, 3); // Output: Total Interest: $150.00
calculateLoanInterest(5000, 0.07, 5); // Output: Total Interest: $1750.00

//Task 6 