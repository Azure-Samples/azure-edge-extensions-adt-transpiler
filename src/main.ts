import { DtdlGenerator } from "./generator";
import { Interface, Property } from "./Decorators";

@Interface("My Class") 
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