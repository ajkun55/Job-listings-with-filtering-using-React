function Info(props) {
  const req = [props.role, props.level, ...props.languages, ...props.tools];
  return (
    <div
      className={
        props.featured ? "info-container featured-container" : "info-container"
      }
    >
      <div className="main-part">
        <img src={props.logo} alt="" className="logo" />

        <div className="content">
          <div className="row">
            <p className="company">{props.company}</p>
            <p className="new">{props.new ? "new!" : ""}</p>
            <p className="featured">{props.featured ? "featured" : ""}</p>
          </div>

          <p className="position">{props.position}</p>

          <div className="row sub-text">
            <p>{props.postedAt}</p>
            <span className="dot"></span>
            <p>{props.contract}</p>
            <span className="dot"></span>
            <p>{props.location}</p>
          </div>
        </div>
      </div>
      <div className="row">
        {req.map((r) => (
          <button key={r} className="item" onClick={() => props.addSelected(r)}>
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Info;
