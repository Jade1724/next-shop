function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm text-grey-600">{label}</span>
      {children}
    </label>
  );
}

export default Field;
