import { useMemo, useState } from "react";

export function ProtectedPhoneLink({
  label = "Call or text",
  className = "",
  revealClassName = "",
}) {
  const [revealed, setRevealed] = useState(false);
  const phoneParts = useMemo(() => ["647", "832", "1081"], []);
  const phone = phoneParts.join("");
  const displayPhone = phoneParts.join("-");

  const handleClick = () => {
    setRevealed(true);
    window.location.href = `tel:${phone}`;
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      <span>{label}</span>
      {revealed ? <span className={revealClassName}>{displayPhone}</span> : null}
    </button>
  );
}
