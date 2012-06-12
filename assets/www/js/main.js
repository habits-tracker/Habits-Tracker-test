window.HomeView = Backbone.View.extend({

    template:_.template($('#home').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.BoardView = Backbone.View.extend({

    template:_.template($('#board').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.ActivityView = Backbone.View.extend({

    template:_.template($('#activities').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});

window.HabitsView = Backbone.View.extend({

    template:_.template($('#habits').html()),

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }
});


var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "board":"board",
        "activities":"activities",
        "habits":"habits"

    },

    initialize:function () {
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.changePage(new HomeView());
    },

  

    board:function () {
        console.log('#board');
        this.changePage(new BoardView());
    },

    activities:function () {
        console.log('#activities');
        this.changePage(new ActivityView());
    },
    
    habits:function () {
        console.log('#habits');
        this.changePage(new HabitsView());
    },
    
    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    }

});

$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    Backbone.history.start();
});