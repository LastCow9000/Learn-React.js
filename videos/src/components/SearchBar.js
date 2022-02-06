import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onChangeInput = (e) => {
    this.setState({ term: e.target.value });
  }

  onSubmitForm = (e) => {
    e.preventDefault();

    // todo: call search api from parent component
  }
  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onSubmitForm}>
          <div className='field'>
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeInput}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;