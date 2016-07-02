import {PlaneModifier} from '../EventQueues/PlaneQueue'
import {Command, CommandResult} from './Command'

export class AdvancePlaneCommand extends Command {
    constructor(private queue: PlaneModifier, private distanceDelta) {
        super();
    }

    public execute(): CommandResult {
        this.queue.AdvancePlanes(-this.distanceDelta);
        let result: CommandResult = {
            success: true,
            retry: false
        };
        return result;
    }
}
1