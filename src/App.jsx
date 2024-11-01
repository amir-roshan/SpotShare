import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/Navigation/MainNavIgation";

const App = () => {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Routes>
                    <Route path="/" element={< Users />} />
                    <Route path="/places/new" element={<NewPlace />} />
                    <Route path="*" element={< Users />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;
