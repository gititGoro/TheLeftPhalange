import {Command, CommandResult} from './Command'
import {Plane} from '../Types/Plane'
import {PlaneServer} from '../EventQueues/PlaneQueue'

export class AnimateTakeOffCommand extends Command {

    constructor(private queue: PlaneServer, private route: string) {
        super();
    }

    public execute(): CommandResult {
     	if(this.queue.PendingTakeOff()){
             var nextPlaneResult = this.queue.PopPlane();
             if(nextPlaneResult.result){
                 console.log('Animating plane: '+nextPlaneResult.newPlane.id +' at route '+ this.route);
                 console.log('Revenue: '+nextPlaneResult.newPlane.revenue);
             }
         }
        let result: CommandResult = {
            success: true,
            retry: false
        }
        return result;
    }
}