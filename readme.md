# challenges intersection league

trying to create a gui help optimize in the league of legends new teamwork challenges by finding compositions that contain the most challenges.

still wip, you can pr if you want.

## todo
- [x] collect the data
- [x] parse the data
- [x] create a basic ui
- [x] add functions to intersect the sets
- [x] update the ui according to the challenge selections
- [x] copy the selected champion into the clipboard
- [x] update the ui according to the champion selections
- [x] add a page to good composition found for each challenges that require 5 specifics champions
- [ ] show challenges for each champions when hovering them 
- [ ] implement a way to handle Variety's Overrated
- [ ] use genetic algorithms to find the best compositions to try to avoid having always the same champs in the best compositions
- [ ] add a filter for specifics champions in optimized compositions


## install
you need python

```
make install
```

you also need `compositions.json` and `compositions_factions.json` which can be obtained by running `brute_force_compositions.ipynb` with jupyter

## run
```
python app.py
```

## thanks

- thanks to @celiendonze and @Etiouse for helping me populate the initial `challenges.json`
- thanks to @Pomarine for reviewing and correcting the `challenges.json` file
