angular.module('TestDirective', [])
  .directive('test', function() {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        console.log("parent",elem.parent());
        console.log("Recognized the fundoo-rating directive usage");
      }
    };
  });
