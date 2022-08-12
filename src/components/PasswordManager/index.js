import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    userNameInput: '',
    passwordInput: '',
    websitesList: [],
    showPass: false,
    search: '',
  }

  changeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  changeUserName = event => {
    this.setState({userNameInput: event.target.value})
  }

  changePassWord = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onDelete = unq => {
    const {websitesList} = this.state
    const filtered = websitesList.filter(each => each.id !== unq)
    this.setState({websitesList: filtered})
  }

  addFun = event => {
    event.preventDefault()
    const {websiteInput, userNameInput, passwordInput} = this.state
    const newItem = {
      id: v4(),
      websiteName: websiteInput,
      user: userNameInput,
      password: passwordInput,
    }
    this.setState(prev => ({
      websiteInput: '',
      userNameInput: '',
      passwordInput: '',
      websitesList: [...prev.websitesList, newItem],
    }))
  }

  show = () => {
    this.setState(prev => ({showPass: !prev.showPass}))
  }

  render() {
    const {
      websiteInput,
      userNameInput,
      passwordInput,
      websitesList,
      showPass,
      search,
    } = this.state

    const searchResult = websitesList.filter(
      obj => obj.websiteName.toLowerCase() === search.toLowerCase(),
    )
    return (
      <div className="container">
        <div className="responsive-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
          />
          <div className="password-manager-container">
            <div className="password-manager-img-container">
              <img
                className="password-manager-img"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
              />
            </div>
            <div className="password-manager-input-box">
              <h1 className="password-manager-title">Add New Password</h1>
              <form onSubmit={this.addFun}>
                <div className="website-input-box">
                  <div className="website-input-img-box">
                    <img
                      className="website-input-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </div>
                  <input
                    value={websiteInput}
                    onChange={this.changeWebsite}
                    placeholder="Enter Website"
                    className="website-input"
                    type="text"
                  />
                </div>
                <div className="website-input-box">
                  <div className="website-input-img-box">
                    <img
                      className="website-input-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                      alt="username"
                    />
                  </div>
                  <input
                    value={userNameInput}
                    onChange={this.changeUserName}
                    placeholder="Enter Username"
                    className="website-input"
                    type="text"
                  />
                </div>
                <div className="website-input-box">
                  <div className="website-input-img-box">
                    <img
                      className="website-input-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </div>
                  <input
                    value={passwordInput}
                    onChange={this.changePassWord}
                    placeholder="Enter Password"
                    className="website-input"
                    type="text"
                  />
                </div>
                <div className="submit-container">
                  <button type="submit" className="submit-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="passwords-container">
            <div className="passwords-title-box">
              <div className="title-count-box">
                <span className="passwords-container-title">
                  Your Passwords
                </span>
                <span className="passwords-count">{websitesList.length}</span>
              </div>
              <div className="search-bar">
                <div className="searchbar-img-box">
                  <img
                    className="search-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </div>
                <input
                  value={this.search}
                  onChange={this.onSearch}
                  type="search"
                  className="search-input"
                  placeholder="search"
                />
              </div>
            </div>
            <hr className="divider" />
            <div className="showpasswords-container">
              <input id="checkBox" type="checkbox" onClick={this.show} />
              <label htmlFor="checkBox" className="show-passwords">
                ShowPasswords
              </label>
            </div>
            {searchResult.length === 0 && (
              <div className="no-passwords-container">
                <img
                  className="show-passwords-img"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                />
                <p className="show-passwords">No Passwords</p>
              </div>
            )}
            {searchResult.length !== 0 && (
              <ul className="passwords-list">
                {searchResult.map(obj => (
                  <PasswordItem
                    key={obj.id}
                    details={obj}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
