/*
  component name => PascalCase

  function component syntax

  function ComponentName(){
    return JSX
  }

  const ComponentName = () => {
    return JSX
  }


  using

  <ComponentName />
*/

export const FunctionComponent1 = () => {
  return (
    <div style={{ backgroundColor: '#f1f1f1', padding: '10px', marginBottom: '10px' }}>
      <h2>React Function Component</h2>
    </div>
  );
};

// export const FunctionComponent2 = (props) => {
//   console.log(props);
//   const myStyle = {
//     backgroundColor: '#f1f1f1',
//     padding: '10px',
//     marginBottom: '10px' ,
//     ...props.style
//   };
//   return (
//     <div style={myStyle}>
//       <h2>{props.message}</h2>
//       <p>Session : {props.sessionNumber}</p>
//       {props.children}
//     </div>
//   );
// };

// export const FunctionComponent2 = (props) => {
//   console.log(props);
//   const { style, message, sessionNumber, children } = props;

//   const myStyle = {
//     backgroundColor: '#f1f1f1',
//     padding: '10px',
//     marginBottom: '10px',
//     ...style,
//   };

//   return (
//     <div style={myStyle}>
//       <h2>{message}</h2>
//       <p>Session : {sessionNumber}</p>
//       {children}
//     </div>
//   );
// };

export const  FunctionComponent2 = ({ style, message, sessionNumber, children }) => {
  
  const myStyle = {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    marginBottom: '10px',
    ...style,
  };

  return (
    <div style={myStyle}>
      <h2>{message}</h2>
      <p>Session : {sessionNumber}</p>
      {children}
    </div>
  );
};
