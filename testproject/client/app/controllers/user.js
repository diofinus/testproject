import Ember from 'ember';
 
export default Ember.ArrayController.extend({
    actions: {
        createName: function(newFirstName, newLastName) {
            // Create the new Hotel model
            console.log("console result: "+newFirstName+" "+newLastName);

            var _model = this.get("model");

            console.log("value binding: "+_model.firstname+" "+_model.lastname);

            var user = this.store.createRecord('user', {
                firstname: _model.firstname,
                lastname: _model.lastname
            });
 
            // Clear the "New Todo" text field
            this.set('newFirstName', '');
            this.set('newLastName', '');

            // Save the new model
            user.save();
        }
    }
});