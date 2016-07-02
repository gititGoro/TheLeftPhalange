import {Command, CommandResult} from './Command'
import {Plane} from '../Types/Plane'

export class AnimateTakeOffCommand extends Command {

    constructor(private plane: Plane, private route: string) {
        super();
    }

    public execute(): CommandResult {
        console.log('Animating plane: ' + this.plane.id + ' at route ' + this.route);
        console.log('Revenue: ' + this.plane.revenue);
        let result: CommandResult = {
            success: true,
            retry: false
        }
        return result;
    }
}