import "./App.css";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./pages/Index/Index";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
