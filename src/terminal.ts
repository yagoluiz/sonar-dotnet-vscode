import { window, Terminal } from "vscode";

export function selectActiveTerminal(): Terminal | undefined {
    return window.activeTerminal;
}
