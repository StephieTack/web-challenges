import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
import { USERS } from "../db";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul key={user.id} className="card__taglist">
        {user.roles.map((role, id) => (
          <Tag key={id} tag={role} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
