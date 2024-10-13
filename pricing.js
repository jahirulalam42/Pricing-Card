document.addEventListener("DOMContentLoaded", () => {
  const monthlyPriceElements = document.querySelectorAll(".monthly-price");
  const yearlyPriceElements = document.querySelectorAll(".yearly-price");
  const monthlyButton = document.getElementById("monthly-button");
  const yearlyButton = document.getElementById("yearly-button");

  // Function to update button styles
  function updateButtonStyles(activeButton, inactiveButton) {
    activeButton.classList.add(
      "bg-slate-50",
      "border-slate-50",
      "text-black",
      "shadow-sm"
    );
    activeButton.classList.remove("border-transparent");
    inactiveButton.classList.remove(
      "bg-slate-50",
      "border-slate-50",
      "text-black",
      "shadow-sm"
    );
    inactiveButton.classList.add("border-transparent");
  }

  monthlyButton.addEventListener("click", () => {
    // Show monthly prices and hide yearly prices
    monthlyPriceElements.forEach((element) => {
      element.classList.remove("hidden");
    });
    yearlyPriceElements.forEach((element) => {
      element.classList.add("hidden");
    });

    // Update button styles
    updateButtonStyles(monthlyButton, yearlyButton);
  });

  yearlyButton.addEventListener("click", () => {
    // Show yearly prices and hide monthly prices
    yearlyPriceElements.forEach((element) => {
      element.classList.remove("hidden");
    });
    monthlyPriceElements.forEach((element) => {
      element.classList.add("hidden");
    });

    // Update button styles
    updateButtonStyles(yearlyButton, monthlyButton);
  });

  // Set the default view to monthly
  monthlyPriceElements.forEach((element) => element.classList.remove("hidden"));
  yearlyPriceElements.forEach((element) => element.classList.add("hidden"));

  // Initialize button styles
  updateButtonStyles(monthlyButton, yearlyButton);
});
