import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import {PanelList} from './components/panel-list/panel-list.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(users => this.setState({ photos:users }));
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }
  render() {
    const {photos, searchField} = this.state;
    const filteredphotos = photos.filter(photo => photo.id.toString().toLowerCase().includes(searchField));
    return (
      <div className="App">
          <h1>PhotoSearch</h1>
          <SearchBox placeholder="Search Photo by ID" handleChange={this.handleChange}/>
          <PanelList photos={filteredphotos} />
      </div>
    );
  }
}

export default App;
