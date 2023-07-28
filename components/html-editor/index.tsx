"use client";

import Editor from "@monaco-editor/react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const defaultHtml = `<!DOCTYPE html>
<html lang="en">
<head></head>
<body></body>
</html>
`;

export function HtmlEditor() {
  const { theme } = useTheme();

  const editorTheme = theme === "dark" ? "vs-dark" : "light";

  return (
    <Editor
      className="h-[calc(100vh_-_140px)]"
      defaultLanguage="html"
      theme={editorTheme}
      options={{
        minimap: {
          enabled: false,
        },
      }}
      loading={<ReloadIcon className="h-8 w-8 animate-spin text-muted" />}
      defaultValue={defaultHtml}
    />
  );
}
