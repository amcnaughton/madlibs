angular.module('madlibs', [])
    .controller('madlibsController', function() {

        this.showResults = false;
        this.errors = '';

        this.generate = function() {

            // all fields must be present
            if (!this.femaleName || !this.jobTitle || !this.tediousTask || !this.dirtyTask || !this.celebrity ||
                !this.uselessSkill || !this.obnoxiousCelebrity || !this.hugeNumber || !this.adjective) {
                this.errors = "Please complete all the input fields.";
            }
            else
            if (!isNumber(this.hugeNumber)) {
                // hugeNumber must be numeric
                this.errors = "hugeNumber must be numeric.";
            }
            else {
                // all is good
                this.errors = '';
                this.showResults = true;
            }

        }

        // let's try again
        this.reset = function() {

            this.errors = '';
            this.showResults = false;
            this.femaleName = this.jobTitle = this.tediousTask = this.dirtyTask = this.celebrity = this.uselessSkill = this.obnoxiousCelebrity = this.hugeNumber = this.adjective = '';
        }
    });


function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
