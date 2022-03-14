
import './App.css';
import CardItem from './components/card/CardItem';
import CardItem2 from './components/card/CardItem2';
import CardList from './components/card/CardList';
import {GlobalStyles} from './GlobalStyles'
function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <CardList>
        <CardItem2></CardItem2>
      </CardList>


      {/* <CardList>
        <CardItem secondary></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
        <CardItem></CardItem>
      </CardList> */}
    </div>
  );
}

export default App;
