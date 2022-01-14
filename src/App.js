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
import { NotFoundPage } from './pages/404';
import { ReactComponent } from './pages/react-component';
import { StoreIndexPage } from './pages/store';
import { PrivateRoute } from './utils/private-route';
import { LoginIndexPage } from './pages/login';
import { LogoutPage } from './pages/login/logout';
import { ReduxPageIndex } from './pages/redux';
import { ContextPageIndex } from './pages/context';


function App() {
  
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='react-component' element={<ReactComponent />}> 
            <Route path='use-fc' element={<UseFunctionComponentPage />} />
            <Route path='use-cc' element={<UseClassComponentPage />} />
            <Route path='react-hook' element={<HookIndex />} />     
          </Route>

          <Route path='redux' element={<ReduxPageIndex />}/>
          <Route path='context' element={<ContextPageIndex />}/>
          
          <Route path='users' element={<UsersPageIndex />}/>
          <Route path='users/new' element={<UserNewPage />}/>
          <Route path='users/edit/:id' element={<UserEditPage />} />
          
          <Route path='login' element={<LoginIndexPage />} />
          <Route path='logout' element={<LogoutPage />} />
          <Route path='store' element={<PrivateRoute><StoreIndexPage/></PrivateRoute>} />

          <Route path='*' element={<NotFoundPage />} />
          
        </Routes>
        
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
