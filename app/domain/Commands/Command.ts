
interface CommandResult {
    success: boolean;
    retry: boolean
}

abstract class Command {
    abstract execute(): CommandResult;
}
export {Command, CommandResult}