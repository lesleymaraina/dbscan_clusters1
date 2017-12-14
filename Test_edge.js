/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','550px','400px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'RoundRect3',
                display: 'none',
                type: 'rect',
                rect: ['80px', '57px','140px','117px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(233,16,16,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse3',
                display: 'none',
                type: 'ellipse',
                rect: ['186px', '237px','167px','77px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(233,16,16,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle2',
                display: 'none',
                type: 'rect',
                rect: ['387px', '53px','113px','117px','auto', 'auto'],
                fill: ["rgba(233,16,16,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_RoundRect3}": [
                ["color", "background-color", 'rgba(233,16,16,1.00)'],
                ["style", "display", 'none']
            ],
            "${_Ellipse3}": [
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${_Rectangle2}": [
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            labels: {
                "Start": 0,
                "End": 1000
            },
            timeline: [
                { id: "eid20", tween: [ "style", "${_RoundRect3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_Ellipse3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_Rectangle2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_Rectangle2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "test");
