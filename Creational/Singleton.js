var Singleton = (function (){

  var instance = null;

  function createInstance(){
    var obj = new Object("I am the instance");
    return obj;
  }

  return {
    getInstance: function(){
      if(instance == null){
        instance = createInstance();
      }
      
      return instance;
    }
  }

})();

function test(){
  var instance1 = Singleton.getInstance();
  var instance2 = Singleton.getInstance();

  console.log(Object.is(instance1,instance2));
}

test();