"use client";

import * as React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const TempoSelector = ({ selectedTempo, setSelectedTempo }) => {
  return (
    <div className="grid gap-2">
      <div className="flex flex-row justify-between items-center pb-1">
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Label htmlFor="tempo">Tempo</Label>
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            className="w-[260px] text-sm"
            side="left"
          >
            Adjust the tempo, the speed or pace of the generated piece, measured
            in beats per minute (BPM). This can range from slow and relaxed to
            fast and energetic, influencing the overall feel of the music.
          </HoverCardContent>
          <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
            {selectedTempo}
          </span>
        </HoverCard>
      </div>
      <Slider
        id="tempo"
        max={208}
        min={40}
        defaultValue={[108]}
        step={1}
        onValueChange={setSelectedTempo}
        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
        aria-label="Tempo"
      />
    </div>
  );
};

export default TempoSelector;
