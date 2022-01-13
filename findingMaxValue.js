let arrayNumber = [-3, 5, 1, 13, 2, 10];
let maxValue = arrayNumber[0];
let index = 0;
for (let i = 0; i < arrayNumber.length; i++) {
    if (maxValue < arrayNumber[i]) {
        maxValue = arrayNumber[i];
        index = i;
    }

}
document.write("maxValue is: " + maxValue + " at index " + index);