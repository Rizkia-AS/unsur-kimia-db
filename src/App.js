import BarHeader from "./components/BarHeader";
import UnsurPage from "./components/UnsurPage";
import CustFooter from "./components/CustFooter";
import Home from "./components/Home";

import {Route,Switch} from 'react-router-dom'
import {DataProvider} from "./DataContext.js"

function App() {

  return (
    <div className="App">
      <BarHeader title="Unsur Kimia" />
      <main>
      <DataProvider>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/unsur/:id" component={UnsurPage} />
          </Switch>
      </DataProvider>
      </main>
      <CustFooter innerText="rizkia-as.github.io"/>
    </div>
  );
}

export default App;