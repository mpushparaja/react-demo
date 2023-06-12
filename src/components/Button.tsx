interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onclicked: () => void;
}
const Button = ({ children, onclicked, color }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onclicked}>
      {children}
    </div>
  );
};

export default Button;
