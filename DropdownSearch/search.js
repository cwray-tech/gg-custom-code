//Grab the list of trees.
const list = document.querySelector('#search-list');
// Grab the search bar.
const searchBar = document.forms['search'].querySelector('#search-input');

// Filter trees
searchBar.addEventListener('keyup', function (event) {
  const term = event.target.value.toLowerCase();
  const trees = list.getElementsByClassName('tree-link w-dyn-item');
  
  Array.from(trees).forEach(function (tree) {
    const treeName = tree.firstElementChild.textContent;
    if (treeName.toLowerCase().indexOf(term) != -1) {
      tree.style.display = 'block';
    }
    else {
      tree.style.display = 'none';
    }
  })
});