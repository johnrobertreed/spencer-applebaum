export default function NewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="new-shell">
      <div className="new-shell-inner">{children}</div>
    </div>
  );
}
