class Utility{
    static getInput(elementID: string): string {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
        return inputElement.value;
    }
}