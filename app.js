// console.log("Let's get this party started!");
// my api key: VbLoht51MpgH9vEEq6a04apb8V4ocGou

let userQuery = document.querySelector("#userQuery");
let imageDiv = document.querySelector("#imageDiv");
let resetButton = document.querySelector("#removeGifs");

function generateGif(results) {
    // console.log(results.data[0].images.original.url);

    if (results.data.length > 0) {
        let idx = Math.floor(Math.random() * results.data.length);
        let newDiv = document.createElement("div");
        let newImg = document.createElement("img")
        newImg.src = results.data[idx].images.original.url;
        newDiv.append(newImg);
        imageDiv.append(newDiv);
    }
}

document.addEventListener("submit", async function (e) {
    e.preventDefault();

    let searchQuery = userQuery.value;
    userQuery.value = "";

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchQuery,
            api_key: "VbLoht51MpgH9vEEq6a04apb8V4ocGou"
        }
    });

    // console.log(res.data.data.length);
    generateGif(res.data);
});

resetButton.addEventListener("click", function() {
    imageDiv.innerHTML = "";
})