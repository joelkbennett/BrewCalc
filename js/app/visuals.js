/**
 * Created by Joel on 2014-11-24.
 */

function VesselVisual(config) {
    this.config = config;

    this.init = function(config) {
        var setHeight = 10 * this.config.size;
        var setWidth = 2 * Math.abs(this.config.radius) * 10;
        this.config.el.css('height', setHeight);
        this.config.el.css('width', setWidth);
    };

    this.update = function(liquidHeight) {
        var newLiquidHeight = liquidHeight * 10;
        this.config.el.find('.liquid').animate({
            height: newLiquidHeight
        });
    };
}

var htlVisual = new VesselVisual({
    el: $('#htl-visual'),
    size: 25,
    radius: 15.25
});
htlVisual.init();

var mashVisual = new VesselVisual({
    el: $('#mash-visual'),
    size: 30,
    radius: 17.25
});
mashVisual.init();

var kettleVisual = new VesselVisual({
    el: $('#kettle-visual'),
    size: 35,
    radius: 19
});
kettleVisual.init();