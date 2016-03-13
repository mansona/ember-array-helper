# ember-array-helper
[![npm version](https://badge.fury.io/js/ember-array-helper.svg)](https://badge.fury.io/js/ember-array-helper)
[![Build Status](https://travis-ci.org/kellyselden/ember-array-helper.svg?branch=master)](https://travis-ci.org/kellyselden/ember-array-helper)
[![Dependency Status](https://david-dm.org/kellyselden/ember-array-helper.svg)](https://david-dm.org/kellyselden/ember-array-helper)
[![devDependency Status](https://david-dm.org/kellyselden/ember-array-helper/dev-status.svg)](https://david-dm.org/kellyselden/ember-array-helper#info=devDependencies)

Perfect companion to the {{hash ...}} template helper.

```hbs
{{hash
  name="parent"
  children=(array
    (hash
      name="child1"
    )
    (hash
      name="child2"
    )
  )
}}
```
