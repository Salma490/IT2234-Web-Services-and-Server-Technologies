function getMaxPurchase(budget, keyboards, mice) {
    let maxAmount = -1;

    for (let k of keyboards) {
        for (let m of mice) {
            let total = k + m;
            if (total <= budget && total > maxAmount) {
                maxAmount = total;
            }
        }
    }

    return `Budget = ${budget}\nKeyboard prices = [${keyboards.join(",")}]\nMouse prices = [${mice.join(",")}]\nReturn ${maxAmount}\n`;
}

// Example usage
console.log(getMaxPurchase(60, [40, 50, 60], [5, 8, 12])); // Output: 58
console.log(getMaxPurchase(10, [3, 1], [5, 2, 8])); // Output: 9
console.log(getMaxPurchase(20, [30, 15], [8, 10, 6])); // Output: -1

