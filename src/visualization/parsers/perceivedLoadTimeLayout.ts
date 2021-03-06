import { IParser } from "../components/Snapshot";
import { IAttributes, ILayoutState, IElementLayoutState, IDoctypeLayoutState, ITextLayoutState, IIgnoreLayoutState, Action } from "clarity-js";
import { IPerceivedElementLayoutState } from "./IPerceivedElementLayoutState";
import { Layout } from  "../parsers/layout";

export default class PerceivedLoadTimeLayout extends Layout {    
    
    setup(document: Document, frame: HTMLIFrameElement, base: string, thumbnail? : boolean) {
        this.layouts = {};
        this.document = document;
        this.base = base;
    }

    protected insertHelper(state: IPerceivedElementLayoutState, img : HTMLImageElement ){
        if(!!state.isPerceivedEvent){
            img.style.opacity = "1";
        }else{
            img.style.opacity = "0.1";
        }
    }

    render(state: IPerceivedElementLayoutState) {
        switch (state.action) {
            case Action.Insert:
                this.insert(state);
                break;
            case Action.Update:
                this.update(state);
                break;
            case Action.Remove:
                this.remove(state);
                break;
            case Action.Move:
                this.move(state);
                break;
        }
    }
}