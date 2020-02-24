Tracker.autorun(function(){
    if(Meteor.userId){
        Router.go("/home");
    }
});

Template.login.rendered = function(){

}

Template.login.events({
    "submit .form-signin":function(event){
        var mail = trimInput(event.target.mail.value);
        var password = trimInput(event.target.password.value);
        if(isNotEmpty(mail) && isNotEmpty(password)){

             Meteor.loginWithPassword(mail,password,function(err){
                if(err){
                    Bert.alert(err.reason,"danger","growl-top-right");
                    return false;
                }else{
                    Router.go("/home");
                    Bert.alert("You are login successfuly","success","growl-top-right");
                }
             })
        }
        return false;
    }
})

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"")
}
var isNotEmpty = function(val){
    if(val != ""){
        return true;
    }else{
        Bert.alert("Please Field In all filed,","danger","growl-top-right");
        return false;
    }
}