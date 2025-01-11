
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CaptainLogout = () => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      });

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl">Logging out...</p>
        </div>
    );
};

export default CaptainLogout;