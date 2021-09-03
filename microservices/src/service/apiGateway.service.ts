import { ServiceSchema } from "moleculer";
import ApiGwService from "moleculer-web";
import helmet from "helmet";
const E = require("moleculer-web").Errors;
import jwt from 'jsonwebtoken';

const ApiGatewayService: ServiceSchema = {
    name: "Central",
    mixins: [ApiGwService],
    settings: {
        use: [
            helmet()
        ],
        port: process.env.APIGATEWAY_PORT || 3000,
        cors: {
            // Configures the Access-Control-Allow-Origin CORS header.
            origin: "*",
            // Configures the Access-Control-Allow-Methods CORS header. 
            methods: "*",
            // Configures the Access-Control-Allow-Headers CORS header.
            allowedHeaders: "*",
            // Configures the Access-Control-Expose-Headers CORS header.
            exposedHeaders: [],
            // Configures the Access-Control-Allow-Credentials CORS header.
            credentials: false,
            // Configures the Access-Control-Max-Age CORS header.
            maxAge: 3600
        },
        routes: [{
            authorization: true,
            path: "/api",
            aliases: {
                "GET /": "home.homeAuth",
                "GET /dashboard": "infoperson.getData",
                "POST /services": "servicea.getData",
            }
        }, {
            authorization: false,
            path: "/",
            aliases: {
                "GET /": "home.home",
                "POST /auth": "auth.create",
            }
        }],
        bodyParsers: {
            json: true,
            urlencoded: { extended: true }
        },
        onError(req, res, err): void {
            if (err) {
                const { code, type } = err;
                this.logger.error(code, type);
            }
        }
    },
    methods: {
        async authorize(ctx, route, req, res): Promise<any> {
            try {
                const token = req.headers["x-token-admin"].split(" ");
                if (token[0] === "bearer") {
                    jwt.verify(token[1], 'secrets');
                    return Promise.resolve(ctx);
                } else {
                    return Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN));
                }
            } catch (error) {
                return Promise.reject(new E.UnAuthorizedError(E.ERR_INVALID_TOKEN));
            }
        }
    },
    async started(): Promise<void> {
        this.logger.info("Api central iniciada");
    }
}

export = ApiGatewayService;