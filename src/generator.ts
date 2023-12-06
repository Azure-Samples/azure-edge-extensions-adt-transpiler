import 'reflect-metadata';

/**
 * Map that defines the mapping between type names and their corresponding DTDL schema types.
 * @type {Map<string, string>}
 */
const typeSchemaMap = new Map<string, string>([
    ['String', 'string'],
    ['number', 'double'],
    ['boolean', 'boolean'],
    ['object', 'object'],
    ['array', 'array'],
]);

/**
 * Class responsible for generating DTDL (Digital Twin Definition Language) from a given class instance.
 */
export class DtdlGenerator {
    /**
     * Generates DTDL from a class instance.
     * @param classInstance - The class instance to generate DTDL from.
     * @returns The generated DTDL as a JSON object.
     */
    static generateDtdlFromClass(classInstance: any): any {
        const dtdlProperties = DtdlGenerator.getContents(classInstance);
        const type = classInstance.constructor.name;
        const descriptor = Reflect.getMetadata('elementDescriptor', classInstance);
        const dtdl = `{
            "@context": "dtmi:dtdl:context;2",
            "@type": "Interface",
            "@id": "dtmi:com:example:${descriptor.id};1",
            "displayName": "${descriptor.name}",
            "contents": [
                ${dtdlProperties.join(',\n')}
            ]
        }`;

        return JSON.parse(dtdl);
    }

    /**
     * Retrieves the contents of a class instance and generates DTDL properties.
     * @param classInstance - The class instance from which to retrieve the contents.
     * @returns An array of DTDL properties generated from the contents.
     */
    private static getContents(classInstance: any) {
        const contents = Reflect.getMetadata('contents', classInstance);
        const dtdlProperties = contents.map((property: any) => {
            const type: string = property.type;
            return `{
                "@type": "Property",
                "name": "${property.name}",
                "schema": "${typeSchemaMap.get(type)}"
            }`;
        });
        return dtdlProperties;
    }
}
