import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/"); 
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <h2 className="text-2xl font-semibold">Logging you in via Google...</h2>
    </div>
  );
};

export default OAuthRedirect;
