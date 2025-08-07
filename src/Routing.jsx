import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function Routing() {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default Routing;
