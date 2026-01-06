export default function HomePage() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="logoDot" />
          <div className="brandText">
            <div className="brandName">CROWD NOISE</div>
            <div className="brandTag">WHERE FANS GET LOUD</div>
          </div>
        </div>

        <nav className="nav">
          <a className="navItem active">Home</a>
          <a className="navItem">Sideline Market</a>
          <a className="navItem">Explore</a>
          <a className="navItem">Profile</a>
        </nav>
      </header>

      <main className="wrap">
        <div className="hero">
          <div className="pill">⚡ Your sports, music & outdoor community</div>
          <h1 className="h1">Crowd Noise</h1>
          <p className="sub">
            Connect with fellow enthusiasts. No politics, just passion.
          </p>

          <div className="chips">
            <button className="chip active">🔥 For You</button>
            <button className="chip">🏈 Sports</button>
            <button className="chip">🌲 Outdoors</button>
            <button className="chip">🎵 Music</button>
          </div>
        </div>

        <section className="feed">
          <article className="card">
            <div className="cardHead">
              <div className="avatar">T</div>
              <div>
                <div className="nameRow">
                  <strong>Trail Runner</strong>
                  <span className="badge">🌲 Outdoors</span>
                </div>
                <div className="meta">@outdoors · 3h</div>
              </div>
            </div>

            <p className="cardText">
              Just finished an amazing trail run at the canyon! 🏃‍♂️ The sunrise
              views were absolutely breathtaking. Anyone else love early morning runs?
            </p>

            <div className="media" />
          </article>
        </section>
      </main>
    </div>
  );
}
