
import { useState } from "react";
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

  const [name, setName] = useState("");
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [message, setMessage] = useState("");

  function findGuest(event) {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Type a name");
      return;
    }

    const found = guests.find(
      (guest) =>
        guest.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (found) {
      setSelectedGuest(found);
      setMessage("");
    } else {
      setSelectedGuest(null);
      setMessage("Not on the list");
    }
  }

  return (
    <div className="app">
      <header>
        <h1>The Green Cafe</h1>
      </header>

      <main>
        <h2>Guest List</h2>

        <Wall guests={guests} />

        <form className="search" onSubmit={findGuest}>
          <input
            type="text"
            placeholder="Enter guest name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">Find</button>
        </form>

        <div className="card">
          {selectedGuest && (
            <>
              <h3>{selectedGuest.name}</h3>
              <p>Seat: {selectedGuest.seat}</p>
            </>
          )}
        </div>

        <p className="message">{message}</p>
      </main>

      <footer>
        Roll Number: 247231
      </footer>
    </div>
  );
}

export default App;
