import { useState } from "react";
import ArticlesList from "./components/ArticleList/ArticleList";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

const App = () => {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);

  return (
    <div className="h-screen sm:px-5 flex flex-col justify-start items-center">
      <Header user={user} />
      {hasUser && <ArticlesList />}
      {hasUser || <Form onSubmit={setUser} />}
    </div>
  );
};

export default App;
