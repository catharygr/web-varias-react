export default function NotificacionesPaginas() {
  return (
    <main className="main-block">
      <header className="block-header">
        <span className="block-header__notifications">
          <span className="block-header__notifications-text">
            Notifications
          </span>
          <span className="block-header__notifications-number">3</span>
        </span>
        <span className="block-header__markall">Mark all as read</span>
      </header>

      <div className="block-notifications__type01 block-notifications--notread">
        <div className="user-img-01"></div>
        <div>
          <p>
            <span className="user-name">Mark Webber</span>
            <span className="user-action"> reacted to your recent post </span>
            <span className="user-post">My first tournament today!</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">1m ago</p>
        </div>
      </div>

      <div className="block-notifications__type01 block-notifications--notread">
        <div className="user-img-02"></div>
        <div>
          <p>
            <span className="user-name">Angela Gray</span>
            <span className="user-action"> followed you</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">5m ago</p>
        </div>
      </div>

      <div className="block-notifications__type01 block-notifications--notread">
        <div className="user-img-03"></div>
        <div>
          <p>
            <span className="user-name">Jacob Thompson</span>
            <span className="user-action"> has joined your group </span>
            <span className="user-group">Chess Club</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">1 day ago</p>
        </div>
      </div>

      <div className="block-notifications__type01 block-notifications--read">
        <div className="user-img-04"></div>
        <div>
          <p>
            <span className="user-name">Rizky Hasanuddin</span>
            <span className="user-action"> sent you a private message</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">5 days ago</p>
        </div>

        <div className="block-notifications__type02-c">
          <div className="block-notifications__type02 block-notifications--read">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I am already having lots of fun and improving my
            game.
          </div>
        </div>
      </div>

      <div className="block-notifications__type01 block-notifications--read">
        <div className="user-img-05"></div>
        <div>
          <p>
            <span className="user-name">Kimberly Smith</span>
            <span className="user-action"> commented on your picture</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">1 week ago</p>
        </div>
        <div className="user-img-08"></div>
      </div>

      <div className="block-notifications__type01 block-notifications--read">
        <div className="user-img-06"></div>
        <div>
          <div>
            <span className="user-name">Nathan Peterson</span>
            <span className="user-action"> reacted to your recent post </span>
            <span className="user-post">
              5 end-game strategies to increase your win rate
            </span>
            <span className="red-mark"></span>
            <p className="user-date">2 weeks ago</p>
          </div>
        </div>
      </div>

      <div className="block-notifications__type01 block-notifications--read">
        <div className="user-img-07"></div>
        <div>
          <p>
            <span className="user-name">Anna Kim</span>
            <span className="user-action"> left the group </span>
            <span className="user-group">Chess Club</span>
            <span className="red-mark"></span>
          </p>
          <p className="user-date">2 weeks ago</p>
        </div>
      </div>
    </main>
  );
}
