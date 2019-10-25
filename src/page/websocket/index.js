import React, {Component} from 'react';
import './css/index.css';
import Websocket from 'react-websocket';

export default class WebSocket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    sendMessage = (message) => {
        let room = {
            "roomName": "38912",
            "password": "123456",
        };
        this.refWebSocket.sendMessage(JSON.stringify(room));
    }

    render() {
        return (
            <div className='WebSocketBox'>
                <div className='ContentBox'>
                    <textarea/>
                </div>
                <input className='SendBox' type="text"
                       onChange={
                           (e) => {
                               this.setState({
                                   content: e.target.value
                               })
                           }
                       } defaultValue={this.state.content}/>
                <input className='SendButton' type='button' value='发送'
                       onClick={() => {
                           let room = {
                               "roomName": "38912",
                               "password": "123456",
                           };
                           this.refWebSocket.sendMessage(JSON.stringify(room));
                       }}/>
                {/*<button>创建房间</button>*/}

                <Websocket url='ws://localhost:8899/ws'
                           onMessage={(data) => {
                               alert(data);
                           }}
                           onOpen={() => {
                           }}
                           onClose={() => {
                           }}
                           reconnect={true} debug={true}
                           ref={Websocket => {
                               this.refWebSocket = Websocket;
                           }}/>
            </div>
        );
    }
}
