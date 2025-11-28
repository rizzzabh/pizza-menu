import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/pizza1.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/pizza1.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header">Fast React Pizza Co</header>;
}
function Menu() {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} />
        ))}{" "}
        ;
      </div>
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name}></img>
      <h2>{props.pizzaObject.name}</h2>
      <p>{props.pizzaObject.ingredients}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open.
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
