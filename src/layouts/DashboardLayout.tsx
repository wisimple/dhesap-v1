import { Link, NavLink, useRouteMatch } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const { url } = useRouteMatch();
  return (
    <>
      <div className="appbar">
        <div className="logo">dhesap</div>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list__item">
            <NavLink to={`${url}`} exact activeClassName="active">
              <i className="ri-home-2-fill"></i> Genel Bakış
            </NavLink>
          </li>
          <li className="menu__list__item">
            <NavLink to={`${url}/categories`} activeClassName="active">
              <i className="ri-stack-fill"></i> Kategoriler
            </NavLink>
          </li>
          <li className="menu__list__item">
            <NavLink to={`${url}/accounts`} activeClassName="active">
              <i className="ri-wallet-fill"></i> Hesaplar
            </NavLink>
          </li>
          <li className="menu__list__item">
            <NavLink to={`${url}/settings`} activeClassName="active">
              <i className="ri-settings-fill"></i> Ayarlar
            </NavLink>
          </li>
          <li className="menu__list__item">
            <button>
              <i className="ri-logout-box-fill"></i> Çıkış Yap
            </button>
          </li>
        </ul>
      </nav>
      <main className="main">
        <div className="content">{children}</div>
        <footer className="footer">dhesap</footer>
      </main>
    </>
  );
};

export default DashboardLayout;
