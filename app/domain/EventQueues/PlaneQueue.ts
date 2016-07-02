import {Plane} from '../Types/Plane'
import {NumberHelper} from '../Utils'

interface PlaneResult {
    newPlane: Plane,
    result: boolean,
}

interface PlaneReceiver {
    PushPlane(plane: Plane): void;
}

interface PlaneServer {
    PopPlane(): PlaneResult;
    PendingTakeOff(): boolean;
}

interface PlaneModifier {
    AlterPosition(planeId: number, distanceDelta: number): boolean
    AdvancePlanes(distanceDelta: number): void
}


class PlaneQueue implements PlaneReceiver, PlaneServer, PlaneModifier {
    planes: Plane[];
    maxSize: number;

    public PushPlane(plane: Plane): void {
        if (this.planes.length < this.maxSize) {
            plane.id = this.GetNextId();
            this.planes.unshift(plane);
        }
    }

    public PopPlane(): PlaneResult {
        this.planes = this.planes.sort((leftPlane, rightPlane) => {
            return leftPlane.distanceFromTakeoff - rightPlane.distanceFromTakeoff;
        });
        if (this.planes.length > 0)
            return { newPlane: this.planes.pop(), result: true };
        return { newPlane: null, result: false };
    }

    public AlterPosition(planeId: number, distanceDelta: number): boolean {
        let found = false;
        this.planes.forEach(function (plane) {
            if (plane.id == planeId) {
                found = true;
                plane.distanceFromTakeoff += distanceDelta;
            }
        });
        return found;
    }

    public AdvancePlanes(distanceDelta: number): void {
        for (let i = 0; i < this.planes.length; i++) {
            this.AlterPosition(this.planes[i].id, distanceDelta);
        }
    }

    public PendingTakeOff(): boolean {
        let planesToTakeOff: Plane[] = this.planes.filter((plane) => {
            return plane.distanceFromTakeoff <= 0;
        });

        return planesToTakeOff.length > 0;
    }

    private GetNextId(): number {
        let randomId = NumberHelper.randomInt(this.maxSize * 100000, 0); //big range to minimize collisions
        let found = false;
        do {
            found = false;
            for (let i = 0; i < this.planes.length; i++) {
                if (this.planes[i].id == randomId) {
                    found = true;
                    randomId = NumberHelper.randomInt(this.maxSize * 100000, 0);
                }
            }
        } while (found);
        return randomId;
    }
}


export {PlaneServer, PlaneReceiver, PlaneModifier, PlaneQueue}

//add accessibility interfaces