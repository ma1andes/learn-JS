function franction(a, b, n){
    const franctionA = Math.floor((a % 1) * Math.pow(10, n));
    const franctionB = Math.floor((b % 1) * Math.pow(10, n));

    console.log('Дробные части a:', franctionA);
    console.log('Дробные части b:', franctionB);

    console.log('Сравнение');
    console.log(`${franctionA} > ${franctionB}: ${franctionA > franctionB}`);
    console.log(`${franctionA} < ${franctionB}: ${franctionA < franctionB}`);
    console.log(`${franctionA} >= ${franctionB}: ${franctionA >= franctionB}`);
    console.log(`${franctionA} <= ${franctionB}: ${franctionA <- franctionB}`);
    console.log(`${franctionA} === ${franctionB}: ${franctionA === franctionB}`);
    console.log(`${franctionA} not= ${franctionB}: ${franctionA !== franctionB}`);
}

franction(13.123456789, 2.123, 5);
franction(13.890123, 2.891564, 2);
franction(13.890123, 2.891564, 3);