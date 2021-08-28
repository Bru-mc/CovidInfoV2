const countryul = document.querySelector(".dropdown");
const arrow = document.querySelector(".region-case");
let countries = "";

(async function getContent() {
  try {
    const { data } = await axios.get("http://localhost:4444/countries");
    countries = fazLiCountries(data);
  } catch (error) {
    console.error(error);
  }
})();

function fazLiCountries(json) {
  let output = "";
  for (let valor of json) {
    output += `<li class="ex">${valor.Country}</li>`;
  }
  return output;
}

arrow.addEventListener("click", dropdownCountries);

function dropdownCountries() {
  countryul.innerHTML = countries;
  countryul.classList.toggle("show"); //se não tiver adiciona, se tiver tira
  let lis = document.querySelectorAll(".ex");
  lis.forEach((li) => {
    li.style.fontWeight = "bold";
  });

  arrow.classList.toggle("region-case-op");
}

window.addEventListener("click", removerdropdown);

function removerdropdown(e) {
  console.log(e.target);
  if (!document.querySelector(".region-case").contains(e.target)) {
    if (countryul.classList.contains("show")) {
      //se a classe possuir show, então tira
      countryul.classList.toggle("show");
      arrow.classList.toggle("region-case-op");
    }
  }
}
