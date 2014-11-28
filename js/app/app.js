/**
 * Created by Joel on 2014-11-24.
 */

var brew = new VolCalc(),
    grainInput = $('#grain'),
    hopInput = $('#hop'),
    mashDetails = $('#mash-details'),
    mashVol = mashDetails.find('#mash-vol'),
    spargeVol = mashDetails.find("#sparge-vol"),
    preBoil = mashDetails.find('#pre-boil-vol'),
    postCool = mashDetails.find('#cooled-vol');

grainInput.on('change', function() {
    var grainWeight = grainInput.val();

    brew.init(grainWeight);
    htlVisual.update(brew.getHeight(brew.getSpargeVol(), system.liquorDenom));
    mashVisual.update(brew.getHeight(brew.getMashVol(), system.mashDenom));
    mashVisual.grainAmount(grainWeight);
    kettleVisual.update(brew.getHeight(brew.getPreBoil(), system.kettleDenom));
});

hopInput.on('change', function() {
    var hopWeight = hopInput.val();
    kettleVisual.hopAmount(hopWeight);
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