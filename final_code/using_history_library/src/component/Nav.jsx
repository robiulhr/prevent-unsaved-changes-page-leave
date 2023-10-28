import CustomLink from "./CustomLink";
export default function Nav({formData}) {
  return (
    <nav>
      <CustomLink formData={formData} to={"/"}>Home</CustomLink>
      <CustomLink formData={formData} to={"/profile"}>Profile</CustomLink>
    </nav>
  );
}
