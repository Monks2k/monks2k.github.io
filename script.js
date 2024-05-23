// JavaScript code for the Home Decor and Furnishings website

const dataset = [
  { id: 1, title: "Living Room Decor", description: "Get inspired by our living room decor ideas" },
  { id: 2, title: "Kitchen Decor", description: "Explore our kitchen decor ideas" },
  { id: 3, title: "Bedroom Decor", description: "Discover our bedroom decor ideas" },
  //...
];

// Function to search the dataset
const filterDatasetBySearchTerm = (searchTerm) => {
  const filteredResults = dataset.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || descriptionMatch;
  });

  // Display the filtered results
  displayFilteredResults(filteredResults);
};

// Function to display the filtered results
const displayFilteredResults = (filteredResults) => {
  searchResultsContainer.innerHTML = '';
  if (filteredResults.length > 0) {
      filteredResults.forEach((result) => {
          const resultHTML = `
              <div>
                  <h3>${result.title}</h3>
                  <p>${result.description}</p>
              </div>
          `;
          searchResultsContainer.insertAdjacentHTML('beforeend', resultHTML);
      });
  } else {
      searchResultsContainer.innerHTML = '<p>No results found</p>';
  }
};