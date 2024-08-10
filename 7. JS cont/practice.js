const arrCtoF = (arrC) => {
    const arrF = [];
    for (let i = 0; i < arrC.length; i++) {
        arrF.push(arrC[i] * 9 / 5 + 32);
    }
    return arrF;
};