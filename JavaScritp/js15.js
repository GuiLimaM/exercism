const age = (planet, seconds) => {
    const periodoOrbital = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    }

    return parseFloat((seconds / 31557600 / periodoOrbital[planet]).toFixed(2));
};
// ((((idadeEmSegundos * 31557600) / 60) / 60) / 24) / 365.25
console.log(age('earth', 1000000000));