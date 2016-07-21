//defining a mixin

var setIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },

    setMyInterval: ()=>{
        this.intervals.push(setInterval.apply(null,arguments));
        //setInterval() returns a unique intervalID which is passed to clearInterval() to stop the repetitive code
    },

    componentWillUnmount: () =>{
        this.intervals.map(clearInterval); //stopping the repetitive code
    }
};

module.exports = setIntervalMixin;