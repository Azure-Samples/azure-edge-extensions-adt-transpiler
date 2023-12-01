/**
 * Decorator that defines an interface with the specified name.
 * 
 * @param name - The name of the interface.
 * @returns A decorator function.
 */
export function Interface(name: string) {
    return function (target: any) {
        Reflect.defineMetadata('name', name, target.prototype);
    };
}