document.addEventListener("DOMContentLoaded", function () {
  const images = [];
  for (i = 1; i < 8; i++) {
    const image = document.querySelectorAll(`.img${i}`);
    images.push(image);
  }
  let items = document.querySelectorAll(".header-menu li");
  const sectors = [...items].filter((item) =>
    item.innerText.includes("Sectors")
  )[0];
  const expertise = [...items].filter((item) =>
    item.innerText.includes("Expertise")
  )[0];
  const studio = [...items].filter((item) =>
    item.innerText.includes("Studio")
  )[0];
  const people = [...items].filter((item) =>
    item.innerText.includes("People")
  )[0];
  const news = [...items].filter((item) => item.innerText.includes("News"))[0];
  const careers = [...items].filter((item) =>
    item.innerText.includes("Careers")
  )[0];
  const contact = [...items].filter((item) =>
    item.innerText.includes("Contact")
  )[0];
  items = [];
  items.push(sectors, expertise, studio, people, news, careers, contact);

  console.log(items);
  console.log("Images:", images);

  items.forEach((item, index) => {
    item.addEventListener("onmouseover", (e) => {
      console.log(e);
      console.log("here");
      images.forEach((img) => (img[0].style.display = "none")); // Hide all images
      images[index][0].style.display = "block"; // Show the hovered image
    });

    item.addEventListener("onmouseout", (e) => {
      console.log(e);
      console.log("here");
      images.forEach((img) => (img[0].style.display = "none")); // Hide all images
      images[0][0].style.display = "block"; // Show default image
    });
  });
});
