const selectElement = document.querySelector('#websites');

selectElement.addEventListener('change', (event) => {
    window.open(event.target.value);
})


// function addwebsite() {
//     document.createElement
// }
