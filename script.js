document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const price = document.getElementById("price").value;
  const color = document.getElementById("color").value;
  const brand = document.getElementById("brand").value;
  const size = document.getElementById("size").value;
  const engine = document.getElementById("engine").value;

  // Here you would call the AI Web Search API and pass the filters
  // For demonstration, we'll use a fake API response
  const filteredResults = mockCarSearch({ price, color, brand, size, engine });

  displayResults(filteredResults);
});

// This is a mock function to simulate the results returned by an AI-powered API.
function mockCarSearch(filters) {
  // Mock data to simulate car listings
  const cars = [
    { brand: "Toyota", model: "Corolla", price: 15000, color: "Red", size: "Compact", engine: "Petrol" },
    { brand: "Ford", model: "Focus", price: 18000, color: "Blue", size: "Sedan", engine: "Diesel" },
    { brand: "BMW", model: "X5", price: 35000, color: "Black", size: "SUV", engine: "Electric" },
    { brand: "Ford", model: "Fiesta", price: 12000, color: "White", size: "Compact", engine: "Petrol" },
  ];

  // Filtering based on the selected values
  return cars.filter(car => {
    return (!filters.price || car.price <= filters.price) &&
           (!filters.color || car.color.toLowerCase() === filters.color) &&
           (!filters.brand || car.brand.toLowerCase() === filters.brand) &&
           (!filters.size || car.size.toLowerCase() === filters.size) &&
           (!filters.engine || car.engine.toLowerCase() === filters.engine);
  });
}

function displayResults(results) {
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  if (results.length === 0) {
    resultsSection.innerHTML = "<p>No cars found based on your filters.</p>";
    return;
  }

  results.forEach(car => {
    const carDiv = document.createElement("div");
    carDiv.classList.add("car-item");
    carDiv.innerHTML = `
      <h4>${car.brand} ${car.model}</h4>
      <p>Price: $${car.price}</p>
      <p>Color: ${car.color}</p>
      <p>Size: ${car.size}</p>
      <p>Engine: ${car.engine}</p>
    `;
    resultsSection.appendChild(carDiv);
  });
}
