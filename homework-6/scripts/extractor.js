let url = decodeURI(location.search);
let searchParams = new URLSearchParams(url);
let parameters = {};
for (let p of searchParams) {
  parameters[p[0]] = p[1];
}
writeInElement(document.getElementById('first-name'), parameters.firstName);
writeInElement(document.getElementById('last-name'), parameters.lastName);
writeInElement(document.getElementById('email'), parameters.email);
function writeInElement(element, value) {
  if (value != null && value !== "") {
    element.value = value;
  }
}