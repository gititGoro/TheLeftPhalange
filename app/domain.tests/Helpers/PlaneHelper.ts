import {Plane, PlaneSize} from '../../domain/Types/Plane'

export class PlaneHelper {
    public static GetNewBigPlane(id: number): Plane {
        return {
            size: PlaneSize.A380,
            distanceFromTakeoff: 100,
            revenue: 200,
            id: id
        };
    }

    public static GetNewMediumPlane(id: number): Plane {
        return {
            size: PlaneSize.mediumCommercial,
            distanceFromTakeoff: 150,
            revenue: 150,
            id: id
        };
    }

    public static GetNewSmallPlane(id: number): Plane {
        return {
            size: PlaneSize.fixedWing,
            distanceFromTakeoff: 170,
            revenue: 100,
            id: id
        };
    }
}