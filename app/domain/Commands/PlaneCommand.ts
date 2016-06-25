import {Command, CommandResult} from './Command'
import {PlaneReceiver} from '../EventQueues/PlaneQueue'

abstract class PlaneCommand extends Command {

    abstract injectPlaneReceiver(queue: PlaneReceiver);
    abstract execute(): CommandResult ;
}

export{PlaneCommand}