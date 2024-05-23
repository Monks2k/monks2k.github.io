// JavaScript code for the Home Decor and Furnishings website


// Initialize the website when the page is loaded
window.onload = init;

// Define the dataset
const dataset = [
    { id: 1, title: "Living Room Decor", description: "Get inspired by our living room decor ideas" },
    { id: 2, title: "Kitchen Decor", description: "Explore our kitchen decor ideas" },
    { id: 3, title: "Bedroom Decor", description: "Discover our bedroom decor ideas" },
    //...
  ];
  
  // Function to search the dataset
  const searchDataset = (searchTerm) => {
    const searchResults = dataset.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    // Display the search results
    displaySearchResults(searchResults);
  };
  
  // Function to display the search results
  const displaySearchResults = (searchResults) => {
    searchResultsContainer.innerHTML = '';
    if (searchResults.length > 0) {
      searchResults.forEach((result) => {
        const resultHTML = `
          <div>
            <h3>${result.title}</h3>
            <p>${result.description}</p>
          </div>
        `;
        searchResultsContainer.innerHTML += resultHTML;
      });
    } else {
      searchResultsContainer.innerHTML = 'No results found';
    }
  };
  
  // Add event listener to the search input
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    searchDataset(searchTerm);
  });