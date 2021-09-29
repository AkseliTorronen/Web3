import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  makePage();
}

function makePage() {
  const wiki_page = document.getElementById("app");
  for (let i = 0; i < 5; i++) {
    const new_entry = document.createElement("div");
    new_entry.className = "wiki-item";

    let new_header = document.createElement("h1");
    new_header.className = "wiki-header";
    new_header.append("Breed X");

    const new_content = document.createElement("div");
    new_content.className = "wiki-content";

    let new_text = document.createElement("p");
    new_text.className = "wiki-text";
    new_text.innerHTML =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const new_image = document.createElement("div");
    new_image.className = "img-container";

    let image_content = document.createElement("img");
    image_content.className = "wiki-img";
    fetch("https://dog.ceo/api/breed/hound/images/random")
      .then((response) => response.json())
      .then((data) => {
        image_content.src = data.message;
      });

    new_image.appendChild(image_content);

    new_content.appendChild(new_image);
    new_content.appendChild(new_text);
    new_entry.appendChild(new_header);
    new_entry.appendChild(new_content);
    wiki_page.appendChild(new_entry);
  }
}

//function loadJson() {
//let url = "https://dog.ceo/api/breed/hound/images/random";
//let response = fetch(url);

//let dog_img = response.json();
//console.log(dog_img.message);
//return dog_img.message;
//}
