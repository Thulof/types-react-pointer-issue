import React from "react"

interface TextProps extends React.HTMLProps<HTMLDivElement> { foo?: string }

export const Text = React.forwardRef<HTMLDivElement, TextProps>((props, ref) => {
    return null;
})
