import {CommandResult,Command} from './Command'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../Types/Plane'
import {NumberHelper} from '../Utils'

abstract class PlaneCommand extends Command {

    abstract injectPlaneReceiver(queue: PlaneReceiver);
    abstract execute(): CommandResult ;
}

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

class CreateBigPlane extends PlaneCommand {

    private queue: PlaneReceiver;

    injectPlaneReceiver(queue: PlaneReceiver) {
        this.queue = queue;
    }

    execute(): CommandResult {

        let bigPlanes = [PlaneSize.A380, PlaneSize.jumboJet, PlaneSize.jumboJet] // repeat to give more weight to jumbo
        let randomIndex = NumberHelper.randomInt(bigPlanes.length, 0);
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

export {CreateMediumPlane,CreateBigPlane,CreateSmallPlane,PlaneCommand}