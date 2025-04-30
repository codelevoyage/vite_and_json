import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1> Hello Zawad </h1>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello this is a Vite app!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
        <h1 id="fullName"></h1>
        <h2 id="age"></h2>
        <p id="email"></p>
        <p id="phone"></p>
    
        <h3>Favorite Meals:</h3>
        <ul id="mealsList"></ul>

      <p class="read-the-docs"> Click on the Vite logo to learn more </p>
    </div>
`

setupCounter(document.querySelector('#counter'))


const userData = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 28,
  favoriteMeals: [
    "Sushi Roll",
    "Grilled Cheese Sandwich",
    "Beef Tacos"
  ],
  contact: {
    email: "alice@example.com",
    phone: "555-1234"
  }
};

const jsonString = JSON.stringify(userData);
const parsedData = JSON.parse(jsonString);


// console.log(jsonString);
// console.log(parsedData);

// Populate HTML elements
document.getElementById("fullName").textContent = `Full Name: ${parsedData.firstName} ${parsedData.lastName}`;
document.getElementById("age").textContent = `Age: ${parsedData.age}`;
document.getElementById("email").textContent = `Email: ${parsedData.contact.email}`;
document.getElementById("phone").textContent = `Phone: ${parsedData.contact.phone}`;

// Add favorite meals to the list 
const meals = document.getElementById("mealsList");
parsedData.favoriteMeals.forEach(element => {
  const li = document.createElement("li");
  li.textContent = element;
  meals.appendChild(li);    
});


// const jsonObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   favoriteMeals: [
//       "McChicken with Small Fries",
//       "Spaghetti and Meatballs",
//       "Chicken and Broccoli with White Rice"
//   ],
//   relatives: {
//       brother: "Jimmy Doe",
//       mother: "Linda Ann-Doe",
//       father: "Jeremy Doe"
//   }
// }

// const newJSON = JSON.stringify(jsonObj);
// console.log(newJSON);
// console.log(typeof newJSON);

// console.log(JSON.parse(newJSON));

