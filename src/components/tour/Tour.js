import React from "react";
import "./tour.scss";


class Tour extends React.Component{
constructor(){
  super();
    this.state={
      showinfo:false
    }
    this.handleClick=this.handleClick.bind(this);
}

  handleClick=()=> {
    this.setState({

      showinfo:!this.state.showinfo
    })
  }



  render(){
    const {id,city,img,name,info}=this.props.tour;
    const {removeTour}=this.props;
    let textinfo=this.state.showinfo ? this.props.tour.info:"";
    return (
      <article className="tour">
      <div className="img-container">
      <img src={img} alt=""/>
<span className="close-btn" onClick={()=>{
  removeTour(id);
}}
>
<i className="fas fa-window-close"></i>
</span>

</div>
<div className="tour-info">
<h3>{city}</h3>
<h4>{name}</h4>
<h5><span  onClick={this.handleClick}><i className="fas fa-caret-square-down"/></span></h5>
{this.state.showinfo}
 <p>{textinfo}</p>

</div>
      </article>
    );
  }
}

export default Tour;
