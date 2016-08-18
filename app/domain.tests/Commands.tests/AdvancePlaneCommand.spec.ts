import {PlaneModifier, PlaneQueue} from '../../domain/EventQueues/PlaneQueue'
import {Plane, PlaneSize} from '../../domain/Types/Plane'
import {Command, CommandResult} from '../../domain/Commands/Command'
import {AdvancePlaneCommand} from '../../domain/Commands/AdvancePlaneCommand'
import {PlaneHelper} from '../Helpers/PlaneHelper'

describe("AdvancePlaneCommand tests",()=>{

    describe("Successfully advance plane in queue",()=>{
        //setup
        let planeQueue:PlaneQueue = new PlaneQueue();
        let id:number = 0;
        let plane1:Plane = PlaneHelper.GetNewBigPlane(id++);
        let plane2:Plane = PlaneHelper.GetNewMediumPlane(id++);
        let plane3:Plane = PlaneHelper.GetNewSmallPlane(id++);

        planeQueue.PushPlane(plane1);
        planeQueue.PushPlane(plane2);
        planeQueue.PushPlane(plane3);

        let fixtureCommand:AdvancePlaneCommand = new AdvancePlaneCommand(planeQueue,10);

        fixtureCommand.execute(); // should reduce ever plane position by 10
        //assertion

        it('plane 1 distance from takeoff should be 90', () => expect(plane1.distanceFromTakeoff).toEqual(90));
    });

});