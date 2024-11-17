import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          {/* Order matters in routes */}
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="*" element={<Users />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
