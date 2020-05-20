console.log("React:",React)
console.log("ReactDOM",ReactDOM)
window.addEventListener("load",() =>{

  let reactElement = React.createElement("H1",null,"Hello World");

  ReactDOM.render(
      reactElement, document.body
  );

})