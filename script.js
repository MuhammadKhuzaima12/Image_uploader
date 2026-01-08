const choose_btn = document.getElementById("choose_btn");
const image_inp = document.getElementById("image_inp");
const preview = document.getElementById("preview");

// console.log(choose_btn,image_inp)
choose_btn.addEventListener("click", () => {
    preview.style.display = "none";
    image_inp.hidden = false;
    // console.log(image_inp.hidden, 2)
})

image_inp.addEventListener("change", () => {
    const file = image_inp.files[0];
    preview.style.display = "block";
    image_inp.hidden = true;
    image_inp.value = "";
    preview.src = URL.createObjectURL(file);
});