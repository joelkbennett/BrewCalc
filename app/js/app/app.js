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

// Create a new visual object for the HTL
var htlVisual = new VesselVisual({
    el: $('#htl-visual'),
    size: system.htlHeight,
    radius: system.htlRadius
});

// Create a new visual object for the Mash
var mashVisual = new VesselVisual({
    el: $('#mash-visual'),
    size: system.mashHeight,
    radius: system.mashRadius
});

// Create a new visual for the Kettle
var kettleVisual = new VesselVisual({
    el: $('#kettle-visual'),
    size: system.kettleHeight,
    radius: system.kettleRadius
});

htlVisual.init();
mashVisual.init();
kettleVisual.init();