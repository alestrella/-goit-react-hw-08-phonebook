import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomeView from 'views/HomeView/HomeView';
import ContactsView from 'views/ContactsView/ContactsView';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="contacts" element={<ContactsView />} />
      </Route>
    </Routes>
  );
};

export default App;
