if(Meteor.isServer){
    Meteor.publish("Translates",function(){
      
            return Translates.find({});
    });
}