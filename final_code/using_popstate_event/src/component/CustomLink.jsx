import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PopstateContext } from "../context/PopstateContext";
export default function CustomLink({ children, ...props }) {
  const { onClick: passedClickHandler, to: path, formData, ...slicedProps } = props;
  const navigate = useNavigate();
  const prevPopStateHandler = useContext(PopstateContext);
  const location = useLocation();
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        if (prevPopStateHandler.current) {
          let navigateTo;
          navigateTo = prevPopStateHandler.current();
          if (navigateTo) {
            navigate(path);
            prevPopStateHandler.current = null;
            localStorage.setItem(location.pathname, JSON.stringify(formData));
          }
        } else {
          navigate(path);
        }
        passedClickHandler?.(e);
      }}
      {...slicedProps}
    >
      {children}
    </Link>
  );
}
