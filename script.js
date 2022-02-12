class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    clear = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="counter">
                <h1>counter</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> increment +</button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}> decremnt -</button>
                <button className="reset-count" onClick={this.clear}>reset</button>
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
