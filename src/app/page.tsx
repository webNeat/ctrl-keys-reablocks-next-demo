"use client";
import { CommandPalette, CommandPaletteItem } from "reablocks";
import React from "react";
import { ThemeProvider, theme } from "reablocks";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CommandPalette
        placeholder="Type a command or search..."
        onSelectedIndexChange={(sel) => console.log("Selection", sel)}
        onHotkey={console.log}
      >
        <CommandPaletteItem key="export" hotkey="ctrl+up">
          Export Data
        </CommandPaletteItem>
        <CommandPaletteItem key="invite" hotkey="ctrl+down">
          Invite User
        </CommandPaletteItem>
      </CommandPalette>
    </ThemeProvider>
  );
}
