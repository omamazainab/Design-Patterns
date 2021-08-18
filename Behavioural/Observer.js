// Constructor for defining new SubscriberList.

function SubscriberList() {
  this.subscribers = []; // an empty array by default.
}

// defining methods for subscriber list.

// Subscribe method to add new subscribers.
SubscriberList.prototype.add = function(subscriber) {
  this.subscribers.push(subscriber);
}

// unsubscribe method to remove unsubscribers.
SubscriberList.prototype.remove = function(unsubscriber) {
  this.subscribers = this.subscribers.filter(subscriber => (subscriber != unsubscriber));
}

// constructor defining new VideoList.
function VideoList() {
  this.videos = []; // an empty array by default.
}

// defining methods for video list.

// add method to add new Videos.
VideoList.prototype.add = function(video) {
  this.videos.push(video);
}

// remove method to remove videos.
VideoList.prototype.remove = function(delVideo) {
  this.videos = this.videos.filter(video => (video != delVideo));
}

// make a constructor method for Channel

function Channel(name = "unknown") {
  this.channelName = name;
  this.subscriberList = new SubscriberList();
  this.videoList = new VideoList();
}

// defining a subscribe method to add subscriber to 
Channel.prototype.subscribe = function(subscriber) {
  this.subscriberList.add(subscriber);
}

//defining an unsubscribe method to remove 
// unsubscribers from subscribersList
Channel.prototype.unsubscribe = function(unsubscriber) {
  this.subscriberList.remove(unsubscriber);
}

// defining a notifySubscribers method to send an update to each subscriber
Channel.prototype.notifySubscribers = function(videoName) {
  this.subscriberList.subscribers.forEach(subscriber => {
    subscriber.update(videoName, this.channelName);
  })
}

// defining an uploadVideo method to add videos to videoList 
// and then notify all subscriber about upload
Channel.prototype.uploadVideo = function(video) {
  this.videoList.add(video);
  this.notifySubscribers(video)
}

// defining an deleteVideo method to remove a video from VideoList
Channel.prototype.deleteVideo = function(delVideo) {
  this.subscriberList.remove(delVideo);
}


function Viewer() {
  this.update = function(videoName, channelName) {
    console.log(channelName + " has uploaded a new video " + videoName)
  }
}

function run() {
  let learnDesignPatterns = new Channel("Learn design patterns");

  let mike = new Viewer();
  let phil = new Viewer();

  learnDesignPatterns.subscribe(mike);
  learnDesignPatterns.subscribe(phil);

  learnDesignPatterns.uploadVideo("singleton");
}

run();