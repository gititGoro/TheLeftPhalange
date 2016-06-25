import {CommandResult} from './Command'
import {PlaneCommand} from './PlaneCommand'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'

class CreateBigPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let bigPlanes = [PlaneSize.A380, PlaneSize.jumboJet, PlaneSize.jumboJet] // repeat to give more weight to jumbo
        let randomIndex = Math.random() * bigPlanes.length;
        let plane: Plane = {
            size: bigPlanes[randomIndex],
            distanceFromTakeoff: 500,
            revenue: 1000
        };

        if (bigPlanes[randomIndex] == PlaneSize.jumboJet) {
            plane.revenue = 800;
        }
        this.queue.PushPlane(plane)
        return {
            success: true,
            retry: false
        };
    }
}

export {CreateBigPlane}