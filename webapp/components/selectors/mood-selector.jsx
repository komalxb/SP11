"use client";

import * as React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MoodSelector = ({ selectedMood, setSelectedMood }) => {
  return (
    <div className="grid gap-2">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <Label htmlFor="mood">Mood</Label>
        </HoverCardTrigger>
        <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Select the mood to set the emotional tone of your music, ranging from
          Happy and Energetic to Calm and Melancholic, tailoring the output to
          fit the desired emotional context.
        </HoverCardContent>
      </HoverCard>
      <Textarea
        placeholder="Enter a mood or a mix of moods (eg. Happy, Energetic, Calm, Melancholic, etc.)"
        className="min-h-[120px]"
        onChange={(e) => setSelectedMood(e.target.value)}
      />
    </div>
  );
};

export default MoodSelector;
