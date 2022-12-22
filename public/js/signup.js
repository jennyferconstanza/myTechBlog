async function signupFormHandler(event) {
  event.preventDefault();

  // getting data from the form
  const username = document.querySelector("#usernamesignup").value.trim();
  const email = document.querySelector("#emailsignup").value.trim();
  const password = document.querySelector("#passwordsignup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // check the response status
    if (response.ok) {
      console.log("Successful!");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signupform")
  .addEventListener("submit", signupFormHandler);
