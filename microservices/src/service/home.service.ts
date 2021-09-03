import { ServiceSchema } from "moleculer";


const Home: ServiceSchema = {
    name: "home",
    actions: {
        home(): string {
            return "Microservices SAA"
        },
        homeAuth(): string {
            return "Microservices SAA security"
        },
        async started(): Promise<void> {
            this.logger.info("home microservice active")
        }
    }
}

export = Home;

