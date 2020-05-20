class MyHead extends React.Component{
    render(){
        return React.createElement("H1",null,"Hello Conponent");
    }
}


window.addEventListener("load",() =>{

  let myComponent = React.createElement(MyHead,null);
  
  ReactDOM.render(myComponent,document.body)

})