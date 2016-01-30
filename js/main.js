$(document).ready(function () {

    

    var dummyViewModel = function() {
        var self = this;

        self.currentBetter = ko.observable("Patrik Wall");
        self.currentDate = ko.observable(moment(new Date()).format('ll'));
        self.currentTime = ko.observable(moment(new Date()).format('HH:mm:ss'));


        self.result = ko.observableArray();
        self.tippingrows = ko.observableArray();


        //Update time
        var updateDateString = function () {
            self.currentDate(moment(new Date()).format('ll'));
            self.currentTime(moment(new Date()).format('HH:mm:ss'));
        };

        //Tippingrow
        self.row1 = { "Match": "Liverpool - West Ham"       ,"One": true,"X": false,"Two":true};
        self.row2 = { "Match": "Aresenal - Burnley"         ,"One": true,"X": false,"Two":false};
        self.row3 = { "Match": "Aston V - Mach.C"           ,"One": false,"X": false,"Two":true};
        self.row4 = { "Match": "Bolton - Leeds"             ,"One": false,"X": true,"Two":true};
        self.row5 = { "Match": "Bury - Hull"                ,"One": false,"X": false,"Two":true};
        self.row6 = { "Match": "Crystal P - Stoke"          ,"One": true,"X": false,"Two":false};
        self.row7 = { "Match": "Nottingh. - Watford"        ,"One": true,"X": true,"Two":false};
        self.row8 = { "Match": "Oxford - Blackburn"         ,"One": true,"X": false,"Two":false};
        self.row9 = { "Match": "Portsmo. - Bournem."        ,"One": false,"X": true,"Two":true};
        self.row10 = { "Match": "Reading - Walsall"         ,"One": true,"X": false,"Two":false};
        self.row11 = { "Match": "Shrewsb. - Sheff .W"       ,"One": true,"X": false,"Two":true};
        self.row12 = { "Match": "West Brom - PeterBor."     ,"One": true,"X": true,"Two":false};
        self.row13 = { "Match": "Brist C. - Birmingh."      ,"One": true,"X": true,"Two":true};
        


        self.tippingrows.push(self.row1);
        self.tippingrows.push(self.row2);
        self.tippingrows.push(self.row3);
        self.tippingrows.push(self.row4);
        self.tippingrows.push(self.row5);
        self.tippingrows.push(self.row6);
        self.tippingrows.push(self.row7);
        self.tippingrows.push(self.row8);
        self.tippingrows.push(self.row9);
        self.tippingrows.push(self.row10);
        self.tippingrows.push(self.row11);
        self.tippingrows.push(self.row12);
        self.tippingrows.push(self.row13);

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