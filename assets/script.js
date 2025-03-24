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

// Initialize Appcues when your app loads
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if Appcues is loaded
  if (window.Appcues) {
    // Identify the user (for testing purposes)
    Appcues.identify(
      "test-user-id", // A unique ID for the test user
      {
        // User properties (optional)
        name: "Test User",
        email: "mahamani.maran@akrity.com",
        // Add any other user properties you want to track
      }
    );
    
    // You can also add page events
    Appcues.page();
  }
});
