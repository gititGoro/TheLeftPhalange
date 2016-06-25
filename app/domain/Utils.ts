class NumberHelper {
    public static randomInt(range: number, offset: number): number {
        return parseInt((Math.random() * range + offset).toFixed(0));
    }
}

export {NumberHelper}