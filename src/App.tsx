import Header from "./components/Header.tsx";
import Lines from "./components/Lines.tsx";
import Main from "./components/Main.tsx";

function App() {
    return (
        <div className="overflow-y-auto h-screen">
            <Lines/>
            <Header/>
            <Main/>
        </div>
    );
}

export default App;