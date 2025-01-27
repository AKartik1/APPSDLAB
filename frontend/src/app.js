import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowToPlayPage from "./HowToPlayPage"; // Import your new page
import Questions from "./Questions"; // Assuming you have this component
import Navbar from "./Navbar"; // If you have a Navbar component

function App() {
    return (
        <Router>
            <Navbar title="Quiz Game" /> {/* Show the navbar for navigation */}
            <Switch>
                <Route path="/how-to-play/Groups" component={HowToPlayPage} />
                <Route path="/questions" component={Questions} />
                {/* Add other routes as needed */}
                <Route path="/" exact>
                    <h1>Welcome to the Quiz Game!</h1>
                    <p>Select a topic to get started.</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
