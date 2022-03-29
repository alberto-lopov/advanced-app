import "./App.css";
import { useSelector } from "react-redux";
import { selectTokenJWT } from "./authSlice";

import { GridPokemon } from './GridPokemon';
import { PageBar } from "./PageBar";
import { SearchBar } from "./SearchBar";
import { LoginScreen } from "./LoginScreen";

function App() {
  const tokenJWT = useSelector(selectTokenJWT);

  //Login before show info
  if(!tokenJWT){
    return(
      <LoginScreen />
    );
  }

  return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PageBar />
        </header>
        <main className="App-main">
          <GridPokemon/>
        </main>
      </div>
  );
}

export default App;
