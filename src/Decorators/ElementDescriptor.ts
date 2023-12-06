/**
* Provides a common interface for all DTDL element descriptors (e.g. Interface, property, method, etc.)
* for use with DTDL decorators.
*/
export class ElementDescriptor{
    /**
     * The unique DTMI identifier for the element.
     */
    public id: string;

    /**
     * A human readable name of the element.
     */
    public name: string;

    /**
     * A textual description of the element.
     */
    public description: string;

    /**
     * A comment that describes the element.
     */
    public comment: string;
}