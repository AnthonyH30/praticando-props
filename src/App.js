import { Component } from "react";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer";


export class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Main name="Anthony Harisson" old={21} study="ReactJs"/>
        <Footer/>
      </div>
    )
  }
}

export default App;