// Object Oriented Diagram
// We have several objects to define in our models. Each object has its own method we are defining here, so that we can call them in the app.
// Objects : Task / Project / User / Leaderboard /
// Task properties : Title / Project_owned / Frequence per week/ Completion/ Importance? / 
// Task Method : Toggle / Set a Title / Clear / Change habit / 

var task = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "Your task here",
        order: task.nextOrder(),
        done: false
      };
    },

    initialize: function() {
      if (!this.get("title")) {
        this.set({"title": this.defaults.title});
      }
    },

    toggle: function() {
      this.save({done: !this.get("done")});
    },

    clear: function() {
      this.destroy();
    }

   // changeHabit: function() {
   // 	this.xxx();
   // }

  });

// Habit properties : 
// Habit Method : Add a task / Clear / Set title / 

  var habit = Backbone.Model.extend({
  	
  	defaults: function() {
  		return {
  			title: "Your habit here",
  			order: habit.nextOrder(),
  			completion: // if all the tasks of an habit are done, then it's ok.
  			this.task: (task1, task2, task3)
  		};
  	},

  	// add: function() {
  	//	this.add({
  	//		this.task.add
  	//	})
  	//}

    clear: function() {
      this.destroy();
    }


  })


