$(document).ready(function () {

    

    var dummyViewModel = function() {
        var self = this;

        self.currentBetter = ko.observable("Patrik Wall");
        self.currentDate = ko.observable(moment(new Date()).format('ll'));
        self.currentTime = ko.observable(moment(new Date()).format('HH:mm:ss'));


        self.result = ko.observableArray();



        //Update time
        var updateDateString = function () {
            self.currentDate(moment(new Date()).format('ll'));
            self.currentTime(moment(new Date()).format('HH:mm:ss'));
        };

        //Andre
        self.Andre = {
            "Name": "André Mayr",
            "Tior": 4,
            "Elvor": 0,
            "Tolvor": 0,
            "Tretton": 0,
            "Cash":0
        };

        //Peter
        self.Peter = {
            "Name": "Peter Mayr",
            "Tior": 1,
            "Elvor": 2,
            "Tolvor": 0,
            "Tretton": 0,
            "Cash": 62
        };

        //Bill
        self.Bill = {
            "Name": "Bill Gabrielsson",
            "Tior": 18,
            "Elvor": 2,
            "Tolvor": 0,
            "Tretton": 0,
            "Cash": 740
        };

        //Patrik
        self.Patrik = {
            "Name": "Patrik Wall",
            "Tior": 0,
            "Elvor": 0,
            "Tolvor": 0,
            "Tretton": 0,
            "Cash": 0
        };

        self.init = function () {
            setInterval(updateDateString, 1000);

            self.result.push(self.Andre);
            self.result.push(self.Peter);
            self.result.push(self.Bill);
            self.result.push(self.Patrik);

            //order
            self.result.sort(function(left, right) {
                return left.Cash == right.Cash ? 0 : (left.Cash > right.Cash ? -1 : 1)
            });
        };

        self.init();

        
    };
    ko.applyBindings(new dummyViewModel());
});