// user clicks button
// consume api
// send back random image to html
let button = document.getElementsByTagName("button");
let image = document.getElementsByTagName("img");
let imageContainer = document.getElementsByTagName("div")[0];

imageContainer.style.width = "300px";
imageContainer.style.height = "300px";

image[0].style.width = "100%";
image[0].style.height = "100%";

button[0].addEventListener("click", () => {
    // things we need to know
    // 1) endpoint - https://dog.ceo/api/breeds/image/random
    // 2) json or xml - json
    // 3) how much data - 1 object
    // 4) what data looks like - 2 things, message = potential image, success

    // HTTP Request
    // 1) Utilize the endpoint with correct method
    // 2) Get a response: if ok, parse the data, else error
    // 3) Do something with the parsed data
    // 4) Handle the error

    const baseURL = "https://dog.ceo/api/breeds";
    let route = "image/random";
    let endpoint = `${baseURL}/${route}`;
    fetch(endpoint)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
        else {
            throw Error ("The response returned some error");
        }
    })
    .then((data) => {
        image[0].setAttribute("src", data.message);
        console.log("data: ", data);
    })
    .catch(error => {
        alert(error);
    })

});