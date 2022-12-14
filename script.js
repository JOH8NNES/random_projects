const selectElement = document.querySelector('#websites');

selectElement.addEventListener('change', (event) => {
    window.open(event.target.value);
    location.reload(true);
})



// function addwebsite() {
//     document.createElement
// }
