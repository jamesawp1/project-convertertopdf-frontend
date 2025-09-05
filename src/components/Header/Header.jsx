import Navigation from "../Header/Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">News Explorer</h1>
      <Navigation/>
    </header>
  );
}