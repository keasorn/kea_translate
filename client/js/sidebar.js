Template.sidebar.rendered = function (){

}

Template.sidebar.events({
    "click .logout": function(event){
        Meteor.logout( function(err){
            if(err){
                Bert.alert(err.reason,"danger","growl-top-right");
            }else{
                Router.go("/home");
                Bert.alert("You are logot successfuly","success","growl-top-right");
            }
        });
    }
})