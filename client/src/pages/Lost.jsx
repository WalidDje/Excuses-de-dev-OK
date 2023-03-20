import React from "react";
import { useNavigate } from "react-router-dom";

function Lost() {

  const navigate = useNavigate();

  // Call navigate function after 5 seconds
  setTimeout(() => {
    navigate('/');
  }, 5000);

    return (
      <div>
        <iframe title="giphy-embed" src="https://giphy.com/embed/Bp3dFfoqpCKFyXuSzP" width="480" height="480" className="giphy-embed" allowFullScreen />
        <p>
          You will be redirected to Homepage in 5 seconds ...
        </p>
      </div>
    );
  }
  
  export default Lost;