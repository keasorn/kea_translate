 
Template.profile.rendered = function(){
    $("#profile-link").removeClass("selected");
    $("#user-link").addClass("selected");
    $("#joks-link").removeClass("selected");
    $("#rankings-link").removeClass("selected");
    $("#search-link").removeClass("selected");
}


Template.profile.helpers({
    username: function(){
        if(!Meteor.user()){
            Bert.alert("You are not login, permission denigh","danger","growl-top-right");
            return false;
        }else{
            return Meteor.user().username;
        }
    },
    myVar: function(){
        return "Hello My Variable";
    },
})