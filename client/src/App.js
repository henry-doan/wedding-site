import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';
import Dash from './components/dashboard/Dash';
import ContactForm from './components/contacts/ContactForm';
import Contacts from './components/contacts/Contacts';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/dash' element={<Dash />}/>
          <Route exact path='/contacts' element={<Contacts />}/>
        </Route>
        <Route exact path="/contact" element={<ContactForm />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </FetchUser>
  </>
)

export default App;
