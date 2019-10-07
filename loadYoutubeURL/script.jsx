// Code goes here
var LoadVideo =React.createClass({
  submit: function(e) {
    e.preventDefault();
    var url = this.refs.url.value;
    if(!url){
      alert("Enter valid URL");
    }else{
      this.props.handleLoadUrl(url);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="Enter video url" ref="url"/>
        <button>Load URL</button>        
      </form>  
    );
  }  
});

var ShowVideo = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Load video url</h3>
        <iframe width="400" height="315" src={this.props.url} frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen/>
        <a href={this.props.url} target="_blank">{this.props.url}</a>                
      </div>
    );
  }
});

var LoadFrame =React.createClass({
  getInitialState: function() {
    return {
      url: "https://www.youtube.com/embed/vXK7Gy1E5-Y",      
    }
  },
  loadUrl: function(url) {
    this.setState({
      url: url
    });
    // alert(url);
  },
  render: function() {
    return (
      <div>
        <LoadVideo handleLoadUrl={this.loadUrl}/>  
        <ShowVideo url={this.state.url}/>
      </div>
    );
  }  
});

React.render(<LoadFrame/>, document.getElementById("root"));

