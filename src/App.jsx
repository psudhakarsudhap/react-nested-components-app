import "./App.css";

function Student({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function Header() {
  return (
    <header style={{ backgroundColor: "#f0f0f0" }}>
      <h1>Welcome to Sudhakar's Site</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px 0",
        textAlign: "center",
      }}>
      © 2026 Sudhakar's Site
    </footer>
  );
}

function Main() {
  return (
    <main style={{ flex: 1 }}>
      <p>Sudhakars details:</p>
      <Student name="Sudhakar" age={20} />
    </main>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
