class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            totalTaps: 0
        }

    }
    handleDecrement = () => {
        if (this.state.count === 0) {
            this.setState({
                totalTaps: this.state.totalTaps + 1
            })
            return;
        }
        this.setState({
            count: this.state.count - 1,
            totalTaps: this.state.totalTaps + 1
        })
    }




    render() {
        return (
            <div className="counter">
                <h1>counter</h1>
                <h1 className="count">{this.state.count}</h1>
                <h1 className="taps">Total taps {this.state.totalTaps}</h1>
                <div>
                    <button onClick={() => this.setState({ count: this.state.count + 1, totalTaps: this.state.count + 1 })}> increment +</button>
                    <button onClick={this.handleDecrement}> decremnt -</button>
                </div>
                <div>
                    <button className="reset-count" onClick={() => this.setState({ count: 0 })} >Reset Count</button>
                    <button className="reset-all" onClick={() => this.setState({ totalTaps: 0, count: 0 })}>Reset All</button>
                </div>
            </div>
        )
    }
}
function Apps() {
    return (
        <div>
            <Counter />
        </div>
    )
}
ReactDOM.render(
    <Apps />,
    document.getElementById("root")
)
