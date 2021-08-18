// Notifier class defination

class Notifier{

  //send message method for basic notifier
  send(message){
    console.log(`Basic Notifier : ${message}`);
  }
}

// Email notification decorator
class EmailDecorator {

  // wrappe will be the obbject that will be decorated by this decorator
  constructor(wrappe){
    this.wrappe = wrappe;
  }

  // send method becasue the decorators must have similar functionalities so it seems identical to the client
  send(message){
    console.log("email : " + message);
    // call the wrappe's send method
    this.wrappe.send(message);
  }
}

class SMSDecorator {

  constructor(wrappe){
    this.wrappe = wrappe;
  }

  send(message){
    console.log("sms : " + message);
    this.wrappe.send(message);
  }
}

class WebPushDecorator {

  constructor(wrappe){
    this.wrappe = wrappe;
  }

  send(message){
    console.log("web push notification : " + message);
    this.wrappe.send(message);
  }
}

class MobilePushDecorator{

  constructor(wrappe){
    this.wrappe = wrappe;
  }

  send(message){
    console.log("mobile push notification : " + message);
    this.wrappe.send(message);
  }
}

class DesktopPushDecorator{

  constructor(wrappe){
    this.wrappe = wrappe;
  }

  send(message){
    console.log("desktop push notification : " + message);
    this.wrappe.send(message);
  }
}

function run(){

  // config for notifications

  let config = {
    smsEnabled : true,
    emailEnabled : true,
    webPushEnabled : true,
    mobilePushEnabled : true,
    desktopPushEnabled : true,
  }

  // basic notifier objects
  let notifications = new Notifier();

  if(config.smsEnabled)
    //wrapping basic notifier in decorator
    notifications = new EmailDecorator(notifications);

  if(config.emailEnabled)
    notifications = new SMSDecorator(notifications);

  if(config.webPushEnabled)
    notifications = new WebPushDecorator(notifications);

  if(config.mobilePushEnabled)
    notifications = new MobilePushDecorator(notifications);

  if(config.desktopPushEnabled)
    notifications = new DesktopPushDecorator(notifications);

  notifications.send("This is trial notification");
}

run();
