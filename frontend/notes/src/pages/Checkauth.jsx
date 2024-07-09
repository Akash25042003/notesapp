import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const CheckAuth = ({ setIsAuthenticated }) => {
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/users/check-auth", {
      method: "GET",
      credentials: 'include'
    })
      .then((res) => res.json())
      .then(data => {
        if (data.message === "Authenticated") {
          setIsAuthenticated(true);
          history.push('/allnotes');
        } else {
          setIsAuthenticated(false);
          history.push('/login');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setIsAuthenticated(false);
        history.push('/login');
      });
  },);

  return null;
};

export default CheckAuth;




