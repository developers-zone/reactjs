// Code goes here

// Dynamic array update to create product with Form view
var ProductForm = React.createClass({
  submit: function(e){
    e.preventDefault();
    // alert("Name: " +this.refs.name.value +"  -  $"+this.refs.price.value);
    
    var product = {
      name : this.refs.name.value,
      price : parseInt(this.refs.price.value)
    }
    if(this.refs.name.value!="" && this.refs.price.value!=NaN){
      this.props.handleCreate(product);
    }else{
      alert("Error : Value entry issue. Please try again.")
    }
    
    this.refs.name.value = "";
    this.refs.price.value = "";
  },
  
  render: function() {
    return (
        <form onSubmit={this.submit}>
          <input type="text" ref="name" placeholder="Name"/> - 
          <input type="text" ref="price" placeholder="Price"/>
          <br/>
          <button>Create Product</button>
        </form>
    );
  }  
});

var Product = React.createClass({
  getInitialState: function(){
    return {qty: 0};
  },
  
  buy: function(){
    this.setState({qty: this.state.qty + 1});
    // alert("You selected android "); 
    
//     Call to component ProductList, method calculateTotal
    this.props.handleTotal(this.props.price);
  },
  
  show: function(){
    this.props.handleShow(this.props.name);
  },
  
  render: function(){
    return(
      <div>
        <p>{this.props.name} - ${this.props.price}</p>
        <button onClick={this.buy}>Buy</button>
        <button onClick={this.show}>Show</button>
        <h3>QTY : {this.state.qty} item(s)</h3>
        <hr/>        
      </div>
    );
  }
});

var Total = React.createClass({
  
  render: function() {
    return(
      <div>
        <h3>Total Cash : {this.props.total}</h3>
      </div>
    );
  }
});

var ProductList = React.createClass({
  getInitialState: function() {
    return {
      total: 0,
      productlist:[
        {name:"Asus", price:10},
        // {name:"Apple", price:10},
        // {name:"Dell", price:10}
      ]
    };
  },
  
  createProduct: function(product){
    this.setState({
      productlist: this.state.productlist.concat(product)
    })
  },
  
  calculateTotal: function(price) {
    this.setState({total: this.state.total + price});
    // alert(this.state.total);
  },
  showProduct: function(name) {
    alert("you selected " + name);
  },
  
  render: function() {
    var component = this;
    var products = this.state.productlist.map(function(product) {
      return (
        <Product name={product.name} price={product.price} 
                 handleShow={component.showProduct}
                 handleTotal={component.calculateTotal}/>
      );
    });
    
    return(
      <div>
        <ProductForm handleCreate={this.createProduct}/>
        {products}
        <Total total={this.state.total}/>
      </div>
    );
  }
});

React.render(<ProductList/>, document.getElementById("root"));


// React.render(
//   <h1>Rendered from script.jsx!</h1>,
//   document.getElementById('example')
// );


        // <Product name="Android" price={100} 
        //         handleShow={this.showProduct}
        //         handleTotal={this.calculateTotal}/>
        // <Product name="Dell" price={200}
        //         handleShow={this.showProduct}
        //         handleTotal={this.calculateTotal}/>
        // <Product name="Asus" price="500" 
        //         handleShow={this.showProduct}
        //         handleTotal={this.calculateTotal}/>
