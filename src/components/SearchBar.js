import React from "react";


class SearchBar extends React.Component {
  
  state = { inputChange : '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmited(this.state.inputChange)
  }
  
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label for="image search">Image Search</label>
            <input
             id="image search"
             type="text"
             value = {this.state.inputChange}
             onChange={e => this.setState({inputChange:e.target.value})} 
             />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;   