import "./App.css";
import { useUserSelector } from "./store/selectors";

function App() {
  const { user } = useUserSelector();

  return <div>Hello</div>;
}

export default App;
