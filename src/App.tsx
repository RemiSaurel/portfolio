import Header from "./components/Header.tsx";
import Lines from "./components/Lines.tsx";
import Main from "./components/Main.tsx";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
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
        <Lines />
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
