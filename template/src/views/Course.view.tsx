import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Course() {
  let { id } = useParams<"id">();
  return (
    <div>
      <h2>
        Welcome to the {id!.split("-").map(capitalizeString).join(" ")} course!
      </h2>

      <p>This is a great course. You're gonna love it!</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}
function capitalizeString(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
