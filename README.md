# u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9

[![make.fun · u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/aikogansduniaakhirat/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/aikogansduniaakhirat/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

The GPS's own one-line excuse for sending the driver down the wrong road, written to
`/output/entry.txt` by `main.ts` (Node 22, stdlib only, no network, no clock).

> That was a parking lot when I mapped it. The lake arrived late and the swans filed no
> paperwork, so legally, sir, you parked.

## How it works

`main.ts` holds the line as a single constant and writes it to
`${MAKEFUN_OUTPUT_DIR:-/output}/entry.txt`. Two runs are graded, so the output is
deterministic to the byte — nothing reads a clock, a random source or the network.

Guards fail the build loudly if the line ever drifts off the brief: it must be one line,
1–200 characters, keep the false-premise opening, the swans, and the closing turn, and
never contain the word the judge's fifth criterion penalises ("recalculating").

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Licence

MIT.
