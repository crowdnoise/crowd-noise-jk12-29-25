export const viewport = {
  width: "device-width",
  initialScale: 1,
};
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.dot} />
          <span className={styles.title}>Crowd Noise</span>
        </div>

        <div className={styles.headerRight}>
          <span className={styles.pill}>Feed</span>
          <span className={styles.pill}>Marketplace</span>
          <span className={styles.pill}>Live</span>
          <span className={styles.pill}>Profile</span>
        </div>
      </header>
<div className={styles.debugMobile}>✅ MOBILE CSS UPDATED</div>

      <section className={styles.shell}>
        <aside className={styles.left}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Categories</div>
            <button className={styles.navBtn}>🏈 Sports</button>
            <button className={styles.navBtn}>🎵 Music</button>
            <button className={styles.navBtn}>🛍️ Marketplace</button>
            <button className={styles.navBtn}>📺 Live</button>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Trending</div>
            <div className={styles.small}>#NFL</div>
            <div className={styles.small}>#NBA</div>
            <div className={styles.small}>#NewMusic</div>
            <div className={styles.small}>#SidelineMarket</div>
          </div>
        </aside>

        <section className={styles.center}>
          <div className={styles.compose}>
            <div className={styles.composeTop}>
              <div className={styles.avatar}>CN</div>
              <input className={styles.input} placeholder="Post a rant, a take, or drop a link…" />
            </div>
            <div className={styles.composeBottom}>
              <div className={styles.actions}>
                <button className={styles.actionBtn}>📷 Photo</button>
                <button className={styles.actionBtn}>🎥 Video</button>
                <button className={styles.actionBtn}>🎙️ Audio</button>
                <button className={styles.actionBtn}>🧾 List</button>
              </div>
              <button className={styles.postBtn}>Post</button>
            </div>
          </div>

          <div className={styles.feed}>
            <Post user="@fan1" tag="Sports" text="That game last night was unreal. Refs tried to sell but the crowd stayed LOUD." time="2m" />
            <Post user="@musichead" tag="Music" text="This album is on repeat. If you haven’t heard track 4 yet… do it." time="8m" />
            <Post user="@sidelineMarket" tag="Marketplace" text="🔥 New listings: tools, jerseys, and an ATV just dropped. Marketplace is live." time="20m" />
            <Post user="@crowdnoise" tag="Live" text="Going LIVE tonight for the game thread — bring the noise." time="1h" />
          </div>
        </section>

        <aside className={styles.right} style={{ display: "none" }}>

          <div className={styles.card}>
            <div className={styles.cardTitle}>LIVE</div>
            <div className={styles.liveBox}>
              <div className={styles.liveTop}>
                <span className={styles.liveDot} />
                <span className={styles.liveText}>LIVE NOW</span>
              </div>
              <div className={styles.liveTitle}>Game Thread: Talk + Reactions</div>
              <div className={styles.small}>Join the room • 128 watching</div>
              <button className={styles.joinBtn}>Join Live</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardTitle}>Marketplace Spotlight</div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Used ATV (clean)</div>
              <div className={styles.small}>$2,450 • 12 miles away</div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Tool Set (new)</div>
              <div className={styles.small}>$90 • 5 miles away</div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemTitle}>Team Hoodie</div>
              <div className={styles.small}>$35 • 2 miles away</div>
            </div>
            <button className={styles.shopBtn}>Open Marketplace</button>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Post({ user, tag, text, time }) {
  return (
    <article className={styles.post}>
      <div className={styles.postLeft}>
        <div className={styles.avatarSm}>{user.slice(1, 3).toUpperCase()}</div>
      </div>
      <div className={styles.postBody}>
        <div className={styles.postTop}>
          <div className={styles.postUser}>
            <span className={styles.user}>{user}</span>
            <span className={styles.tag}>{tag}</span>
          </div>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.postText}>{text}</div>
        <div className={styles.postBottom}>
          <button className={styles.reaction}>👍</button>
          <button className={styles.reaction}>💬</button>
          <button className={styles.reaction}>↗️</button>
          <button className={styles.reaction}>⋯</button>
        </div>
      </div>
    </article>
  );
}
