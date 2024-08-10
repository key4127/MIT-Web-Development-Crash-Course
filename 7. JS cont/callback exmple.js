// callback basic exmple
// https://docs.google.com/document/d/1FW8EJjRSXsxZ9f-txULaery6RL1H7hYnOBRgIVZf9cM/edit

/**
 * @param callback a function that takes in an integer and outputs anythin
 * @returns The output when providing the number 5 as an argument to the callback funtion.
 */
const myFunction = (callback) => {
    return callback(5);
};

const addOne = (number) => {
    return number + 1;
};
// note that we pass in the FUNCTION as a parameter!
console.log(myFunction(addOne)); // prints 6

const mult10 = (number) => {
    return number * 10;
}
console.log(myFunction(mult10));