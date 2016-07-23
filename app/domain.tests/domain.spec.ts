import {Coordinator} from '../domain/Coordinator'
import {CommandQueue} from '../domain/EventQueues/CommandQueue'
import {PlaneQueue} from '../domain/EventQueues/PlaneQueue'
import {Player} from '../domain/Types/Player'

describe("domain tests", () => {

      describe("coordinator tests", () => {
            let mockCommandQueue: CommandQueue = new CommandQueue();
            let mockPlaneQueue: PlaneQueue = new PlaneQueue();
            let mockRoute: string = "animationRoute";
            let mockPlayer: Player = { difficulty: 2, revenue: 0, name: 'Johnson', id: 0 };
            let fixtureCoordinator: Coordinator = new Coordinator(mockCommandQueue, mockPlaneQueue, mockRoute, mockPlayer);

            it('initiating coordinator doesnt fail', () => expect(fixtureCoordinator.Start(12, 12)).toEqual(true));//TODO: get this to work. System js etc.
      })

      it('true is always true', () => expect(true).toEqual(true));
      it('null is not undefined', () => { expect(null).not.toEqual(undefined); });
});