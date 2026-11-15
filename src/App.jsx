
import "./App.css";

function Guest({ name, seat }) {
  return (
    <div className="guest">
      <h3>{name}</h3>
      <p>Seat: {seat}</p>
    </div>
  );
}

function Wall({ guests }) {
  return (
    <div className="guest-list">
      {guests.map((guest) => (
        <Guest
          key={guest.name}
          name={guest.name}
          seat={guest.seat}
        />
      ))}
    </div>
  );
}

function App() {
  const guests = [
    { name: "Sara", seat: 4 },
    { name: "Omar", seat: 9 },
    { name: "Hina", seat: 2 }
  ];

  return (
    <div className="app">
      <header>
        <h1>The Green Cafe</h1>
      </header>

      <main>
        <h2>Guest List</h2>
        <Wall guests={guests} />
      </main>

      <footer>
        Roll Number: 247231
      </footer>
    </div>
  );
}

export default App;
