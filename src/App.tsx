import Header from "./components/Header.tsx";
import Lines from "./components/Lines.tsx";

function App() {
    return (
        <div className="overflow-y-auto">
            <Lines/>
            <Header/>
        </div>
    );
}

export default App;