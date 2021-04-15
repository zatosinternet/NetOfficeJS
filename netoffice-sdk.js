class NetOffice {
  constructor(a,b) {
    this.item = a;
    this.id_item = b;
  };

    
}

netoffice = new NetOffice();

function NObindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

// Listen to messages from parent window
NObindEvent(window, 'message', function (e) {
    const data = e.data;
    console.log(data);
});
