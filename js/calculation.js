function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    if (inputField.value == '') {
        return alert('Please enter two value');
    }
    inputField.value = '';
    return inputFieldValue;
}

function addAreaToField(shapeName, area) {
    if (area < 0 ) {
        return alert('Please Input Positive number');
    } else {
        const areaList = document.getElementById('area-list');
        const li = document.createElement('li');
        const sup = document.createElement('sup');
        sup.innerText = "2";
        li.innerText = shapeName + parseFloat(area).toFixed(2) + " cm";
        return areaList.appendChild(li) + li.appendChild(sup);
    }
}

// For triangle area
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangleBase = getInputFieldValueById('triangle-base');
    const triangleHeight = getInputFieldValueById('triangle-height');
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    addAreaToField('Triangle ', triangleArea);
});


// For rectangle area
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangleWidth = getInputFieldValueById('rectangle-width');
    const rectangleLength = getInputFieldValueById('rectangle-length');
    const rectangleArea = rectangleWidth * rectangleLength;
    addAreaToField('Rectangle ', rectangleArea);
});
//For Parallelogram area
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramBase = getInputFieldValueById('parallelogram-base');
    const parallelogramHeight = getInputFieldValueById('parallelogram-height');
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    addAreaToField('Parallelogram ', parallelogramArea);
});
//For Rhombus area
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusD1 = getInputFieldValueById('rhombus-d1');
    const rhombusD2 = getInputFieldValueById('rhombus-d2');
    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    addAreaToField('Rhombus ', rhombusArea);
});
//For Pentagon area
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pentagonP = getInputFieldValueById('pentagon-p');
    const pentagonB = getInputFieldValueById('pentagon-b');
    const pentagonArea = 0.5 * pentagonP * pentagonB;
    addAreaToField('Pentagon ', pentagonArea);
});
//For Ellipse area
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const ellipseA = getInputFieldValueById('ellipse-a');
    const ellipseB = getInputFieldValueById('ellipse-b');
    const ellipseArea = Math.PI * ellipseA * ellipseB;
    addAreaToField('Ellipse ', ellipseArea);
});