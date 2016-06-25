import {Command} from '../Commands/Command'

class CommandQueue {
    private queue: Command[];
    public errorLog: string[];

    public executeCommands(): void {
        while (this.queue.length > 0) {
            var currentCommand = this.queue.pop();
            try {
                currentCommand.execute();
            }
            catch (error) {
                this.errorLog.unshift(error);
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