const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="isabela-drasovean-zgZjXqeyZVI-unsplash.jpg" alt="" srcset=" "/>';
  title.innerHTML = "Lorem ipsum";
  excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing.";
  profile_img.innerHTML =
    '<img src="christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt="" srcset="" />';
  name.innerHTML = "Kelly";
  date.innerHTML = "May 22, 2023";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
}
