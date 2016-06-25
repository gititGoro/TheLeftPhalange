import {Plane} from '../Types/Plane'

interface PlaneResult {
    newPlane: Plane,
    result: boolean,
}

interface PlaneReceiver {
    PushPlane(plane: Plane): void;
}

interface PlaneServer {
    PopPlane(): PlaneResult
}

class PlaneQueue implements PlaneReceiver, PlaneServer {
    planes: Plane[];
    maxSize: number;

    public PushPlane(plane: Plane): void {
        if (this.planes.length < this.maxSize) {
            this.planes.unshift(plane);
        }
    }

    public PopPlane(): PlaneResult {
        if (this.planes.length > 0)
            return { newPlane: this.planes.pop(), result: true };
        return { newPlane: null, result: false };
    }
}

export {PlaneServer, PlaneReceiver}

//add accessibility interfaces