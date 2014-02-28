angular.module('app.wait', [])
  .directive('wait', ['d3Service', function(d3Service) {
    return {
      restrict: 'EA',
      scope: {},
      template: '<button type="button" ng-click="move()" class="btn btn-default">Move</button>',
      link: function(scope, element, attrs) {
        d3Service.d3().then(function(d3) {

        var margin = parseInt(attrs.margin, 10) || 20;
        var barHeight = parseInt(attrs.barHeight, 10) || 20;
        var barPadding = parseInt(attrs.barPadding, 10) || 5;

        var svg = d3.select(element[0])
          .append('svg')
          .style('width', '100%');

          // Browser onresize event
          window.onresize = function() {
            scope.$apply();
          };

          // hard-code data
          scope.data = [
            {name: "Greg", score: 98},
            {name: "Ari", score: 96},
            {name: 'Q', score: 75},
            {name: "Loser", score: 48}
          ];

          // Watch for resize event
          scope.$watch(function() {
            return angular.element(window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });

          scope.render = function(data) {
            // remove all previous items before render
            svg.selectAll('*').remove();

            // If we don't pass any data, return out of the element
            if (!data) {
              return;
            }

            // setup variables
            var width = d3.select(element[0]).node().offsetWidth - margin,
                // calculate the height
                height = scope.data.length * (barHeight + barPadding),
                // Use the category20() scale function for multicolor support
                color = d3.scale.category20(),
                // our xScale
                xScale = d3.scale.linear()
                  .domain([0, d3.max(data, function(d) {
                    return d.score;
                  })])
                  .range([0, width]);

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
//            svg.selectAll('rect')
//              .data(data).enter()
//                .append('rect')
//                .attr('height', barHeight)
//                .attr('width', 140)
//                .attr('x', Math.round(margin/2))
//                .attr('y', function(d,i) {
//                  return i * (barHeight + barPadding);
//                })
//                .attr('fill', function(d) { return color(d.score); })
//                .transition()
//                  .duration(1000)
//                  .attr('width', function(d) {
//                    return xScale(d.score);
//                  });

            
            svg.append('circle')
                 .attr('cx', 30)
                 .attr('cy', 30)
                 .attr('r', 20);

           var x1 = 0;
           var line = svg.append('line')
             .attr('x1', x1)
             .attr('x2', 30)
             .attr('y1', 0)
             .attr('y2', 30)
             .style("stroke", "rgb(6,120,155)");

           scope.move = function() {
             x1 += 10;
             console.log('moving');
             line.transition()
             .attr('x1', x1)
             .duration(5000);
           };

        };
      });
    }};
  }]);
