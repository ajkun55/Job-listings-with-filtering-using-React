function Selectors(props) {
  return (
    <div
      className="selectors-container"
      style={{
        visibility: props.selectors.length === 0 ? "hidden" : "visible",
      }}
    >
      <div className="left-part row">
        {props.selectors.map((s) => (
          <span key={s} className="row">
            <p className="item">{s}</p>
            <button
              onClick={() => props.removeSelector(s)}
              className="remove-btn"
            >
              <img src="/images/icon-remove.svg" alt="" />
            </button>
          </span>
        ))}
      </div>

      {props.selectors.length > 0 ? (
        <button onClick={props.clear} className="clear">
          clear
        </button>
      ) : null}
    </div>
  );
}

export default Selectors;
