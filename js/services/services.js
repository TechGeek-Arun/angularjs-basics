app.service('MathService', function() {
    this.multiply = function(a, b) { return a * b };
});
app.service('CalculatorService', function(MathService){
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
});

app.factory('FactoryService', function() {
            var factory = {};

            factory.multiply = function(a, b) {
               return a * b
            }
            return factory;
 });
app.service('CalcService', function(FactoryService){
            this.square = function(a) {
               return FactoryService.multiply(a,a);
            }
});