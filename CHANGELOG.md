# Change Log

## Upcoming...

<!-- Add new lines here. Version number will be decided later -->

-   feat: Normalize `input[type="number"]` in Firefox
-   feat: Add `$visible` boolean flag to `mediaqueries/_writeMediaFormatMarkers()` - to display current mediaFormat name in lower-right corner.
-   fix: Allow passing  `_icon('')` to create `content: ''`.
-   ...

## 1.2.0

_2018-11-23_

-   feat: Add `_writeMediaFormatMarkers()` to `mediaqueries`
-   feat: Add `:focus` styling to `_sr-only-focusable()` in `a11y` and
`_sr-offscreen()` and `_sr-offscreen--undo()` to replace `_tuck()`.
-   feat: Break `a11y`, `propmagic`, `triangles`, `funcs` from `utils.styl`.

## 1.1.0

_2018-11-21_

-   feat: Add _lowerCase() and _upperCase() string function helpers.
-   feat: Break `icons`, `mediaqueries` and `quotes` modules away from 
`utils.styl`.
-   feat: Also look for `minHeight` and `maxHeight` when parsing breakpoints 
and mediaqueries.

## 1.0.0

_2018-11-20_

-   Initial release cloned off `hxmgulp/utils/styl`, with an install 
(make local copy) script.
