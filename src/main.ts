import { Greeter } from "./greeter";

window.addEventListener("load", (e: Event): void => {
    const myGreeter = new Greeter("parcel bundle test");
    myGreeter.greet();
});
