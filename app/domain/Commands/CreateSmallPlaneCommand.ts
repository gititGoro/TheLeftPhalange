import {CommandResult} from './Command'
import {PlaneCommand} from './PlaneCommand'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'
import {NumberHelper} from '../Utils'

class CreateSmallPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let smallPlanes = [PlaneSize.lightPassenger, PlaneSize.fixedWing] // repeat to give more weight to jumbo
        let randomIndex = NumberHelper.randomInt(smallPlanes.length, 0);
        let plane: Plane = {
            size: smallPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 300
        };

        if (smallPlanes[randomIndex] == PlaneSize.lightPassenger) {
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