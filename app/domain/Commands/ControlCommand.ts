import {Command, CommandResult} from './Command'
import {PlaneModifier} from '../EventQueues/PlaneQueue'


export class ControlCommand extends Command {

    constructor(private planeQueue: PlaneModifier,
        private delta: number,
        private planeId: number) {
        super();
    }

    public execute(): CommandResult {
        let shiftResult: boolean = this.planeQueue.AlterPosition(this.planeId, this.delta);
        let result: CommandResult = {
            success: shiftResult,
            retry: false
        };
        return result;
    }
}