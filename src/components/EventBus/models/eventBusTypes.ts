export enum EEventBusActions {
    ACTION = "action",
    INIT = "init",
    FLOW_CDM = "flow:component-did-mount",
    FLOW_CDU = "flow:component-did-update",
    FLOW_RENDER = "flow:render"
}

export type TListener = Record<EEventBusActions, Function[]>;
