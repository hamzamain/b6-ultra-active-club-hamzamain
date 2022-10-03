import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Question from "./components/Question/Question";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
