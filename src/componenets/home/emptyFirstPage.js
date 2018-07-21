import React, {Component} from 'react'

class EmptyFirstPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let RadarChart2 = require("react-chartjs").Radar;
        let data2 = {
            labels: [ "French" ,"ReactJs", "JavaScript", "Bootstrap", "Apollo", "MongoDB","Arabic", "English"],
            datasets: [

                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0)",
                    strokeColor: "rgba(151,187,205,0)",
                    pointColor: "rgba(151,187,205,0)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0)",
                    data: [85, 70, 90, 70, 65, 85,100, 65]
                }
            ]
        };

        let options2 = {
            //Boolean - Whether to show lines for each scale point
            scaleShowLine : true,

            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut : true,

            //Boolean - Whether to show labels on the scale
            scaleShowLabels : true,

            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero : true,

            //String - Colour of the angle line
            angleLineColor : "rgba(0,0,0,.1)",

            //Number - Pixel width of the angle line
            angleLineWidth : 1,

            //Number - Interval at which to draw angle lines ("every Nth point")
            angleLineInterval: 1,

            //String - Point label font declaration
            pointLabelFontFamily : "'Arial'",

            //String - Point label font weight
            pointLabelFontStyle : "normal",

            //Number - Point label font size in pixels
            pointLabelFontSize : 10,

            //String - Point label font colour
            pointLabelFontColor : "#666",

            //Boolean - Whether to show a dot for each point
            pointDot : true,

            //Number - Radius of each point dot in pixels
            pointDotRadius : 3,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke : true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,

        };
        return (
            <div className="container page1Container">
                <div className="sectionTitle .bg-info"> <h2> <i className=" text-info fas fa-code"></i>  Skills</h2></div>
                <div className="underline"></div>
                <div className='chartContainer'>
                    <RadarChart2 data={data2} options={options2}  width="500px" height="500px"/>
                </div>

            </div>
        )
    }
}

export default EmptyFirstPage