Template.student_form.rendered = function () {

} 


Template.student_form.events({
    "submit #student_form":function(event){
        Meteor.call('addStudent', event.target.name.value, event.target.content.value);
        Bert.alert("Data recorded","success","growl-top-right")
        event.target.name.value = "";
        // Router.go("/home");
        return false;
    },
})
 