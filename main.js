async function getContent() {
  try {
    const { data } = await axios.get("http://localhost:4444/");
    fazLi(data);
  } catch (error) {
    console.error(error);
  }
}

getContent();

function fazLi(json) {
  let output = "";
  for (let valor of json) {
    output += `<li>${valor.Country}</li>`;
  }

  document.querySelector(".lista").innerHTML = output;
}
