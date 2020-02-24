if(Meteor.isServer){
    Meteor.methods({
        addTranslate: function(keyword,word_type,pos,explanation){
          
                var year = new Date().getFullYear();
                var month = "10";
                var day = "02";
                var date = (month+"/"+day+"/"+year).toString();
                console.log("it working now 1");
                Translates.insert({
                    keyword: keyword,
                    word_type: word_type, 
                    pos: pos, 
                    explanation: explanation, 
                    createdAt: new Date()
                });
                console.log("it working now 2");

            
        },
        deletetudent: function(id){
            if(!Meteor.userId()){
                throw Meteor.Error("Not Authorized");
                return false;
            }else{
                Students.remove(id);
                console.log("remove id"+id);
            }
        },
        getTranslateEnKh: function(keyword){ 
            const projection = { };
            const query = {
            "keyword": {$regex : new RegExp(keyword,'i')},
            };
            return Translates.find(query,{}).fetch();
        }
    });
}