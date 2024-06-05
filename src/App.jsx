import Container from "./components/Container";
import Hero from "./components/Hero";

const App = () => {
  return <div>
    <div>
      <Hero/>
      <div className="bg-gray-100">
      <Container/>
      </div>
    </div>
  </div>
};
export default App;
