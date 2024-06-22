import { createStore } from "vuex";
import coachesModule from "./modules/coaches/index.js";

const strore = createStore({
    modules: {
        coaches: coachesModule
    }
});

export default strore;