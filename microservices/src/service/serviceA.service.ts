import { Context, ServiceSchema } from "moleculer";


const ServiceA: ServiceSchema = {
    name: "servicea",
    actions: {
        async getData(ctx: Context): Promise<any> {
            return "Service A " + (await ctx.call("serviceb.getData"));
        },
        async started(): Promise<void> {
            this.logger.info("serviceA microservice active")
        }
    }
}

export = ServiceA;