import ArticlesList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header />
      <ArticlesList />
    </div>
  );
};

export default App;
