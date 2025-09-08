document.addEventListener("DOMContentLoaded", () => {
  const locationInput = document.getElementById("location");
  const searchInput = document.getElementById("search");
  const searchBtn = document.querySelector(".search-btn");

  // Search logic
  function performSearch() {
    const location = locationInput.value.trim();
    const query = searchInput.value.trim();

    if (!location) {
      alert("Please enter your delivery location.");
      return;
    }
    if (!query) {
      alert(`Showing all restaurants near ${location}`);
    } else {
      alert(`Searching for "${query}" near ${location}`);
    }
  }

  // Button click
  searchBtn.addEventListener("click", performSearch);

  // Enter key on both inputs
  [locationInput, searchInput].forEach(input =>
    input.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        performSearch();
      }
    })
  );
});
