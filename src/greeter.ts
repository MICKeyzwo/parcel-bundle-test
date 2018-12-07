export const Greeter = class {
    private name: string
    constructor(name: string) {
        this.name = name;
    }
    public greet(): void {
        console.log(`Hi, I'm ${this.name}`);
    }
}
