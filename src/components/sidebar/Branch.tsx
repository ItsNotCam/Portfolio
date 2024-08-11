type SpanProps = {
  icon: JSX.Element | undefined;
  name: string | undefined;
  className?: string;
  color?: string;
  selected?: boolean;
  indent?: string;
  disabled?: boolean;
  functional?: boolean;
}

export default function Branch(props: SpanProps){
  let color: string = props.color || "text-custom-text-300";
  color = props.selected ? "text-custom-orange" : color;

  return (
    <div
      className={`cursor-default ${!props.disabled &&
        props.functional &&
        "hover:bg-custom-off-dark-300 cursor-pointer"} ${props.selected && "bg-custom-off-dark-300"}`}
    >
      <span
        className={`relative flex flex-row items-center gap-1 p-1 ${props.className} ${!props.disabled && props.functional && "hover:text-custom-orange"} ${props.disabled ? "text-custom-off-dark-300" : color}`}
        style={{ marginLeft: props.indent || "0px" }}
      >
        {props.selected && (
          <div className="absolute -left-1 h-[80%] w-[0.18rem] bg-custom-red"></div>
        )}
        {props.icon}
        {props.name}
      </span>
    </div>
  );
};
