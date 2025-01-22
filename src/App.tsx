import "./App.css";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./pages/Index/Index";
import { Atendimento } from "./pages/atendimento/atendimento";
import { Agenda } from "./pages/agenda/agenda";
import { Tags } from "./pages/tags/tags";
import { Atalho } from "./pages/atalho/atalho";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/index" element={<Index />}>
            <Route path="/index/atendimento" element={<Atendimento />} />
            <Route path="/index/agenda" element={<Agenda />} />
            <Route path="/index/tag" element={<Tags />} />
            <Route path="/index/atalho" element={<Atalho />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
