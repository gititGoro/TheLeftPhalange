import {CommandQueue} from './EventQueues/CommandQueue'
import {PlaneQueue} from './EventQueues/PlaneQueue'
import {CreateSmallPlane, CreateMediumPlane, CreateBigPlane, PlaneCommand} from './Commands/CreatePlaneCommands'
import {AdvancePlaneCommand} from './Commands/AdvancePlaneCommand'
import {AnimateTakeOffCommand} from './Commands/AnimateTakeOffCommand'
import {NumberHelper} from './Utils'

class Mediator {
    private speed: number;
    private commandQueueIntervalId: NodeJS.Timer;
    private planeIntervalId: NodeJS.Timer;
    private planeMoverIntervalId:NodeJS.Timer;
    private planeAnimatorTakeOff:NodeJS.Timer;

    constructor(private commandQueue: CommandQueue,
        private planeQueue: PlaneQueue,
        private animationRoute: string) {
    }

    public Start(speed: number,difficulty:number): void {
        this.speed=speed;
        this.StartCommandQueueProductionLine();
        this.StartPlaneGenerator(difficulty);
        this.StartPlaneMover();
    }

    public Stop(speed: number): void {
        clearInterval(this.commandQueueIntervalId);
        clearInterval(this.planeIntervalId);
        clearInterval(this.planeMoverIntervalId);
        clearInterval(this.planeAnimatorTakeOff);
    }

    private StartCommandQueueProductionLine(): void {
        this.commandQueueIntervalId = setInterval(() => {
            while (this.commandQueue.Length() > 0) {
                let result: boolean = this.commandQueue.ExecuteNextCommand();
            }
        }, 5000 * this.speed);
    }

    private StartPlaneGenerator(difficulty: number) {
        let planeBag: PlaneCommand[];
        difficulty = Math.min(Math.max(0, difficulty), 10);
        let smallPlaneCount = 20 - difficulty;
        let mediumPlaneCount = NumberHelper.toInt(difficulty / 3 * 2)
        let bigPlaneCount = 20 - smallPlaneCount - mediumPlaneCount;

        for (let i: number = 0; i < smallPlaneCount; i++) {
            let createSmallPlane: CreateSmallPlane = new CreateSmallPlane();
            createSmallPlane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createSmallPlane);
        }

        for (let i: number = 0; i < mediumPlaneCount; i++) {
            let createMediumPlane: CreateMediumPlane = new CreateMediumPlane();
            createMediumPlane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createMediumPlane);
        }

        for (let i: number = 0; i < bigPlaneCount; i++) {
            let createbiglane: CreateBigPlane = new CreateBigPlane();
            createbiglane.injectPlaneReceiver(this.planeQueue);
            planeBag.push(createbiglane);
        }

        this.planeIntervalId = setInterval(() => {
            let randomIndex = NumberHelper.randomInt(20, 0);
            this.commandQueue.AddToBackOfQueue(planeBag[randomIndex]);
        }, 10000 * this.speed);
    }

    private StartPlaneMover(){
        this.planeIntervalId = setInterval(()=>{
        let command:AdvancePlaneCommand  = new AdvancePlaneCommand(this.planeQueue,10);
        },200);
    }

    private StartAnimatorWatch(){
        this.planeAnimatorTakeOff = setInterval(()=>{
            let command: AnimateTakeOffCommand = new AnimateTakeOffCommand(this.planeQueue,'drawPlane');
        },1000);
    }
}