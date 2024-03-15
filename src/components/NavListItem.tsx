import icon from "../images/nav-icon.svg";

export type NavListItemProps = {
  active: boolean;
  handleClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  children?: React.ReactNode;
};
export default function NavListItem({
  active = false,
  handleClick,
  children,
}: NavListItemProps) {
  return (
    <li
      className={`App-link ${active ? "active" : ""}`}
      onClick={(event: React.MouseEvent<HTMLLIElement>) =>
        handleClick && handleClick(event)
      }
    >
      <img src={icon} className="icon" alt="" />
      {children && children}
    </li>
  );
}
