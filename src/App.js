import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/main-layout';
import HomePage from './pages/Home';
import { UseClassComponentPage } from './pages/use-class-component';
import { UseFunctionComponentPage } from './pages/use-function-component';
import UsersPageIndex from './pages/users/users-index';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='use-fc' element={<UseFunctionComponentPage />} />
          <Route path='use-cc' element={<UseClassComponentPage />} />
          <Route path='users' element={<UsersPageIndex />}/>
        </Routes>
        
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
