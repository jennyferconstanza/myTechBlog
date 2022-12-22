async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#emaillogin").value.trim();
  const password = document.querySelector("#passwordlogin").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".loginform")
  .addEventListener("submit", loginFormHandler);
