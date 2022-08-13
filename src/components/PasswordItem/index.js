import './index.css'

const PasswordItem = props => {
  const {details, onDelete, showPass} = props
  const {id, websiteName, user, password} = details

  const click = () => {
    onDelete(id)
  }

  const surName = user.slice(0, 1)
  return (
    <li className="list-item">
      <div className="surname-box">
        <p className="surname">{surName}</p>
      </div>
      <div className="list-content">
        <p className="show-passwords">{websiteName}</p>
        <p className="show-passwords">{user}</p>
        {showPass && <p className="show-passwords">{password}</p>}
        {!showPass && (
          <img
            className="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <button testid="delete" type="button" className="del-btn" onClick={click}>
        <img
          className="del-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
