const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", () => {

        removeActiveClasses();

        panel.classList.add("active");

    });
});

const removeActiveClasses = () => {

    panels.forEach((panel) => {
        panel.classList.remove("active");

    });

};

document.addEventListener('DOMContentLoaded', function () {
  if (window.Appcues) {
    let user = getUserDetails(); // Fetch user details

    if (user && user.id) {
      Appcues.identify(user.id, {
        name: user.name || "Unknown User",
        email: user.email || "unknown@example.com",
        role: user.role || "GUEST_TESTER",
        lastLogin: user.lastLogin || new Date().toISOString(),
      });
    }

    // Track page visit
    Appcues.page();

    // Example event tracking
    trackUserEvents();
  }
});

// Function to fetch user details (Modify as per your application)
function getUserDetails() {
  return {
    id: localStorage.getItem("userId") || "guest",
    name: localStorage.getItem("userName") || "Guest",
    email: localStorage.getItem("userEmail") || "guest@example.com",
    role: localStorage.getItem("userRole") || "visitor",
    lastLogin: localStorage.getItem("lastLogin") || new Date().toISOString(),
  };
}

// Function to track user interactions
function trackUserEvents() {
  document.addEventListener("click", function (event) {
    if (event.target.matches(".purchase-button")) {
      Appcues.track("Clicked purchase button");
    }

    if (event.target.matches(".help-ticket-button")) {
      Appcues.track("Submitted help ticket", {
        url: "/support",
        article: "installation",
      });
    }
  });
}
