let arr5 = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let freqMap = {};
let maxCount = 0;
let mostFrequentElement = null;

arr5.forEach(num => {
    freqMap[num] = (freqMap[num] || 0) + 1;  // Count occurrences
    if (freqMap[num] > maxCount) {  // Track max frequency
        maxCount = freqMap[num];
        mostFrequentElement = num;
    }
});

console.log(`Most frequent element: ${mostFrequentElement}, Count: ${maxCount}`);