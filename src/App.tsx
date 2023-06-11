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
          color={'230, 175, 46'}
          innerSize={8}
          outerSize={40}
          innerScale={0.7}
          outerScale={1.4}
          outerStyle={{
            border: "1px solid #E6AF2E",
          }}
          innerStyle={{
            backgroundColor: "#E6AF2E",
          }}
          trailingSpeed={5}
          showSystemCursor={false}
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
