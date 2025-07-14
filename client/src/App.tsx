// App.tsx
import { Route, Switch } from "wouter";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFountPage"; // ✅ corrected typo
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Switch>
      {/* Home Route */}
      <Route path="/" component={HomePage} />

      {/* Dynamic Post Route */}
      {/* <Route path="/post/:id" component={PostPage} /> */}
      <Route path="/posts/:id" component={PostPage} />

      {/* 404 Fallback */}
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
