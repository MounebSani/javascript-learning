const user = {
  username: "prime",
  password: "12345"
};

function login(username, password) {
  if (
    username === user.username &&
    password === user.password
  ) {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}

login("prime", "12345");
