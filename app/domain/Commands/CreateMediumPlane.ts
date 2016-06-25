import {CommandResult} from './Command'
import {PlaneCommand} from './PlaneCommand'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'

class CreateMediumPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let bigPlanes = [PlaneSize.mediumCommercial, PlaneSize.smallCommercial, PlaneSize.smallCommercial, PlaneSize.smallCommercial] // repeat to give more weight to jumbo
        let randomIndex = Math.random() * bigPlanes.length;
        let plane: Plane = {
            size: bigPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 600
        };

        if (bigPlanes[randomIndex] == PlaneSize.smallCommercial) {
            plane.revenue = 400;
        }
        this.queue.PushPlane(plane)
        return {
            success: true,
            retry: false
        };
    }
}

export {CreateMediumPlane}