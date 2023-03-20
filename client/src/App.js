import { Route, Routes} from 'react-router-dom';
import { Home, Lost, Err } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lost" element={<Lost />} />
      <Route path="/*" element={<Err />} />
    </Routes>
  );
}

export default App;
