Highcharts.getJSON(
  'data/US/Non-White.json',
  function (data) {
    var countiesMap = Highcharts.geojson(
      Highcharts.maps['countries/us/us-all-all-highres']
      ),
      // Extract the line paths from the GeoJSON
      lines = Highcharts.geojson(
        Highcharts.maps['countries/us/us-all-all-highres'], 'mapline'
      ),
      // Filter out the state borders and separator lines, we want these
      // in separate series
      borderLines = Highcharts.grep(lines, function (l) {
        return l.properties['hc-group'] === '__border_lines__';
      }),
      separatorLines = Highcharts.grep(lines, function (l) {
        return l.properties['hc-group'] === '__separator_lines__';
      });

    // Add state acronym for tooltip
    Highcharts.each(countiesMap, function (mapPoint) {
      mapPoint.name = mapPoint.name + ', ' +
        mapPoint.properties['hc-key'].substr(3, 2);
    });

    document.getElementById('container').innerHTML = 'Rendering map...';

    // Create the map
    setTimeout(function () { // Otherwise innerHTML doesn't update
      Highcharts.mapChart('container', {
        chart: {
          borderWidth: 0,
          marginRight: 20 // for the legend
        },

        credits: {
          enabled: true,
          text: 'Illustration: P. Englert, A. Paul & M.Varga (Map: © USA Census Bureau, Data: ACS 5Y 2018)',
          // text: 'Illustration: P. Englert, A. Paul & M.Varga (Map: © USA Census Bureau, Data: JHU CSSE)',
          position: {
            align: 'left',
            x: 20,
            y: -5
          },
          style: {
            fontSize: '16px',
            fontWeight: '900',
            color: '#323232',
            fontFamily: 'Courier',
          },
        },

        title: {
          useHTML: true,
          text: 'Non-White',
          // text: 'COVID-19 Deaths 15<sup>th</sup> August 2020',
          style: {
            fontSize: '44px',
            fontWeight: '900',
            color: '#323232',
            fontFamily: 'Courier',
          },
          y: 80,
        },
        subtitle: {
          text: '(% of Population)',
          // text: '(USD)',
          // text: '(per square km)',
          // text: '(cases per 100,000)',
          style: {
            fontSize: '28px',
            fontWeight: '900',
            color: '#323232',
            fontFamily: 'Courier',
          },
          y: 125,
        },

        legend: {
          layout: 'vertical',
          align: 'right',
          floating: true,
          backgroundColor: ( // theme
            Highcharts.defaultOptions &&
            Highcharts.defaultOptions.legend &&
            Highcharts.defaultOptions.legend.backgroundColor
          ) || 'rgba(255, 255, 255, 0.85)',
          shadow: false,
          borderRadius: 0,
          y: -100,
          x: -20,
          height: 1000,
          symbolHeight: 300,
          symbolWidth: 15,
        },

        mapNavigation: {
          enabled: false
        },

        colorAxis: {
          min: 5.0,
          max: 55.0,
          tickInterval: 5,
          tickWidth: 1,
          tickColor: '#323232',
          stops: [[0, '#003467'], [0.3333, '#fdf4e2'], [0.5, '#fff3e1'], [0.6666, '#fdf4e2'], [1, '#7f1810']],
          gridLineWidth: 0,
          width: 300,
          labels: {
            format: '{value}%',
            style: {
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#323232',
              fontFamily: 'Courier',
            }
          },
        },

        plotOptions: {
          mapline: {
            showInLegend: false,
            enableMouseTracking: false
          }
        },

        series: [{
          mapData: countiesMap,
          data: data,
          joinBy: ['hc-key', 'code'],
          name: 'Deaths',
          tooltip: {
            valueSuffix: '%'
          },
          borderWidth: 0.1,
          borderColor: '#7e7e7e',
          states: {
            hover: {
              color: '#a4edba'
            }
          },
          shadow: false
        }, {
          type: 'mapline',
          name: 'State borders',
          data: borderLines,
          color: '#323232',
          shadow: true
        }, {
          type: 'mapline',
          name: 'Separator',
          data: separatorLines,
          color: '#323232',
          shadow: false
        }]
      });
    }, 0);
  }
);
