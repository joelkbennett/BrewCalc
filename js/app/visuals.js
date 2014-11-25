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
        this.config.el.find('.indicator').animate({
            bottom: newLiquidHeight - 15
        }, 1000);
        this.config.el.find('.indicator-label').html(liquidHeight);
    };
}
