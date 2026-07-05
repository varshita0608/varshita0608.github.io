import "../styles/section.css";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">

      <p>{subtitle}</p>

      <h1>{title}</h1>

    </div>
  );
}