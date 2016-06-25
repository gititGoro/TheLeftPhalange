import {CommandResult} from './Command'
import {PlaneCommand} from './PlaneCommand'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'

class CreateSmallPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let bigPlanes = [PlaneSize.lightPassenger, PlaneSize.fixedWing] // repeat to give more weight to jumbo
        let randomIndex = Math.random() * bigPlanes.length;
        let plane: Plane = {
            size: bigPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 300
        };

        if (bigPlanes[randomIndex] == PlaneSize.lightPassenger) {
            plane.revenue = 100;
        }
        this.queue.PushPlane(plane)
        return {
            success: true,
            retry: false
        };
    }
}

export {CreateSmallPlane}