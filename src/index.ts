import * as dotenv from "dotenv";

dotenv.config();

import RunFactory from "./modules/Factory/RunFactory";

const factory = new RunFactory();

factory.run();
