export const visualization1 = {
  "chart": {
    "animation": false,
    "backgroundColor": "rgba(0, 0, 0, 0)",
    "events": {},
    "plotShadow": false,
    "style": {
      "fontFamily": "inherit",
      "fontSize": "12px"
    },
    "type": "pie"
  },
  "credits": {
    "enabled": false
  },
  "legend": {
    "align": "right",
    "enabled": true,
    "itemMarginTop": 1,
    "itemStyle": {
      "color": "#666666",
      "fontWeight": "normal"
    },
    "labelFormat": "<span class=\"highcharts-data-label\">{name} {percentage:.2f}%</span>",
    "layout": "vertical",
    "navigation": {
      "activeColor": "#666666"
    },
    "verticalAlign": "middle"
  },
  "plotOptions": {
    "pie": {
      "allowPointSelect": true,
      "animation": false,
      "cursor": "pointer",
      "dataLabels": {
        "allowOverlap": true,
        "color": "#595959",
        "enabled": false,
        "format": "<b>{key}</b><span style=\"font-weight: normal\"> - {percentage:.2f}%</span>",
        "padding": -2,
        "useHTML": true
      },
      "showInLegend": true
    }
  },
  "series": [
    {
      "data": [
        {
          "color": "#3EB0D5",
          "links": [
            {
              "label": "Show All 6,794",
              "url": "/explore/thelook/users?fields=users.id,users.name,users.email,users.city,users.state,users.country,users.zipcode,users.gender,users.age&f[users.gender]=m&query_timezone=America%2FLos_Angeles&limit=500",
              "type": "measure_default"
            }
          ],
          "name": "m",
          "rendered": "6,794",
          "y": 6794,
          "row": {
            "users.gender": {
              "value": "m"
            },
            "users.count": {
              "value": 6794,
              "rendered": "6,794",
              "links": [
                {
                  "label": "Show All 6,794",
                  "url": "/explore/thelook/users?fields=users.id,users.name,users.email,users.city,users.state,users.country,users.zipcode,users.gender,users.age&f[users.gender]=m&query_timezone=America%2FLos_Angeles&limit=500",
                  "type": "measure_default"
                }
              ]
            }
          }
        },
        {
          "color": "#B1399E",
          "links": [
            {
              "label": "Show All 6,704",
              "url": "/explore/thelook/users?fields=users.id,users.name,users.email,users.city,users.state,users.country,users.zipcode,users.gender,users.age&f[users.gender]=f&query_timezone=America%2FLos_Angeles&limit=500",
              "type": "measure_default"
            }
          ],
          "name": "f",
          "rendered": "6,704",
          "y": 6704,
          "row": {
            "users.gender": {
              "value": "f"
            },
            "users.count": {
              "value": 6704,
              "rendered": "6,704",
              "links": [
                {
                  "label": "Show All 6,704",
                  "url": "/explore/thelook/users?fields=users.id,users.name,users.email,users.city,users.state,users.country,users.zipcode,users.gender,users.age&f[users.gender]=f&query_timezone=America%2FLos_Angeles&limit=500",
                  "type": "measure_default"
                }
              ]
            }
          }
        }
      ],
      "events": {},
      "innerSize": "",
      "states": {
        "inactive": {
          "opacity": 1
        }
      },
      "type": "pie"
    }
  ],
  "title": {
    "text": null
  },
  "tooltip": {
    "animation": false,
    "backgroundColor": "rgba(0, 0, 0, 0.75)",
    "borderWidth": 0,
    "borderRadius": 6,
    "hideDelay": 0,
    "outside": false,
    "padding": 12,
    "shadow": false,
    "style": {
      "color": "white",
      "fontWeight": 400,
      "fontFamily": "inherit"
    },
    "useHTML": true
  }
}
