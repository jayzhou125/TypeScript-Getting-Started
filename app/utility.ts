function getInput(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string): void {
    console.log(message);
}

export {getInput as getValue, logger};
