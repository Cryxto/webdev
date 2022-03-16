console.log("Hello there");
let input = prompt("Welcome to Holy Crown Bar, could you please enter your age?");
input = parseInt(input);
let age = input;
if (age >= 18) {
    alert("Enjoy !!");
    alert("Let's making account!!");
    input = prompt("enter username");
    let username = input;
    while (username.indexOf(' ') !== -1) {
        alert("Username cannot contain space!!");
        input = prompt("enter username");
        username = input;
    }
    alert("Good username!");
    input = prompt("enter password (no space and should be around 5-20 character)");
    let password = input;
    while (password.indexOf(' ') !== -1 || password.length > 20 || password.length < 5) {
        if (password.indexOf(' ') !== -1) {
            alert("Password cannot contain space!!")
        }
        else if (password.length > 20) {
            alert("Password should be less than or equal 20 characters!!")
        }
        else if (password.length < 5) {
            alert("Password should be more than or equal 5 characters!!")
        }
        else {
            alert("Password invalid");
        }
        input = prompt("enter password (no space and should be around 5-20 character)");
        password = input;
    }
    if (password.indexOf(' ') === -1 && password.length <= 20 && password.length >= 5){//THIS IF IS NOT NECESSARY 
        alert("Password valid!");//U CAN JUST USE ALERT BECAUSE THE PASSWORD IS ALREADY FULFIL THE RULES
    }
    input = prompt("Now verify your password");
    let passValidation = input;
    while(passValidation!==password){
        alert("Password not match!!")
        input = prompt("Now verify your password");
        passValidation=input ;
    }
    alert(`Welcome ${username} !`);
    if (age<22||age>=65){
        alert("You got free one shot of whiskey !");
    }
    else{
        alert("You got 40% discount !");
    }
    

} else {
    alert("Sorry, you are underage! Come when you are old enough!!");
}

