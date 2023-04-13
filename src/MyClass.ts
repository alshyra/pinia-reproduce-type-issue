export class MyClass {
    constructor(public name: string, private _data: { size: number }) {}

    get size() {
        return this._data.size;
    }
    aBadassMethod() {
        console.log("I am a badass method");
    }
}
