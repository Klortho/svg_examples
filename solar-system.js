$(function() {
    var planet_data = {
        mercury: {
            'orbit_diameter': 58,
            period: 0.24
        },
        venus: {
            'orbit_diameter': 108,
            period: 0.62
        },
        earth: {
            'orbit_diameter': 150,
            period: 1
        },
        mars: {
            'orbit_diameter': 228,
            period: 1.88
        },
        jupiter: {
            'orbit_diameter': 778,
            period: 11.86
        },
        saturn: {
            'orbit_diameter': 1430,
            period: 29.46
        },
        uranus: {
            'orbit_diameter': 2880,
            period: 84.01
        },
        neptune: {
            'orbit_diameter': 4500,
            period: 164.8
        }
    };
  
    var time = 0;
    var rate = .5;
    function updateOrbits() {
        for (var planet in planet_data) {
            var pdata = planet_data[planet];
            var planet_svg = $('#' + planet);
            var rad = -time * rate * 6.28;
            var x = Math.cos(rad / pdata.period) * pdata.orbit_diameter;
            var y = Math.sin(rad / pdata.period) * pdata.orbit_diameter / 10;
            planet_svg.attr("cx", x);
            planet_svg.attr("cy", y);
        }
    
        time += 1;
        setTimeout(updateOrbits, 100);
    }
    updateOrbits();

});
