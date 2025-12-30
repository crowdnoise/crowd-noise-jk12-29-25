export default function Home() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.brand}>
          <span style={styles.dot} />
          <span style={styles.title}>Crowd Noise</span>
        </div>

        <div style={styles.headerRight}>
          <span style={styles.pill}>Feed</span>
          <span style={styles.pill}>Marketplace</span>
          <span style={styles.pill}>Live</span>
          <span style={styles.pill}>Profile</span>
        </div>
      </header>

      <section style={styles.shell}>
        <aside style={styles.left}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Categories</div>
            <button style={styles.navBtn}>🏈 Sports</button>
            <button style={styles.navBtn}>🎵 Music</button>
            <button style={styles.navBtn}>🛍️ Marketplace</button>
            <button style={styles.navBtn}>📺 Live</button>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Trending</div>
            <div style={styles.small}>#NFL</div>
            <div style={styles.small}>#NBA</div>
            <div style={styles.small}>#NewMusic</div>
            <div style={styles.small}>#SidelineMarket</div>
          </div>
        </aside>

        <section style={styles.center}>
          <div style={styles.compose}>
            <div style={styles.composeTop}>
              <div style={styles.avatar}>CN</div>
              <input style={styles.input} placeholder="Post a rant, a take, or drop a link…" />
            </div>
            <div style={styles.composeBottom}>
              <div style={styles.actions}>
                <button style={styles.actionBtn}>📷 Photo</button>
                <button style={styles.actionBtn}>🎥 Video</button>
                <button style={styles.actionBtn}>🎙️ Audio</button>
                <button style={styles.actionBtn}>🧾 List</button>
              </div>
              <button style={styles.postBtn}>Post</button>
            </div>
          </div>

          <div style={styles.feed}>
            <Post
              user="@fan1"
              tag="Sports"
              text="That game last night was unreal. Refs tried to sell but the crowd stayed LOUD."
              time="2m"
            />
            <Post
              user="@musichead"
              tag="Music"
              text="This album is on repeat. If you haven’t heard track 4 yet… do it."
              time="8m"
            />
            <Post
              user="@sidelineMarket"
              tag="Marketplace"
              text="🔥 New listings: tools, jerseys, and an ATV just dropped. Marketplace is live."
              time="20m"
            />
            <Post
              user="@crowdnoise"
              tag="Live"
              text="Going LIVE tonight for the game thread — bring the noise."
              time="1h"
            />
          </div>
        </section>

        <aside style={styles.right}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>LIVE</div>
            <div style={styles.liveBox}>
              <div style={styles.liveTop}>
                <span style={styles.liveDot} />
                <span style={styles.liveText}>LIVE NOW</span>
              </div>
              <div style={styles.liveTitle}>Game Thread: Talk + Reactions</div>
              <div style={styles.small}>Join the room • 128 watching</div>
              <button style={styles.joinBtn}>Join Live</button>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>Marketplace Spotlight</div>
            <div style={styles.item}>
              <div style={styles.itemTitle}>Used ATV (clean)</div>
              <div style={styles.small}>$2,450 • 12 miles away</div>
            </div>
            <div style={styles.item}>
              <div style={styles.itemTitle}>Tool Set (new)</div>
              <div style={styles.small}>$90 • 5 miles away</div>
            </div>
            <div style={styles.item}>
              <div style={styles.itemTitle}>Team Hoodie</div>
              <div style={styles.small}>$35 • 2 miles away</div>
            </div>
            <button style={styles.shopBtn}>Open Marketplace</button>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Post({ user, tag, text, time }) {
  return (
    <article style={styles.post}>
      <div style={styles.postLeft}>
        <div style={styles.avatarSm}>{user.slice(1, 3).toUpperCase()}</div>
      </div>
      <div style={styles.postBody}>
        <div style={styles.postTop}>
          <div style={styles.postUser}>
            <span style={styles.user}>{user}</span>
            <span style={styles.tag}>{tag}</span>
          </div>
          <span style={styles.time}>{time}</span>
        </div>
        <div style={styles.postText}>{text}</div>
        <div style={styles.postBottom}>
          <button style={styles.reaction}>👍</button>
          <button style={styles.reaction}>💬</button>
          <button style={styles.reaction}>↗️</button>
          <button style={styles.reaction}>⋯</button>
        </div>
      </div>
    </article>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #061a33 0%, #071f3d 35%, #06254b 100%)",
    color: "white",
    fontFamily:
      'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
    overflowX: "hidden",      // ✅ key for mobile
    maxWidth: "100vw",        // ✅ key for mobile
  },

  header: {
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 18px",
    borderBottom: "1px solid rgba(135, 196, 255, 0.25)",
    background: "rgba(0,0,0,0.15)",
    position: "sticky",
    top: 0,
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },

  brand: { display: "flex", alignItems: "center", gap: 10 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "#ff2d2d",
    boxShadow: "0 0 0 3px rgba(255,45,45,0.18)",
  },
  title: { fontWeight: 800, letterSpacing: 0.4 },

  headerRight: { display: "flex", gap: 8, flexWrap: "wrap" },
  pill: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(135, 196, 255, 0.25)",
    background: "rgba(9, 25, 48, 0.35)",
    fontSize: 12,
    fontWeight: 700,
  },

  // ✅ This is the real fix: flexWrap + flexible columns
  shell: {
    display: "flex",
    flexWrap: "wrap",
    gap: 24,
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
    padding: 12,
    boxSizing: "border-box",
  },

  left: {
    flex: "1 1 260px",
    minWidth: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  center: {
    flex: "2 1 520px",
    minWidth: 0,              // ✅ prevents overflow on phones
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  right: {
    flex: "1 1 320px",
    minWidth: 0,
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },

  card: {
    border: "1px solid rgba(135, 196, 255, 0.22)",
    background: "rgba(9, 25, 48, 0.35)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },
  cardTitle: { fontWeight: 800, marginBottom: 10, letterSpacing: 0.2 },

  navBtn: {
    width: "100%",
    textAlign: "left",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.15)",
    color: "white",
    cursor: "pointer",
    marginBottom: 8,
    fontWeight: 700,
  },

  small: { opacity: 0.85, fontSize: 13, marginBottom: 6 },

  compose: {
    border: "1px solid rgba(135, 196, 255, 0.25)",
    background: "rgba(9, 25, 48, 0.35)",
    borderRadius: 16,
    padding: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  composeTop: { display: "flex", gap: 10, alignItems: "center" },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "rgba(255,45,45,0.18)",
    border: "1px solid rgba(255,45,45,0.35)",
  },

  input: {
    flex: 1,
    height: 42,
    borderRadius: 14,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.18)",
    color: "white",
    padding: "0 12px",
    outline: "none",
    fontSize: 14,
    minWidth: 0, // ✅ prevents overflow in flex row
  },

  composeBottom: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap", // ✅
  },

  actions: { display: "flex", gap: 8, flexWrap: "wrap" },

  actionBtn: {
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.15)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 12,
  },

  postBtn: {
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid rgba(255,45,45,0.45)",
    background: "#ff2d2d",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  feed: { display: "flex", flexDirection: "column", gap: 12 },

  post: {
    display: "flex",
    gap: 10,
    padding: 14,
    borderRadius: 16,
    border: "1px solid rgba(135, 196, 255, 0.22)",
    background: "rgba(9, 25, 48, 0.35)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    minWidth: 0, // ✅
  },

  postLeft: { paddingTop: 2 },

  avatarSm: {
    width: 36,
    height: 36,
    borderRadius: 14,
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    background: "rgba(135, 196, 255, 0.14)",
    border: "1px solid rgba(135, 196, 255, 0.24)",
  },

  postBody: { flex: 1, minWidth: 0 },

  postTop: { display: "flex", justifyContent: "space-between", gap: 10 },

  postUser: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" },

  user: { fontWeight: 900 },

  tag: {
    fontSize: 12,
    fontWeight: 800,
    padding: "4px 8px",
    borderRadius: 999,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.15)",
    opacity: 0.95,
  },

  time: { fontSize: 12, opacity: 0.8, fontWeight: 700 },

  postText: { marginTop: 8, lineHeight: 1.35, opacity: 0.95 },

  postBottom: { marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" },

  reaction: {
    width: 40,
    height: 34,
    borderRadius: 12,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.15)",
    color: "white",
    cursor: "pointer",
    fontWeight: 900,
  },

  liveBox: {
    borderRadius: 14,
    border: "1px solid rgba(255,45,45,0.28)",
    background: "rgba(0,0,0,0.15)",
    padding: 12,
  },

  liveTop: { display: "flex", alignItems: "center", gap: 8, marginBottom: 8 },

  liveDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    background: "#ff2d2d",
    boxShadow: "0 0 0 3px rgba(255,45,45,0.18)",
  },

  liveText: { fontWeight: 900, letterSpacing: 0.3 },

  liveTitle: { fontWeight: 900, marginBottom: 6 },

  joinBtn: {
    width: "100%",
    marginTop: 10,
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(255,45,45,0.45)",
    background: "#ff2d2d",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },

  item: {
    padding: "10px 10px",
    borderRadius: 14,
    border: "1px solid rgba(135, 196, 255, 0.18)",
    background: "rgba(0,0,0,0.15)",
    marginBottom: 10,
  },

  itemTitle: { fontWeight: 900, marginBottom: 4 },

  shopBtn: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 14,
    border: "1px solid rgba(135, 196, 255, 0.28)",
    background: "rgba(135, 196, 255, 0.12)",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
  },
};
