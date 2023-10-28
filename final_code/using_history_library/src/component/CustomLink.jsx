import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationRef } from "../context/NavigationRefContext";
export default function CustomLink({ children, ...props }) {
  const { onClick: passedClickHandler, to: path, formData, ...slicedProps } = props;
  const navigate = useNavigate();
  const { unblockNavigationRef, blockHandlerRef } = useContext(NavigationRef);
  const location = useLocation();
  return (
    <Link
      onClick={(e) => {
        e.preventDefault();
        if (unblockNavigationRef.current && blockHandlerRef.current) {
          const confirmed = confirm("are you sure?");
          if (confirmed) {
            navigate(path);
            unblockNavigationRef.current();
            unblockNavigationRef.current = null;
            blockHandlerRef.current = null;
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
