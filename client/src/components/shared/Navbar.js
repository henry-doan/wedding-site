import { AuthConsumer } from "../../providers/AuthProvider";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  const rightNavItems = () => {
    if (user) {
      return (
        <>
          <li onClick={() => handleLogout(navigate)}>
            Logout
          </li>
          <Link to="/dash">
            <li>Dashboard</li>
          </Link>
        </>
      )
    } else {
      return(
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      )
    }
  }

  return(
    <>
      <nav>
        <ul>
          <Link to="/">
            <li>
              Home
            </li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => <Navbar { ...props } { ...auth } /> }
  </AuthConsumer>
)
 
export default ConnectedNavbar;