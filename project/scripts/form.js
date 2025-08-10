// Array options of participation
const auditionAreas = [
    { id: "acting", name: "auditionArea", value: "acting", text: "Acting" },
    { id: "singing", name: "auditionArea", value: "singing", text: "Singing (character)" },
    { id: "dancing", name: "auditionArea", value: "dancing", text: "Dancing" },
    { id: "ensemble-choir", name: "auditionArea", value: "ensemble-choir", text: "Ensemble (choir)" },
    { id: "ensemble-dance", name: "auditionArea", value: "ensemble-dance", text: "Ensemble (dance)" },
    { id: "crew", name: "auditionArea", value: "crew", text: "Production Crew" }
];

const auditionOptions = document.getElementById("audition-options");

const htmlStrings = auditionAreas.map(area => {
    return `
        <div>
            <input type="checkbox" id="${area.id}" name="${area.name}" value="${area.value}">
            <label for="${area.id}">${area.text}</label>
        </div>
    `;
});

const allHtml = htmlStrings.join('');

auditionOptions.innerHTML = allHtml;