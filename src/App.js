
import './App.css';
import './index.css'
// import CardItem from './components/card/CardItem';
// import CardItem2 from './components/card/CardItem2';
// import CardList from './components/card/CardList';
import {GlobalStyles} from './GlobalStyles'
import Photos from './components/photo/Photos';
import HackerNews from './components/news/HackerNews';

// import {ThemeProvider} from 'styled-components';
function App() {
  // const theme = {
  //   colors: "#63B8FF"
  // }

  return (
    <div className="App">
        {/* <GlobalStyles></GlobalStyles> */}
        {/* <Photos></Photos> */}
      <HackerNews></HackerNews>


      {/* <ThemeProvider theme = {theme}>
        <GlobalStyles></GlobalStyles>
        <CardList>
          <CardItem></CardItem>
        </CardList>
      </ThemeProvider> */}


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
