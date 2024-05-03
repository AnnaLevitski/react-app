interface Props {
  heading: string;
  isShown: boolean;
}
const Placeholder = ({ heading, isShown }: Props) => {
  return (
    isShown && (
      <p>
        Some placeholder content in a paragraph relating to "{heading}
        ".
      </p>
    )
  );
};

export default Placeholder;
