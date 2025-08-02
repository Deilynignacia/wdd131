// 2025
const currentYearSpan = document.getElementById('currentyear');
const today = new Date();
const currentYear = today.getFullYear();
currentYearSpan.textContent = currentYear;

// Last Modified
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = document.lastModified;
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;

// Windchill Calculation (Formula: Twc = 13.12 + 0.6215Ta - 11.37(V^0.16) + 0.3965Ta(V^0.16))
function calculateWindChill(temperature, windSpeed) 
    {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + 
        (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }

const windChillSpan = document.getElementById('windchill');

const TempC = 22; 
const WindKmH = 10;

const ThresholdC = 10;
const windThresholdKmH = 4.8;

if (TempC <= ThresholdC && WindKmH > windThresholdKmH) 
    {
    const windChillFactor = calculateWindChill(TempC, WindKmH);
    windChillSpan.textContent = `Wind Chill: ${windChillFactor.toFixed(1)} °C`;
    } 

else 
    {
    windChillSpan.textContent = 'Wind Chill: N/A';
    }
