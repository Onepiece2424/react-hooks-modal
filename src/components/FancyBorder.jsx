const FancyBorder = (props) => {
  console.log(props)
  console.log(props.children)
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

export default FancyBorder;
