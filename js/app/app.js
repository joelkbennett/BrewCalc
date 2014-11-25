/**
 * Created by Joel on 2014-11-24.
 */

var brew = new VolCalc(),
    grainInput = $('#grain'),
    mashDetails = $('#mash-details'),
    mashVol = mashDetails.find('#mash-vol'),
    //mashOutVol = mashDetails.find("#mash-out-vol"),
    spargeVol = mashDetails.find("#sparge-vol"),
    preBoil = mashDetails.find('#pre-boil-vol'),
    //postBoil = mashDetails.find('#post-boil-vol'),
    postCool = mashDetails.find('#cooled-vol');

grainInput.on('change', function() {
    brew.init($('#grain').val());
    htlVisual.update(brew.getHeight(brew.getSpargeVol(), system.liquorDenom));
    mashVisual.update(brew.getHeight(brew.getMashVol(), system.mashDenom));
    kettleVisual.update(brew.getHeight(brew.getPreBoil(), system.kettleDenom));
});

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