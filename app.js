const likeBtn = document.querySelector(".like-btn");

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");

    if (likeBtn.classList.contains("liked")) {
        likeBtn.classList.remove("fa-regular");
        likeBtn.classList.add("fa-solid");
    } else {
        likeBtn.classList.remove("fa-solid");
        likeBtn.classList.add("fa-regular");
    }
});

