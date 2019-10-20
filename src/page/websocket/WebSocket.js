import React, {Component} from 'react';

export default class WebSocket extends Component {

    constructor(props) {
        super(props);
    }

    connection = () => {
        if (!window.WebSocket) {
            window.WebSocket = window.MozWebSocket;
        }
        if (window.WebSocket) {
            this.socket = new WebSocket("ws://localhost:8899/ws");
            this.socket.onmessage = function (event) {
                console.log('onmessage', event.data);
            };
            this.socket.onopen = function (event) {
                console.log('onopen', event);
            };
            this.socket.onclose = function (event) {
                console.log('onclose', event);
            };
            this.socket.sendMessage = this.sendMessage;

        } else {
            alert("抱歉，您的浏览器不支持WebSocket协议!");
        }
    };

    sendMessage = (value) => {
        if (this.socket.readyState !== WebSocket.OPEN) {
            alert("连接错误")
        }
        if (this.socket) {
            console.log(this.socket);
            this.socket.send(value);
        }
    }
}
