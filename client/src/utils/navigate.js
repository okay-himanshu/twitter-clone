import { useNavigate } from "react-router-dom";

export const navigateTo = (path) => {
  const navigate = useNavigate();
  navigate(path);
};
