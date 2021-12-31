import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { MainLayout } from './layout/main-layout';
import HomePage from './pages/Home';
import { UseClassComponentPage } from './pages/use-class-component';
import { UseFunctionComponentPage } from './pages/use-function-component';
import UsersPageIndex from './pages/users/users-index';
import UserNewPage from './pages/users/user-new';
import UserEditPage from './pages/users/user-edit';
import { HookIndex } from './react-hook';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='use-fc' element={<UseFunctionComponentPage />} />
          <Route path='use-cc' element={<UseClassComponentPage />} />
          <Route path='react-hook' element={<HookIndex />} />

          <Route path='users' element={<UsersPageIndex />}/>
          <Route path='users/new' element={<UserNewPage />}/>
          <Route path='users/edit/:id' element={<UserEditPage />} />
        </Routes>
        
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
