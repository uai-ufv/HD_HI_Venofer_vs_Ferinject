(function () {
  const PASSWORD = atob("ZmVycml0aW5h==");
  /* const KEY = "auth_" + location.pathname; */
  const KEY = "auth_ok"

  if (sessionStorage.getItem(KEY) === "true") return;

  const user = prompt("Introduce la contraseña:");

  if (user !== PASSWORD) {
    document.documentElement.innerHTML = "<h2>Acceso denegado</h2>";
    throw new Error("Unauthorized");
  }

  sessionStorage.setItem(KEY, "true");
  /* localStorage.setItem(KEY, "true"); */
})();
