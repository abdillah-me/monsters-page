import "./App.css";
import React, { Component } from "react";
import { CardList } from "./component/card-list/CardList.component";
import SearchBox from "./component/searchBox/SearchBox.component";

class App extends Component {
   constructor() {
      super();

      this.state = {
         monsters: [],
         searchField: "",
      };
   }

   handleChange = (event) => {
      this.setState({ searchField: event.target.value });
   };

   componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((users) => this.setState({ monsters: users }));
   }

   render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter((monster) =>
         monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
         <div className="App">
            <h1>Monsters</h1>
            <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
            <CardList monsters={filteredMonsters} />
         </div>
      );
   }
}

export default App;
