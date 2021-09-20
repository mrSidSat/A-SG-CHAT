import "../styles/App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginComponent from "./LoginComponent";
function App() {
  return (
    <>
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route path="/login" exact component={LoginComponent} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
