import { useState } from "react";

export function useUpdate() {
    const [_, set] = useState({})
    return () => { set({}) }
}