function main(input) {
    let systems = {};
    for (let line of input) {
        [currSystem, currComponent, currSubcomponent] = line.split(" | ");
        if (!systems.hasOwnProperty(currSystem)) {
            systems[currSystem] = {};
        }

        let component = systems[currSystem];
        if (!component.hasOwnProperty(currComponent)) {
            component[currComponent] = [];
        }

        let subComponent = component[currComponent]
        if (!subComponent.includes(currSubcomponent)) {
            subComponent.push(currSubcomponent);
        }

    }
    let sortedSystems = Object.entries(systems)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]));

    for (const system of sortedSystems) {
        console.log(system[0]);
        let component = system[1];
        let sortedComponents = Object.entries(component).sort((a, b) => b[1].length - a[1].length);

        for (const component of sortedComponents) {
            console.log(`|||${component[0]}`);
            let subComponents = component[1];
            for (const subComponent of subComponents) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}


main(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',]
);