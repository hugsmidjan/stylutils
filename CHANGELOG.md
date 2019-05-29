# Change Log

## Upcoming...

<!-- Add new lines here. Version number will be decided later -->

- ...

## 2.0.0

_2019-05-29_

- feat: Scope package as `@hugsmidjan/stylutils` for npmjs.com publishing

## 1.3.2

_2019-03-28_

- fix: `between(min, max)` now returns a plain `px` value if `min == max`

## 1.3.1

_2019-02-19_

- fix: Lint and unbreak single-line blocks inside `eplica-utils.styl`

## 1.3.0

_2019-01-30_

- feat: Update `normalize.css` to v8.0.1 - but reinstate some opinionated styles
- feat: Normalize `input[type="number"]` in Firefox
- feat: Add `$visible` boolean flag to `mediaqueries/_writeMediaFormatMarkers()`
  to display current mediaFormat name in lower-right corner.
- fix: Remove `px` unit from `_parseBreakPoints()` return values
- fix: Allow passing `_icon('')` to create `content: ''`.
- style: change indentation of upstream `normalize.css` to allow straight copy-paste
- ...

## 1.2.0

_2018-11-23_

- feat: Add `_writeMediaFormatMarkers()` to `mediaqueries`
- feat: Add `:focus` styling to `_sr-only-focusable()` in `a11y` and
  `_sr-offscreen()` and `_sr-offscreen--undo()` to replace `_tuck()`.
- feat: Break `a11y`, `propmagic`, `triangles`, `funcs` from `utils.styl`.

## 1.1.0

_2018-11-21_

- feat: Add \_lowerCase() and \_upperCase() string function helpers.
- feat: Break `icons`, `mediaqueries` and `quotes` modules away from
  `utils.styl`.
- feat: Also look for `minHeight` and `maxHeight` when parsing breakpoints
  and mediaqueries.

## 1.0.0

_2018-11-20_

- Initial release cloned off `hxmgulp/utils/styl`, with an install
  (make local copy) script.
