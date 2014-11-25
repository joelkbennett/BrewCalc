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

grainInput.on('keyup', function() {
    brew.init($('#grain').val());
    htlVisual.update(brew.getHeight(brew.getSpargeVol(), system.liquorDenom));
    mashVisual.update(brew.getHeight(brew.getMashVol(), system.mashDenom));
    kettleVisual.update(brew.getHeight(brew.getPreBoil(), system.kettleDenom));
});

