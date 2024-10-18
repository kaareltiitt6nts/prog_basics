let accounts = {
    ["username"]: {
        ["password"]: "password"
    }
}

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
    username = prompt("Enter your username.")
    password = prompt("Enter your password.")

    let user = accounts[username]
    if (user) {
        let pass = user["password"]
        if (pass) {
            console.log("Welcome, " + username + "!")
            loggedIn = true
        }
    }
    else {
        console.log("User not found or password is wrong.")
    }
}
