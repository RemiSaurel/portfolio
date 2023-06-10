import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "./components/Blog.tsx";

function App() {
  return (
    <Router>
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={1}
          outerScale={2}
          outerAlpha={0.1}
          outerStyle={{
            border: "3px solid #E6AF2E",
          }}
          innerStyle={{
            backgroundColor: "#E6AF2E",
          }}
        />
        <div className="overflow-y-auto h-screen">
          <Switch>
            <Route path="/portfolio/blog">
              <Header />
              <Blog />
            </Route>
            <Route path="/">
              <Header />
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
