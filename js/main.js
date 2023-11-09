const elList = document.querySelector(".posts-list")
function renderPosts(arr, startNumber, endNumber, node) {
  arr.slice(startNumber, endNumber).forEach(item => {
    const itemList = document.createElement("li");
    const itemText = document.createElement("span");
    const itemTitle = document.createElement("h3");
    const itemParagrph = document.createElement("p");
    itemList.classList.add("posts-item");
    itemText.classList.add("posts-text");
    itemTitle.classList.add("posts-heading");
    itemParagrph.classList.add("posts-paragrph");
    itemText.textContent = item.id;
    itemTitle.textContent = item.title;
    itemParagrph.textContent = item.body;
    itemList.append(itemText, itemTitle, itemParagrph);
    node.appendChild(itemList);
  });
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => renderPosts(data, 0, 21, elList));