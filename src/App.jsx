
import "./App.css";

function Guest({ name, seat }) {
  return (
    <div className="guest">
      <h3>{name}</h3>
      <p>Seat: {seat}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>The Green Cafe</h1>
      </header>

      <main>
        <h2>Guest List</h2>

        <div className="guest-list">
          <Guest name="Sara" seat={4} />
          <Guest name="Omar" seat={9} />
          <Guest name="Hina" seat={2} />
        </div>
      </main>

      <footer>
        Roll Number: 247231
      </footer>
    </div>
  );
}

export default App;
