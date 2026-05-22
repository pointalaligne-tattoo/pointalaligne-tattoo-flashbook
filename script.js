const categories = [
  {
    containerId: "curiosites",
    prefix: "c-flash",
    max: 300
  },
  {
    containerId: "faune",
    prefix: "f-flash",
    max: 300
  },
  {
    containerId: "ornemental",
    prefix: "o-flash",
    max: 300
  }
];

categories.forEach(category => {
  const container = document.getElementById(category.containerId);

  for (let i = 1; i <= category.max; i++) {
    const number = String(i).padStart(3, "0");

    const section = document.createElement("section");
    section.className = "page";

    const image = document.createElement("img");
    image.src = `images/${category.prefix}${number}.jpg`;

    image.onload = function () {
      section.appendChild(image);
    };

    container.appendChild(section);
  }
});