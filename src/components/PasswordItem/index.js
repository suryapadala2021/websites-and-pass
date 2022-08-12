import './index.css'

const PasswordItem = props => {
  const {details, onDelete, show} = props
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
        {show && <p className="show-passwords">{password}</p>}
        {!show && <p className="show-passwords">{password}</p>}
      </div>
      <button type="button" className="del-btn" onClick={click}>
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
