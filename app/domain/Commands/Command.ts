
interface CommandResult {
    success: boolean;
    retyAttempts: number //if zero, only try command once
}

abstract class Command {
    abstract execute(): CommandResult;
}
export {Command, CommandResult}