import React, {Component} from 'react';
import './css/index.css'

export default class Animation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                position: 'absolute',
                width: '100%',
                textAlign: 'center',
                height: '30px',
                color: '#00FF94',
                ...this.props.style
            }}>
                <div style={{
                    width: 'auto',
                    position: 'absolute',
                    opacity: 0,
                    WebkitAnimation: this.props.animation + ' linear ' + this.props.time + ' infinite'
                }}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
