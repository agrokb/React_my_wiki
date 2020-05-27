class MyHead extends React.Component{
    render(){
        console.log(this.props.level)
        return React.createElement("h"+this.props.level,null,"Hello Conponent");
    }
}
class MyHeadList extends React.Component{
  render(){
    let heads = [];
    let head;
    for(let i=1;i<6;i++){
      head = React.createElement(MyHead,{level:i});
      heads.push(head)
    }
    return React.createElement("DIV",null,heads)
  }
}

window.addEventListener("load",() =>{

  let myComponent = React.createElement(MyHeadList,null);
  
  ReactDOM.render(myComponent,document.body)

})