const form  = document.querySelector('form');
const input = document.querySelector("[name='podsjetnik']");
const podsjetnikList = document.getElementById('podsjetnici');
const existingpodsjetnici = JSON.parse(localStorage.getItem('podsjetnici')) || [];
const podsjetnikData = [];
existingpodsjetnici.forEach(podsjetnik => {
    addpodsjetnik(podsjetnik);
});
function addpodsjetnik(podsjetnikText) {
    podsjetnikData.push(podsjetnikText);
    const li = document.createElement('li')
    li.innerHTML = podsjetnikText;
    podsjetnikList.appendChild(li);
    localStorage.setItem('podsjetnici', JSON.stringify(podsjetnikData));
    input.value = ''
}
form.onsubmit = (event) => {
    event.preventDefault();
    addpodsjetnik(input.value);
}