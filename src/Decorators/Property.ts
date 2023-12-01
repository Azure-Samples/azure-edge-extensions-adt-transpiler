/**
 * Decorator that marks a property as a DTDL property.
 * 
 * @returns {Function} The decorator function.
 */
export function Property() {
    return function (target: any, propertyKey: string) {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        const properties = Reflect.getMetadata('contents', target) || [];
        properties.push({ name: propertyKey, type: type.name });
        Reflect.defineMetadata('contents', properties, target);
    };
}