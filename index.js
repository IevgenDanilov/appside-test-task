function setToStore() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var key = "user";

  const user = {
    name: name,
    email: email,
  };

  window.localStorage.setItem(key, JSON.stringify(user));
}
