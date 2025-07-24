import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Outlet /> {/* this allows nested routing like Homepage + children */}
    </div>
  );
}

export default App;
