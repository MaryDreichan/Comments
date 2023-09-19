function Heroes(props) {
    return (
      <div className="heroes-card">
        <img src={props.url} alt="hero" />
        <div className="hero-name">{props.name}</div>
        <div className="hero-universe">{props.universe}</div>
        <div className="alterego">{props.alterego}</div>
        <div className="occupation">{props.occupation}</div>
        <div className="friends">{props.friends}</div>
        <div className="superpowers">{props.superpowers}</div>
        <div className="info">{props.info}</div>
      </div>
    );
  }
  
  export default Heroes;