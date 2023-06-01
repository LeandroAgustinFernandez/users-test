import "./App.css";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Info</h1>
      </header>
      <UserContextProvider>
        <Home />
      </UserContextProvider>
    </div>
  );
}

export default App;
