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
import {
  teacher as reactTeacher,
  myFucntion as fn,
  default as MyCourse,
} from './react-module/my-module';
import * as myConstant from './react-module/my_constant';

/************* */
import { FunctionComponent1, FunctionComponent2 } from './react-component/function-component';

function App() {
  myFucntion();
  fn();
  console.log(myConstant);

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
      <hr />

      <FunctionComponent1 />
      <FunctionComponent1 />
      <hr />
      <FunctionComponent2 message='Hello React' sessionNumber='3' />
      <FunctionComponent2 
          message='Hello React' 
          sessionNumber='3' 
          style={{backgroundColor: 'hotpink', color: 'white'}}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam facilis quasi
          autem ipsa ab labore soluta, unde magni aliquam sit architecto minus possimus quod
          repellendus earum delectus. Harum, repellat!
        </p>
      </FunctionComponent2>
      <FunctionComponent2 message="skdsjgdj" sessionNumber={5}>
        <h3>kjsdgkdsg</h3>
      </FunctionComponent2>
    </div>
  );
}

export default App;
