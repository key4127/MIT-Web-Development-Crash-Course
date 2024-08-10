const modifyArray = (arr, transformFonc) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(transformFonc(arr[i]));
    }
    return newArr;
};

const cToF = (tempC) => {
    return tempC * 9 / 5 + 32;
};
const fToC = (tempF) => {
    return (tempF - 32) * 5 / 9;
};
const cToK = (tempC) => {
    return tempC + 273.15;
};