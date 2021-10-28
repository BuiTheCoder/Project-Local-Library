let argument = process.argv[1];
if (argument) {
    if (argument === "fact") {
        console.log("Here is a fun plant fact: Most plant life is found in the ocean!");
    } else {
        console.log("Sorry, I did not understand that command.");
    }
} else {
    console.log("You need to enter a command!");
}