import Expense from "./components/Expense";

function App() {
  const expense = [
    {
      title: "New Desk (Women)",
      amount: 305.78,
      date: new Date(2022, 2, 25),
    },
    {
      title: "Car Insurnce",
      amount: 475.89,
      date: new Date(2022, 2, 24),
    },
    {
      title: "Toilet Papers",
      amount: 456.58,
      date: new Date(2022, 2, 23),
    },
  ];
  return (
    <div>
      <h1>Let's Start</h1>
      <Expense item={expense} />
    </div>
  );
}

export default App;
