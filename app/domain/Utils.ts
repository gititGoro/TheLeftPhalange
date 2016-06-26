class NumberHelper {
    public static randomInt(range: number, offset: number): number {
        return NumberHelper.toInt((Math.random() * range + offset));
    }

    public static toInt(number: number): number {
        return parseInt((number).toFixed(0));
    }
}

export {NumberHelper}