import { Interface, Description, Property} from "../src/Decorators";
import { Guid } from "guid-typescript";
import { DtdlGenerator } from "../src/generator";

@Interface({
    name: "Identified Object",
    id: "IdentifiedObject",
    description: "This is a root interface for all Digital Twin objects.",
    comment: "This is a comment."
})
class IdentifiedObject {
    @Property()
    description: string = "";
    @Property()
    mRID: string = Guid.create().toString();
    @Property()
    name: string = "";
    @Property()
    energyIdentCodeEic: string = "";
    @Property()
    shortName: string = "";
}

@Interface({
    name: "Power System Resource",
    id: "PowerSystemResource",
    description: "This is a root interface for all objects that belong to the collection of power system resources.",
    comment: "This is a comment."
})
class PowerSystemResource extends IdentifiedObject {
    @Property()
    location: string = "";
}

const psr = new PowerSystemResource();
const dtdl = DtdlGenerator.generateDtdlFromClass(new IdentifiedObject());
console.log(dtdl);