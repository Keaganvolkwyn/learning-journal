const viewMoreBtn = document.getElementById("view-more-btn");
const articlesElements = document.getElementsByClassName("hide");

viewMoreBtn.addEventListener("click", function(event) {
    for (let articles of articlesElements) {
        articles.style.display = "block";
    }
})