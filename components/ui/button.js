export function Button({ children, ...props }) {
  return (
    <button
      style={{
        padding: '8px 12px',
        borderRadius: 4,
        border: 'none',
        background: '#333',
        color: '#fff',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
}
