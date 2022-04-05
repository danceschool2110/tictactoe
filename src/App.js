
import './App.css';
import './index.css';
//import Blog from './components/Blog'
// import Dropdown from './components/Dropdown';
// import SideBarMenu from './components/SideBarMenu';
// import useClickOutSide from './hooks/useClickOutSide';
// import CardItem from './components/card/CardItem';
//import TextareaAutoResize from './components/TextareaAutoResize';
// import CardItem2 from './components/card/CardItem2';
// import CardList from './components/card/CardList';
import {GlobalStyles} from './GlobalStyles'
import Form from './components/form/Form';
import MovieSearchApp from './components/MovieSearchApp';
// import { useState } from 'react';
// import Photos from './components/photo/Photos';
// import HackerNews from './components/news/HackerNews';
// import HackerNews2 from './components/news/HackerNews2';
// import {ThemeProvider} from 'styled-components';

function App() {
  // const theme = {
  //   colors: "#63B8FF"
  // }
  //const {show, setShow, nodeRef} = useClickOutSide('span')
  return (
    <div className="App bg-slate-600">
      {/* <Blog></Blog> */}
      {/* <GlobalStyles></GlobalStyles> */}
      {/* <Form></Form> */}
      <MovieSearchApp></MovieSearchApp>
      {/* <span 
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
        onClick={()=> setShow(true)}
      >
        Show menu
      </span>
      <SideBarMenu show = {show} ref={nodeRef}></SideBarMenu>
      <Dropdown></Dropdown> */}
        {/* <Photos></Photos> */}
      {/* <HackerNews2></HackerNews2> */}

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
