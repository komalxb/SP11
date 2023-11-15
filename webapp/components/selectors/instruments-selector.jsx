"use client";

import * as React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const InstrumentsSelector = ({
  selectedInstruments,
  setSelectedInstruments,
}) => {
  return (
    <div className="grid gap-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="instruments">Instruments</Label>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Specify particular instruments to feature in your composition, such as
          Piano, Guitar, Violin, or Drums. This option lets you shape the
          musical arrangement to your preference.
        </HoverCardContent>
      </HoverCard>
      <Textarea
        placeholder="Enter a list of instruments (eg. Piano, Guitar, Violin, Drums, etc.)"
        className="min-h-[120px]"
        onChange={(e) => setSelectedInstruments(e.target.value)}
      />
    </div>
  );
};

export default InstrumentsSelector;
