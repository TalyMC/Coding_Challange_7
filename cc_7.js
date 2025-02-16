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