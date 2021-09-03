import { Context, ServiceSchema } from "moleculer";


const ServiceB: ServiceSchema = {
    name: "serviceb",
    actions: {
        async getData(ctx: Context): Promise<any> {
            return " Service B";
        },
        async started(): Promise<void> {
            this.logger.info("serviceA microservice active")
        }
    }
}

export = ServiceB;