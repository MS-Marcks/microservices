import { Context, ServiceSchema } from "moleculer";
import query from "../config/query";

const InfoPerson: ServiceSchema = {
    name: "infoperson",
    actions: {
        async getData(ctx: Context): Promise<any> {
            const q = await query(`SELECT * FROM person`);
            if (q.code === 200) {
                const result = q.query;
                return result;
            } else if (q.code === 404) {
                return "ERROR";
            }
        },
        async started(): Promise<void> {
            this.logger.info("infoperson microservice active")
        }
    }
}

export = InfoPerson;