// Show current time in status bar and main clock
function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  document.getElementById("status-time").textContent = timeString;
  document.getElementById("time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// Charging toggle
let charging = false;
function toggleCharging() {
  charging = !charging;
  const icon = document.getElementById("chargingIcon");
  icon.classList.toggle("hidden", !charging);
}

// Password system
let enteredPassword = "";
const correctPassword = "1234"; // change as needed

function showPassword() {
  document.getElementById("openArea").classList.add("hidden");
  document.getElementById("passwordArea").classList.remove("hidden");
}

function pressKey(num) {
  enteredPassword += num;
  document.getElementById("passwordDisplay").textContent = "*".repeat(enteredPassword.length);
}

function clearPassword() {
  enteredPassword = enteredPassword.slice(0, -1);
  document.getElementById("passwordDisplay").textContent = "*".repeat(enteredPassword.length);
}

function checkPassword() {
  if (enteredPassword === correctPassword) {
    document.getElementById("passwordArea").classList.add("hidden");
    document.getElementById("appsArea").classList.remove("hidden");
    document.getElementById("error").textContent = "";
  } else {
    document.getElementById("error").textContent = "Incorrect password!";
    enteredPassword = "";
    document.getElementById("passwordDisplay").textContent = "";
  }
}

// Open apps
function openApp(appName) {
  alert(`Opening ${appName}...`);
}