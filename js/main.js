$(document).ready(function () {

    var dummyViewModel = function() {
        var self = this;

        self.currentBetter = ko.observable("Patrik Wall");
        self.currentDate = ko.observable(moment(new Date()).format('ll'));
        self.currentTime = ko.observable(moment(new Date()).format('HH:mm:ss'));

        var updateDateString = function () {
            self.currentDate(moment(new Date()).format('ll'));
            self.currentTime(moment(new Date()).format('HH:mm:ss'));
        };

        self.init = function () {
            console.log("init");
            setInterval(updateDateString, 1000);

        };

        self.init();
    };
    ko.applyBindings(new dummyViewModel());
});