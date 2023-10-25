import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigationRef } from "../context/NavigationRefContext";
export default function CustomLink({ children, ...props }) {
  const { onClick: passedClickHandler, to: path, ...slicedProps } = props;
  const navigate = useNavigate();
  const { unblockNavigationRef, blockHandlerRef } = useContext(NavigationRef);
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
