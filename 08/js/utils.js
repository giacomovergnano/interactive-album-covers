 function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
        var angle = Math.atan2(y2 - y1, x2 - x1) * 180.0 / Math.PI;

        angle = 180 + angle;

        return angle;
      }

      function distanceBetweenPoints(x1, y1, x2, y2) {
        var a = x1 - x2;
        var b = y1 - y2;

        return Math.sqrt((a * a) + (b * b));
      }

      $(document).ready(function() {

        var styleProperties = {
          family : "Six Caps",
          size : 350,
          fill : "#171717",
          paddingLeft : 20,
          paddingRight : 50,
          paddingTop : 50,
          paddingBottom : 50
        };

        var text = new Blotter.Text("CARIBOU", styleProperties);

        var material = new Blotter.ChannelSplitMaterial();

        var blotter = new Blotter(material, {
          texts : text
        });

        var myScope = blotter.forText(text);

        blotter.on("ready", function () {
          myScope.appendTo(document.getElementById("blob"));
        });

        myScope.on("mousemove", function (mousePosition) {
          var angle = angleBetweenPointsInDegrees(0.5, 0.5, mousePosition.x, mousePosition.y);
          var blur = Math.min(0.3, distanceBetweenPoints(0.5, 0.5, mousePosition.x, mousePosition.y));

          myScope.material.uniforms.uRotation.value = angle;
          myScope.material.uniforms.uOffset.value = blur;
        });
      });