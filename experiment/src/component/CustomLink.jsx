import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PopstateContext } from "../context/PopstateContext";
export default function CustomLink({ children, ...props }) {
  const { onClick: passedClickHandler, to: path, ...slicedProps } = props;
  const navigate = useNavigate();
  const { prevPopStateHandler, setPrevPopStateHandler } = useContext(PopstateContext);
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        if (prevPopStateHandler) {
          let navigateTo;
          navigateTo = prevPopStateHandler && prevPopStateHandler();
          if (navigateTo) {
            navigate(path);
            setPrevPopStateHandler(null);
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
