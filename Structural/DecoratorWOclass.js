// Notifier class defination

function Notifier() { }
//send message method for basic notifier
Notifier.prototype.send = function(message) {
  console.log(`Basic Notifier : ${message}`);
}

// Email notification decorator
function EmailDecorator(wrappe) {
  // wrappe will be the obbject that will be decorated by this decorator
  this.wrappe = wrappe;
}

// send method becasue the decorators must have similar functionalities so it seems identical to the client
EmailDecorator.prototype.send = function(message) {
  console.log("email : " + message);
  // call the wrappe's send method
  this.wrappe.send(message);
}


function SMSDecorator(wrappe) {
  this.wrappe = wrappe;
}

SMSDecorator.prototype.send = function(message) {
  console.log("sms : " + message);
  this.wrappe.send(message);
}

function WebPushDecorator(wrappe) {
  this.wrappe = wrappe;
}

WebPushDecorator.prototype.send = function(message) {
  console.log("web push notification : " + message);
  this.wrappe.send(message);
}

function MobilePushDecorator(wrappe) {
  this.wrappe = wrappe;
}

MobilePushDecorator.prototype.send = function(message) {
  console.log("mobile push notification : " + message);
  this.wrappe.send(message);
}

function DesktopPushDecorator(wrappe) {
  this.wrappe = wrappe;
}

DesktopPushDecorator.prototype.send = function(message) {
  console.log("desktop push notification : " + message);
  this.wrappe.send(message);
}

function run() {

  // config for notifications

  let config = {
    smsEnabled: true,
    emailEnabled: true,
    webPushEnabled: true,
    mobilePushEnabled: true,
    desktopPushEnabled: true,
  }

  // basic notifier objects
  let notifications = new Notifier();

  if (config.smsEnabled)
    //wrapping basic notifier in decorator
    notifications = new EmailDecorator(notifications);

  if (config.emailEnabled)
    notifications = new SMSDecorator(notifications);

  if (config.webPushEnabled)
    notifications = new WebPushDecorator(notifications);

  if (config.mobilePushEnabled)
    notifications = new MobilePushDecorator(notifications);

  if (config.desktopPushEnabled)
    notifications = new DesktopPushDecorator(notifications);

  notifications.send("This is trial notification");
}

run();