import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useCallback } from "react";
import "./App.css";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const login = useCallback(() => {
    setIsloggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsloggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </>
    );
  } else if (!isLoggedIn) {
    routes = (
      <>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
