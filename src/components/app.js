import React from 'react';
import SearchBar from './searchBar';
import unsplash from '../api/unsplash';
import ImageList from '../components/imageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })
    // .then((res) => {
    //   console.log(res.data.results);
    // });
    this.setState({ images: response.data.results });
  }

  render() {
    return (<div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images}/>
    </div>
    );
  }
}

export default App;