import './App.css';
import { MainLayout } from './layout/main-layout';
import HomePage from './pages/Home';
import { UseClassComponentPage } from './pages/use-class-component';
import { UseFunctionComponentPage } from './pages/use-function-component';


function App() {
  return (
    <MainLayout>
      {/* <UseFunctionComponentPage /> */}
      <UseClassComponentPage />
      {/* <HomePage/> */}

    </MainLayout>

  );
}

export default App;
