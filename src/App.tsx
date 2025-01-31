import "./App.css";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Index } from "./pages/Index/Index";
import { Atendimento } from "./pages/atendimento/atendimento";
import { Agenda } from "./pages/agenda/agenda";
import { Tags } from "./pages/tags/tags";
import { Atalho } from "./pages/atalho/atalho";
import { Login } from "./pages/login/login";
import { DashBoard } from "./pages/dashboard/dashBoard";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/index" element={<Index />}>
            <Route index path="/index/dashboard" element={<DashBoard />} />
            <Route path="/index/atendimento" element={<Atendimento />} />
            <Route path="/index/agenda" element={<Agenda />} />
            <Route path="/index/tag" element={<Tags />} />
            <Route path="/index/atalho" element={<Atalho />} />

            <Route path="/index" element={<Navigate to="/index/dashboard" />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
