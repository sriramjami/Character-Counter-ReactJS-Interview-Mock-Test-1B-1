import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {words: [], userInput: ''}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput, words} = this.state
    const userInputs = {
      id: v4(),
      word: userInput,
    }
    const updatedList = [...words, userInputs]
    this.setState({words: updatedList})
    this.setState({userInput: ''})
  }

  renderEmptyListView = () => (
    <div className="empty-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        className="no-user-input-image"
        alt="no user inputs"
      />
    </div>
  )

  renderLeftSideSection = () => {
    const {words} = this.state
    const wordsLength = words.length
    return (
      <div className="left-side-section">
        <div className="left-heading-container">
          <h1 className="heading">Count the characters like a Boss....</h1>
        </div>
        {wordsLength === 0 ? (
          this.renderEmptyListView()
        ) : (
          <ul className="words-list">
            {words.map(eachWord => (
              <li key={eachWord.id} className="word-container">
                <p className="word">
                  {eachWord.word} :
                  <span className="span-text">{eachWord.word.length}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  renderRightSideSection = () => {
    const {userInput} = this.state
    return (
      <div className="right-side-section">
        <div className="character-search-container">
          <h1 className="right-heading">Character Counter</h1>
          <form onSubmit={this.onSubmitForm} className="search-container">
            <input
              type="text"
              value={userInput}
              className="input-element"
              onChange={this.onChangeInput}
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="character-counter-container">
        <div className="responsive-container">
          {this.renderLeftSideSection()}
          {this.renderRightSideSection()}
        </div>
      </div>
    )
  }
}

export default App
