const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search states.json and filter it
const searchStates = async searchText => {
  const res = await fetch("../data/states.json");
  const states = await res.json();

  // Get matches to current input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }
  console.log(matches);
  outputHtml(matches);
};

// Show output html
const outputHtml = states => {
  if (states.length > 0) {
    const html = states
      .map(state => {
        return `
        <div class="card card-body mb-1">
            <h4>${state.name} (${state.abbr}) <span class="text-info">${
          state.capital
        }</span></h4>
            
            <small>Lat: ${state.lat} and Long: ${state.long}</small>
        </div>
        `;
      })
      .join("");
    console.log(html);
    matchList.innerHTML = html;
  }
};
search.addEventListener("input", () => searchStates(search.value));
