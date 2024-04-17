import { authHandle } from "./handlers/authHandler";

import { hirinsHandle } from "./handlers/hiringsHandle";

export default [...authHandle, ...hirinsHandle];
