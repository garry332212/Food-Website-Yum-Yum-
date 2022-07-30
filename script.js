const icons = document.querySelectorAll(".section_1_icons i");

document.querySelector('.menu').addEventListener('click', () =>{
  document.querySelectorAll('.target').forEach((items) =>{
      items.classList.toggle('change')
  });
})
let i = 1;

setInterval(() => {
  i++;
  //removes the class .change from the section class
  const icon = document.querySelector(".section_1_icons i.change");

  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 1500);
