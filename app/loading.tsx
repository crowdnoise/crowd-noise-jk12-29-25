export default function Loading() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "#061a33",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <img
        src="/logo.png"
        alt="Crowd Noise loading"
        style={{
          width: 120,
          animation: "pulse 1.2s ease-in-out infinite"
        }}
      />

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}

