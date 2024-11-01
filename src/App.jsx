
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Users />} />
                <Route path="/places/new" element={<NewPlace />} />
                <Route path="*" element={< Users />} />
            </Routes>
        </Router>
    );
};

export default App;
