import {
  FACEBOOK_CHARACTER_LIMIT,
  INSTAGRAM_CHARACTER_LIMIT,
} from "../lib/constants";

export default function Stats({ text }) {
  const numberOfWords = text.split(" ").filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  const instagramCharacterLeft = INSTAGRAM_CHARACTER_LIMIT - text.length;
  const facebookCharacterLeft = FACEBOOK_CHARACTER_LIMIT - text.length;

  return (
    <section className="stats">
      <Stat label="Words" value={numberOfWords} />
      <Stat label="Characters" value={numberOfCharacters} />
      <Stat label="Instagram" value={instagramCharacterLeft} />
      <Stat label="Facebook" value={facebookCharacterLeft} />
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${value < 0 ? "stat__number--limit" : ""}`}
      >
        {value}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
