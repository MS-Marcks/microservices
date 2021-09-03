import { ServiceSchema, Context } from "moleculer";
import jwt from 'jsonwebtoken';

const Auth: ServiceSchema = {
    name: "auth",
    actions: {
        create(ctx: Context): string {
            const { hash }: any = ctx.params;
            const token = jwt.sign({ hash }, 'secrets');
            return token;
        },
        async started(): Promise<void> {
            this.logger.info("auth microservice active")
        }
    }
}

export = Auth;