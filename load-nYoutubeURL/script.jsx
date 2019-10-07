// Code goes here
var LoadVideo =React.createClass({
  submit: function(e) {
    e.preventDefault();
    var urlList = {
      url: this.refs.url.value,
    };
    this.props.handleLoadUrl(urlList);
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
        <iframe width="400" height="101" src={this.props.url} frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen/>
        <a href={this.props.url} target="_blank">{this.props.url}</a>
        <hr/>
      </div>
    );
  }
});

var LoadFrame =React.createClass({
  getInitialState: function() {
    return {
      urlList: [
        {url: "https://www.youtube.com/embed/PlAY2AaVJFY"},
        {url: "https://www.youtube.com/embed/vXK7Gy1E5-Y"},
      ]
    }
  },
  loadUrl: function(urlList) {
    this.setState({
      urlList: this.state.urlList.concat(urlList)
    });
  },
  render: function() {
    // var component = this;
    var url_frame = this.state.urlList.map(function(urlList){
      return (
        <ShowVideo url={urlList.url}/>
      );
    });
    
    return (
      <div>
        <LoadVideo handleLoadUrl={this.loadUrl}/>
        <h3>Load video url</h3>
        {url_frame}
      </div>
    );
  }  
});

React.render(<LoadFrame/>, document.getElementById("root"));

