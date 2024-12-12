function Badge({ state, badgestyle = "text-bg-warning" }) {
  return <span className={`badge rounded-pill ${badgestyle}`}>{state}</span>;
}

export default Badge;
