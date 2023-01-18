
import { Routes, Route } from "react-router-dom";
import { Users } from './features/users/Users';

function App() {
  return (
      <div>
        <Routes>
          <Route
              path={'/'}
              element={<Users/>}
          />
        </Routes>
      </div>
  );
}

export default App;
