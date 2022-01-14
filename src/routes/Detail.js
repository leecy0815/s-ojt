import { Component } from "react";

class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        return (
            <span>{location.state.title}</span>
        );
    }
}

export default Detail;