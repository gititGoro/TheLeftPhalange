enum PlaneSize {
    fixedWing = 1,
    lightPassenger,
    smallCommercial,
    mediumCommercial,
    jumboJet,
    A380
}

interface Plane {
    size: PlaneSize,
    distanceFromTakeoff: number,
    revenue: number
}



export {Plane, PlaneSize}