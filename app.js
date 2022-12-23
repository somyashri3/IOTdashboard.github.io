
    // ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
    var myConfig7 = {
      "type": "gauge",
      "scale-r": {
        "aperture": 200,
        "values": "0:100:20",
        "center": {
          "size": 5,
          "background-color": "#66CCFF #FFCCFF",
          "border-color": "none"
        },
        "ring": {
          "size": 10,
          "rules": [{
              "rule": "%v >= 0 && %v <= 20",
              "background-color": "red"
            },
            {
              "rule": "%v >= 20 && %v <= 40",
              "background-color": "orange"
            },
            {
              "rule": "%v >= 40 && %v <= 60",
              "background-color": "yellow"
            },
            {
              "rule": "%v >= 60 && %v <= 80",
              "background-color": "green"
            },
            {
              "rule": "%v >= 80 && %v <=100",
              "background-color": "blue"
            }
          ]
        },
        "labels": ["5", "10", "15", "20", "25", " 30"] //Scale Labels
      },
      "plot": {
        "csize": "5%",
        "size": "100%",
        "background-color": "#000000"
      },
      "series": [{
        "values": [75]
      }]
    };
 
    zingchart.render({
      id: 'myChart',
      data: myConfig7,
      height: "50%",
      width: "50%"
    });
  