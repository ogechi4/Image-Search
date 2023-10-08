const accessKey = "qk-UjRNpqGm45DXM1G6DZ2G--KbL1BcZVKk5sBA9QAA"


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

//   now we get the API from Unsplash Websites
let keyword = "";
let page = 1;

async function searchImages(){
keyword = searchBox.value;
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

const response = await fetch(url);
const data = await response.json();

// this is to clear the initial search to replace a new search
if (page ===1){
    searchResult.innerHTML = ""
}

const results = data.results

// map through each image and creat a image element for each image
results.map((result) => {
    const image = document.createElement("img")
// the imag url
image.src = result.urls.small;
//  add image link 
const imageLink = document.createElement("a")
imageLink.href = result.links.html;
//  for the link to open in a new tab
imageLink.target = "_blank"
// place the image inside the a tag
imageLink.appendChild(image);
searchResult.appendChild(imageLink)
})
showMoreBtn.style.display = "block"


}

searchForm.addEventListener("submit", (e) =>{
e.preventDefault();
page =1;
searchImages();
})

showMoreBtn.addEventListener("click", () => {
page++
searchImages()
})
