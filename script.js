document.getElementById("filterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const price = document.getElementById("price").value;
  const color = document.getElementById("color").value;
  const brand = document.getElementById("brand").value;
  const size = document.getElementById("size").value;
  const engine = document.getElementById("engine").value;

  // Build the search query from the filters
  let query = '';

  if (brand) query += brand + ' ';
  if (color) query += color + ' ';
  if (size) query += size + ' ';
  if (engine) query += engine + ' ';
  if (price) query += 'price ' + price;

  // Trigger the Google Custom Search
  triggerGoogleSearch(query);
});

// Function to trigger the Google Custom Search using the query
function triggerGoogleSearch(query) {
  const searchEngine = document.querySelector('.gcse-search');
  
  // Initialize the Google Custom Search with the generated query
  searchEngine.innerHTML = `<div class="gcse-searchresults-only" data-query="${query}"></div>`;
  
  // Force a re-render of the search results with the new query
  window.location.href = `#results`;
}
