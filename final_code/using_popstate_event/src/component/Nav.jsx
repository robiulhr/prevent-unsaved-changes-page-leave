import CustomLink from "./CustomLink";
export default function Nav() {
  return (
    <nav>
      <CustomLink to={"/"}>Home</CustomLink>
      <CustomLink to={"/profile"}>Profile</CustomLink>
    </nav>
  );
}
