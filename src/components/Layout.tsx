interface Props {
  isRow: boolean;
  children: any;
}

const Layout = ({ children, isRow }: Props) => {
  return isRow ? (
    <div className="row">{children}</div>
  ) : (
    <div className="col-8">{children}</div>
  );
};

export default Layout;
