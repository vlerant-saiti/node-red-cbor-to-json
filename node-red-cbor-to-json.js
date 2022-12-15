module.exports = function (RED) {
    const cb = require('cbor');

    function CBORNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;
        node.on('input', function (msg) {

            if (msg.payload.constructor.name === "Buffer") {
                msg.payload = cb.decode(new Buffer(msg.payload));
            } else {
                msg.payload = cb.encode(msg.payload);
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("CBOR", CBORNode);
}

