import { Interface, Description, Property} from "../src/Decorators";
import { Guid } from "guid-typescript";
import { DtdlGenerator } from "../src/generator";

@Interface("Identified Object")
@Description("This is a root interface for all Digital Twin objects.")
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

@Interface("Power System Resource")
@Description("This is a root class for all objects that belong to the collection of power system resources.")
class PowerSystemResource extends IdentifiedObject {
    @Property()
    location: string = "";
}

const psr = new PowerSystemResource();
const dtdl = DtdlGenerator.generateDtdlFromClass(new IdentifiedObject());
console.log(dtdl);