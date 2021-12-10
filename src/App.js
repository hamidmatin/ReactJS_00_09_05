import logo from './logo.svg';
import './App.css';

/******
 * Modules
 *    path
 *      1 - mudule name => node_module
 *      2 - current folder => ./mudule-file-name (.js)
 *      3 - current folder => ./folder/.../mudule-file-name (.js)
 *      4 - one levele up => ../folder/../mudule-file-name (.js)
 */
// import { myFucntion } from './react-module/my-module';
// import { teacher } from './react-module/my-module';
// import Course from './react-module/my-module';
import Course, { myFucntion, teacher } from './react-module/my-module';
import CRS from './react-module/my-module';
import { teacher as reactTeacher, myFucntion as fn, default as MyCourse } from './react-module/my-module'

import * as myConstant from './react-module/my_constant'

function App() {
  myFucntion();
  fn()
  console.log(myConstant)

  const course = new Course('React JS', '40');
  const myCourse = new CRS('React JS', '40');
  return (
    <div className='App'>
      <p>
        Teacher : {teacher.firstName} {teacher.lastName}
      </p>
      <p>
        Teacher : {reactTeacher.firstName} {reactTeacher.lastName}
      </p>
      <p> {course.showInfo()}</p>
      <p> {myCourse.showInfo()}</p>
      <p>{myConstant.MY_PROJECT_NAME}</p>
      <p>{myConstant.SESSION_COUNT}</p>
      <p>{myConstant.START_DATE}</p>
      <p>{myConstant.default}</p>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
