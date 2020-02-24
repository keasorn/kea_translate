Template.signup.rendered = function () {
    // alert("OK")
}

Template.signup.events({
    "submit .form-signup": function (event) {
        var username = trimInput(event.target.username.value);
        var mail = trimInput(event.target.mail.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);
        if(isNotEmpty(username) && isNotEmpty(mail)){

            Accounts.createUser({
                username:username,
                mail:mail,
                password:password,
                profile:{

                }
            },function(err){
                if(err){
                    Bert.alert(err.reason,"danger","growl-top-right");
                }else{
                    Bert.alert("You are successfule register form","success","growl-top-right");
                    Router.go("/home");
                }

            });
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