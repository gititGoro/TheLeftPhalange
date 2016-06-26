import {CommandQueue} from './CommandQueue'
import {Plane} from '../Types/Plane'
import {Player} from '../Types/Player'
import {AnimateTakeOffCommand} from '../Commands/AnimateTakeOffCommand'

interface TaxiingPlane {
    plane: Plane,
    turbulenceDelay: number
}

export class RunwayPipeLine {

    private takeOffQueue: TaxiingPlane[];

    constructor(private commandQueue: CommandQueue,
        private player: Player,
        private delayFactor: number,
        private animationRoute: string) {
        this.startProductionLine();
    }

    public ScheduleForTakeOff(plane: Plane) {
        let turbulenceDelay: number = 0;
        if (this.takeOffQueue.length > 0) {
            turbulenceDelay = (this.takeOffQueue[0].plane.size - plane.size)
                * (this.takeOffQueue[0].turbulenceDelay + this.delayFactor);
            turbulenceDelay = Math.max(0, turbulenceDelay);
        }
        let taxi: TaxiingPlane = {
            turbulenceDelay: turbulenceDelay,
            plane: plane
        };
        this.takeOffQueue.unshift(taxi);
    }

    private startProductionLine() {
        setInterval(() => {
            if (this.takeOffQueue.length > 0) {
                let lastIndex = this.takeOffQueue.length - 1;
                this.takeOffQueue[lastIndex].turbulenceDelay--;
                if (this.takeOffQueue[lastIndex].turbulenceDelay <= 0) {
                    var readyTaxi = this.takeOffQueue.pop();
                    let animationCommand: AnimateTakeOffCommand =
                        new AnimateTakeOffCommand(readyTaxi.plane, this.animationRoute);
                    this.commandQueue.AddToBackOfQueue(animationCommand);
                    this.player.revenue += readyTaxi.plane.revenue;
                }
            }
        }, 1000);
    }

}

