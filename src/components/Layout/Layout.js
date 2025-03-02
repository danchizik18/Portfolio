import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* No need to include <body> and <html> tags here */}
        <Outlet /> {/* This renders the child routes */}
      </div>
    </div>
  );
}

export default Layout;
