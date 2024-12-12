import Badge from "./Badge";
function Header() {
  return (
    <header className="text-bg-info p-3">
      <h1>Task Manager</h1>
      <Badge state="pippo" />
    </header>
  );
}

export default Header;
