const selectElement = document.querySelector('#websites');

selectElement.addEventListener('change', (event) => {
    window.open(event.target.value);
    location.reload(true);
})



function addwebsite() {
    var newoption = document.createElement("option");
    let weblink = document.querySelector('#input_link').value;
    let name = document.querySelector('#input_name').value;
    
    newoption.setAttribute("class", "option");
    newoption.setAttribute("value", weblink);
    newoption.innerHTML = name;
    let ws = document.getElementById("websites");
    ws.add(newoption);
}
