export default function formReducer(state, action) {
  switch (action.type) {
    case "change_name":
      return {
        ...state,
        name: action.name,
      };
    case "change_email":
      return {
        ...state,
        email: action.email,
      };
    case "reset":
      return {
        name: "",
        email: "",
      };
    case "restore":
      return {
        ...action.data,
      };
    default:
      throw Error("Unknown action type");
  }
}
