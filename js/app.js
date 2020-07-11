function showHead() {
    document.querySelector('#shoulder').style.display = 'none';
    document.querySelector('#head').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

function showShoulders() {
    document.querySelector('#head').style.display = 'none';
    document.querySelector('#shoulder').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

function closeDiagram() {
    window.history.back();
}