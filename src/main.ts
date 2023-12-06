import { DtdlGenerator } from "./generator";
import { Interface, Property } from "./Decorators";

@Interface({
    name: "MyClass",
    id: "MyClass",
    description: "This is a root interface for all Digital Twin objects.",
    comment: "This is a comment."
}) 
class MyClass {
    @Property()
    id: string = "";
    @Property()
    name: string = "";
    @Property()
    age: number = 0;
    @Property()
    isOnline: boolean = false;
}

const dtdl = DtdlGenerator.generateDtdlFromClass(new MyClass());
console.log(dtdl);