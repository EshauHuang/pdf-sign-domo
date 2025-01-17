import { combineReducers } from "redux";

import { dragReducer } from "./drag/reducer";
import { signaturesReducer } from "./signatures/reducer";
import { docSignaturesReducer } from "./docSignatures/reducer";
import { pdfReducer } from "./pdf/reducer";

export const rootReducer = combineReducers({
  drag: dragReducer,
  signature: signaturesReducer,
  docSignature: docSignaturesReducer,
  pdf: pdfReducer,
});
