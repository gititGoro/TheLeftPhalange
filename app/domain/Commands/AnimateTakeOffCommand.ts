import {Command, CommandResult} from './Command'
import {Plane} from '../Types/Plane'

class AnimateTakeOffCommand extends Command {

    constructor(private plane: Plane, private route: string) {
        super();
    }

    public execute(): CommandResult {
        console.log('Not implemented: animating takeoff for plane: ' + this.plane.id);
        let result: CommandResult = {
            success: true,
            retry: false
        }
        return result;
    }
}