import "./App.css";

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://media.tenor.com/4SDHUD79ixkAAAAM/me%C3%B8wmiing-sargentmeowww.gif"
          alt="cat-profile"
        />
        <div className="tw-followCard-info">
          <strong>Mi amorcito</strong>
          <span className="tw-followCard-infoUserName">@MaiLove</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
