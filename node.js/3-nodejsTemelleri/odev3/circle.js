const pi = 3.14;

function circleArea(yariCap){
    let alan = pi * (yariCap * yariCap)
    console.log(`Alan: ${alan}`)
}

function circleCircumference(yariCap){
    let cevre = 2 * pi * yariCap;
    console.log(`Çevre: ${cevre}`)
}

// module.exports = circleArea;
// module.exports = circleCircumference;

module.exports = {
    circleArea,
    circleCircumference
}

// import
