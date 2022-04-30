const input = document.getElementById('searchInput');
let searchQuery
let allResults = document.querySelectorAll(".name");
console.log(allResults[0].textContent);
input.addEventListener('keyup', function(e) {
    searchQuery = e.target.value.toLowerCase();
    console.log(searchQuery);
})


