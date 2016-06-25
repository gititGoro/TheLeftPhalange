import {CommandResult} from './Command'
import {PlaneCommand} from './PlaneCommand'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'
import {NumberHelper} from '../Utils'
class CreateMediumPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let mediumPlanes = [PlaneSize.mediumCommercial, PlaneSize.smallCommercial, PlaneSize.smallCommercial, PlaneSize.smallCommercial] // repeat to give more weight to jumbo
        let randomIndex = NumberHelper.randomInt(mediumPlanes.length, 0);
        let plane: Plane = {
            size: mediumPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 600
        };

        if (mediumPlanes[randomIndex] == PlaneSize.smallCommercial) {
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