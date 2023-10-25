import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PopstateContext } from "../context/PopstateContext";
export default function CustomLink({ children, ...props }) {
  const { onClick: passedClickHandler, to: path, ...slicedProps } = props;
  const navigate = useNavigate();
  const prevPopStateHandler = useContext(PopstateContext);
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
