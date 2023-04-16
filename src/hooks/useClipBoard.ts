import ClipboardJS from "clipboard";
import { useEffect } from "react";

export default function useClipBoard(selector: string, onSuccess?: () => void, onFail?: () => void) {
    useEffect(() => {
        const command = new ClipboardJS(selector);
        onSuccess && command.on("success", onSuccess);
        onFail && command.on("error", onFail)
        return () => {
            command.destroy()
        }
    })
}