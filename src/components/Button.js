function Button(props) {
  return (
    <button
      type="button"
      className={`btn btn-outline-${props.color} d-inline-block w-100 text-center`}
      onClick={props.onclick}
    >
      {props.text}
    </button>
  );
}

export default Button;
