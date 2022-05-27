import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/chats" component={ChatPage} />
    </Switch>
  );
}

export default App;
