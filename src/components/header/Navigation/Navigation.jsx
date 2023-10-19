import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const headerItems = [
    { id: 1, label: "about" },
    { id: 2, label: "skills" },
    { id: 3, label: "experience" },
    { id: 4, label: "contact" },
  ];
  const getHeaders = () =>
    headerItems.map((item) => (
      <li className="nav-item" key={item.id}>
        <a
          id={`${item.label}Btn`}
          className="nav-link active me-1"
          aria-current="page"
          rel="noopener noreferrer"
        >
          {t(item.label)}
        </a>
      </li>
    ));
  return <ul className="navbar-nav ms-auto mb-lg-0 fs-5">{getHeaders()}</ul>;
};

export default Navigation;
