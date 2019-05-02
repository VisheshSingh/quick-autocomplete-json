const search = document.getElementById("search");
const matchList = document.getElementById("matchList");

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch("../data/states.json");
  const states = await res.json();

  console.log(states);
};
search.addEventListener("input", () => searchStates(search.value));
