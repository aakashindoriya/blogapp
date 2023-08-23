import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Private({ children }) {
  const { isAuth } = useSelector((s) => s.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return children;
}

export default Private;
