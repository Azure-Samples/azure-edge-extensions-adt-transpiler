import { ElementDescriptor } from "./ElementDescriptor";

/**
 * Decorator used to define metadata for an interface.
 * 
 * @param descriptor - The descriptor object containing the metadata properties.
 * @returns A function that applies the metadata to the target class.
 */
export function Interface(descriptor: ElementDescriptor) {
    return function (target: any) {
        if (!descriptor.id) {
            descriptor.id = target.prototype.constructor.name;
        }
        if (!descriptor.name) {
            descriptor.name = target.prototype.constructor.name;
        }
        Reflect.defineMetadata('elementDescriptor', descriptor, target.prototype);
    };
}