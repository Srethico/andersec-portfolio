import "./GlowCard.css";

export default function GlowCard({ title }) {
  return (
    <div className="glow-card">
      <span>{title}</span>
    </div>
  );
}
