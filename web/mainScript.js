
const title = document.getElementById('title');
const profileName = document.getElementsByName('profileName');

//boxes
const chartDash = document.querySelector('.chartDash');
const irrigation = document.querySelector('.irrigation');
const energy = document.querySelector('.energy');
const control = document.querySelector('.control');
const cropHelth = document.querySelector('.crop-helth');

// boxes in dashbourd 
const greenArea = document.querySelector('.green-area');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const soilMoisture = document.querySelector('.soil-moisture');
const light = document.querySelector('.light');
const ph = document.querySelector('.ph');
const conductivity = document.querySelector('.conductivity');
const rainfall = document.querySelector('.rainfall');
const flowControl = document.querySelector('.flow-control');

//menue
const setting = document.querySelector('.setting');
const energyBox = document.querySelector('.energyBox');
const crop = document.querySelector('.crop');
const chartBox = document.querySelector('.chartBox');
const water = document.querySelector('.water');
const products = document.querySelector('.products');
const dash = document.querySelector('.dash');
const exit = document.querySelector('.log-out');


window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    temp.classList.remove('hide');
    greenArea.classList.remove('hide');
    humidity.classList.remove('hide');
    soilMoisture.classList.remove('hide');
    light.classList.remove('hide');
    ph.classList.remove('hide');
    conductivity.classList.remove('hide');
    rainfall.classList.remove('hide');
    flowControl.classList.remove('hide');
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    control.classList.add('hide');
    cropHelth.classList.add('hide');

    profileName.values = params.get('userName');
}
dash.addEventListener('click', () => {
    title.textContent = 'dashboard';

    irrigation.classList.add('hide');
    energy.classList.add('hide');
    chartDash.classList.add('hide');
    temp.classList.remove('hide');
    greenArea.classList.remove('hide');
    control.classList.add('hide');
    humidity.classList.remove('hide');
    soilMoisture.classList.remove('hide');
    light.classList.remove('hide');
    ph.classList.remove('hide');
    conductivity.classList.remove('hide');
    rainfall.classList.remove('hide');
    flowControl.classList.remove('hide');
    cropHelth.classList.add('hide');
});

products.addEventListener('click', () => {
    title.textContent = 'products';

    cropHelth.classList.remove('hide');
    energy.classList.add('hide');
    chartDash.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.add('hide');
    humidity.classList.add('hide');
    soilMoisture.classList.add('hide');
    light.classList.add('hide');
    ph.classList.add('hide');
    conductivity.classList.add('hide');
    rainfall.classList.add('hide');
    flowControl.classList.add('hide');

});

water.addEventListener('click', () => {
    title.textContent = 'irrigation';
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.remove('hide');
    greenArea.classList.add('hide');
    temp.classList.add('hide');
    control.classList.add('hide');
    humidity.classList.add('hide');
    soilMoisture.classList.add('hide');
    light.classList.add('hide');
    ph.classList.add('hide');
    conductivity.classList.add('hide');
    rainfall.classList.add('hide');
    flowControl.classList.add('hide');
    cropHelth.classList.add('hide');

});

energyBox.addEventListener('click', () => {
    title.textContent = 'energy consumption';
    energy.classList.remove('hide');
    chartDash.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.add('hide');
    humidity.classList.add('hide');
    soilMoisture.classList.add('hide');
    light.classList.add('hide');
    ph.classList.add('hide');
    conductivity.classList.add('hide');
    rainfall.classList.add('hide');
    flowControl.classList.add('hide');
    cropHelth.classList.add('hide');

});


chartBox.addEventListener('click', () => {
    title.textContent = 'chart';
    chartDash.classList.remove('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.add('hide');
    humidity.classList.add('hide');
    soilMoisture.classList.add('hide');
    light.classList.add('hide');
    ph.classList.add('hide');
    conductivity.classList.add('hide');
    rainfall.classList.add('hide');
    flowControl.classList.add('hide');
    cropHelth.classList.add('hide');


});

setting.addEventListener('click', () => {
    title.textContent = 'control';
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.remove('hide');
    humidity.classList.add('hide');
    soilMoisture.classList.add('hide');
    light.classList.add('hide');
    ph.classList.add('hide');
    conductivity.classList.add('hide');
    rainfall.classList.add('hide');
    flowControl.classList.add('hide');
    cropHelth.classList.add('hide');

});

exit.addEventListener('click',()=>{
    location.assign('index.html');
});

