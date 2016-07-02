import {Command} from '../Commands/Command'

export class CommandQueue {
    private queue: Command[];
    public errorLog: string[];

    public Length(): number {
        return this.queue.length;
    }

    public ExecuteNextCommand(): boolean {
        if (this.queue.length > 0) {
            var currentCommand = this.queue.pop();
            try {
                currentCommand.execute();
                return true;
            }
            catch (error) {
                this.errorLog.unshift(error);
                return false;
            }
        }
    }

    public AddToBackOfQueue(command: Command): void {
        this.queue.unshift(command);
    }

    public AddToFrontOfQueue(command: Command): void {
        this.queue.push(command);
    }
}