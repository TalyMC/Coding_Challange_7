//Task 1 Function Declaration
function calculateInvoice(subtotal, taxRate, discount) {
    return (subtotal + (subtotal * taxRate)) - discount
};//Function to calculate final invoice discount

console.log (`Total Invoice: $${calculateInvoice(100, 0.08, 5).toFixed(2)}`); //Output: Total Invoice: $103.00
console.log (`Total Invoice: $${calculateInvoice(500, 0.1, 20).toFixed(2)}`);//Output: Total Invoice: $530.00