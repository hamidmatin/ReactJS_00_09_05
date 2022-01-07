export const login = (user, pass) => {
  if (user === 'user' && pass === '1234') {
    localStorage.setItem('login', 'true');
  }
};

export const logout = () => {
  localStorage.removeItem('login');
};

export const isAuth = () => {
  const login = localStorage.getItem('login')
  console.log(login)
  return login
};
