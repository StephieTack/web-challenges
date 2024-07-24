import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 131,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 137,
      name: "Apple",
      color: "yellow",
    },
    {
      id: 133,
      name: " Mango",
      color: "red",
    },
    {
      id: 127,
      name: "Cucumber",
      color: "green",
    },
    {
      id: 703,
      name: "Orange",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card
          key={fruit.id}
          name={fruit.name}
          id={fruit.id}
          color={fruit.color}
        />
      ))}
    </div>
  );
}
