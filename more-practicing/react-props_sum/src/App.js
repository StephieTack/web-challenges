import React from "react";
import "./styles.css";

export default function App() {
  return <UserCard name="Stephie" isFavorite />;
}

function UserCard({ name, isFavorite }) {
  return (
    <div>
      {name}
      {isFavorite ? <span>🌟</span> : null}
    </div>
  );
}
