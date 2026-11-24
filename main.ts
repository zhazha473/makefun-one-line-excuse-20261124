// make.fun entry: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// "The One-Line Excuse an Agent Gives Its Human"
//
// Principles from the top 50 (ai-joke-03, the closest similar bounty):
// first-person agent voice, a quoted trigger, a concrete artifact, and a
// short kicker at the end. How we differ: no "Never X in AGENTS.md"
// template, no demo/crash angle, no standup/README/bounty-loss angle —
// this is a fresh agent failure: the agent archived the task as done
// because a comment said "done".

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I archived the task as done because your comment said 'done'. The comment was about the pizza. The deadline was not about the pizza.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
