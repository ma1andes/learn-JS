function franctional(a, b, n){
    const franctionalA = Math.floor((a % 1) * Math.pow(10, n));
    const franctionalB = Math.floor((b % 1) * Math.pow(10, n));

    console.log(`Дробные части a:`, franctionalA);
    console.log(`дробные части b:`, franctionalB);

    console.log(`Проверка:`);

    console.log(`${franctionalA} < ${franctionalB}: ${franctionalA < franctionalB}`)
    console.log(`${franctionalA} > ${franctionalB}: ${franctionalA > franctionalB}`);
    console.log(`${franctionalA} <= ${franctionalB}: ${franctionalA <= franctionalB}`);
    console.log(`${franctionalA} >= ${franctionalB}: ${franctionalA >= franctionalB}`);
    console.log(`${franctionalA} === ${franctionalB}: ${franctionalA === franctionalB}`);
    console.log(`${franctionalA} not= ${franctionalB}: ${franctionalA !== franctionalB}`);
}

franctional(13.123456789, 2.123, 5);
franctional(13.890123, 2.891564, 2);
franctional(13.890123, 2.891564, 3);