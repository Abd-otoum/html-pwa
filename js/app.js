const container = document.querySelector(".container");
const cars = [
  { name: "Toyota Corolla", image: "./image/Toyota_Corolla.jpeg" },
  { name: "Honda Civic", image: "image/Honda_Civic.jpeg" },
  { name: "Ford Mustang", image: "image/Ford_Mustang.webp" },
  { name: "Chevrolet Camaro", image: "image/Chevrolet_Camaro.jpeg" },
  { name: "BMW Series 3", image: "image/BMW_Series_3.jpg" },
  { name: "Mercedes-Benz C-Class", image: "image/Mercedes_Benz_C_Class.jpeg" },
  { name: "Tesla Model 3", image: "image/Tesla_Model_3.jpg" },
];

const showCars = () => {
  let output = "";
  cars.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View More</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCars);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
