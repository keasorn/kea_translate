 
Template.home.rendered = function(){
    $("#home").addClass("selected"); 
    $("#engkh").removeClass("selected"); 
    $("#about").removeClass("selected"); 
}

Template.home.events({
    "submit #getTranslate":function(event){
        var en_keyword = event.target.en_keyword.value;
       // Meteor.call('addTranslate', en_keyword,"HW","n","explanation");
        $("#get_translate").html("<h2>កំពុងស្វែងរក...</h2>")
        var kh_tran = Meteor.call('getTranslateEnKh', en_keyword,function(error, result) {
           if(error){
                alert("error")
           }else{
            var html = "";
            result.forEach(element => {
                html = html + "<li> ";
                html = html + "<span class='word'>"+element.keyword+"</span> ";
                html = html +"<i>["+element.word_type+" ]</i>";
                html = html +"( "+element.pos+" )";
                html = html +"<br>"+element.explanation+"  <br>"
                html = html +"</li>";
            });
            
                html = html==""?"<h3>ស្វែងរកមិនឃើញ</h3>":html;
                //console.log(result)
                $("#get_translate").html(html);

                $("#keyword").html(en_keyword);
            return false;
           }
         }); 
    
        //Bert.alert(err.reason,"danger","growl-top-right");

        return false;
        /*
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
        */
    }
})