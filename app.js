// TODO
var GroceryList = (props) => (
  <ul>
    {props.foods.map(food =>
      <GroceryListItem food={food} />
    )}
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onItemHover() {
    this.setState({
      hover: true
    });
  }

  onItemExit() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseOver={this.onItemHover.bind(this)} onMouseOut={this.onItemExit.bind(this)}>{this.props.food}</li>
    );
  }
}

ReactDOM.render(<GroceryList foods={['Waffles', 'Maple Syrup']}/>, document.getElementById("app"));


// var Waffles = () => (
//   <li>Waffles</li>
// );

// var MapleSyrup = () => (
//   <li>Maple Syrup</li>
// );