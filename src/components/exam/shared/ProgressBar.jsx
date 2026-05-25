export default function ProgressBar({ current, total, color }) {
  return (
    <div style={{ background: "#1e293b", borderRadius: 99, height: 6, marginBottom: 24 }}>
      <div
        style={{
          background: color,
          width: `${(current / total) * 100}%`,
          height: "100%",
          borderRadius: 99,
          transition: "width 0.4s ease",
          boxShadow: `0 0 10px ${color}88`,
        }}
      />
    </div>
  );
}