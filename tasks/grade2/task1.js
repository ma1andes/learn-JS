const password = '-_A';

if (password.length >= 4 && (password.includes("-") || password.includes("_"))) {
    console.log('Пароль подходит');
} else {
    console.log("Пароль не подходит");
}
