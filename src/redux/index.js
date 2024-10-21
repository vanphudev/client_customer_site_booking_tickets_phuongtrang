import {configureStore} from "@reduxjs/toolkit";

import languageSlice from "./stores/languageSlice";

export const store = configureStore({
   reducer: {counter: languageSlice},
});
