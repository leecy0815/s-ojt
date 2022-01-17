import { Component } from "react";

const lhd = '[Detail]';
class Detail extends Component {
    componentDidMount() {
        console.log(`${lhd} componentDidMount()`);
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        console.log(`${lhd} rendor()`);
        const { location } = this.props;
        let renderRet = null;
        if (location.state) {
            const {
                year,
                title,
                summary,
                poster,
                genres,
            } = location.state;

            renderRet = (
                <div>
                    <h1>{title}</h1>
                    <h2>{year}</h2>
                    <h3>{summary}</h3>
                    <h4>
                        {
                            genres.map((item, idx) => {
                                let _genre = '';
                                if (genres.length === 1) _genre = item;
                                else {
                                    idx === genres.length - 1
                                        ? _genre = `${item}`
                                        : _genre = `${item}, `;
                                }

                                return _genre;
                            })
                        }
                    </h4>
                    <img src={poster} alt={title}/>
                </div>
            );
        }

        return renderRet;
    }
}

export default Detail;