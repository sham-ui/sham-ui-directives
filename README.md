# sham-ui-directives

[![Build Status](https://travis-ci.com/sham-ui/sham-ui-directives.svg?branch=master)](https://travis-ci.com/sham-ui/sham-ui-directives)
[![npm version](https://badge.fury.io/js/sham-ui-directives.svg)](https://badge.fury.io/js/sham-ui-directives)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

Directives for sham-ui-templates

### Install

```bash
# npm
npm install sham-ui-directives
```

```bash
# yarn
yarn add sham-ui-directives
```

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

##### Table of Contents

-   [disabled](#disabled)
    -   [Examples](#examples)

#### disabled

Directive for "disabled" attribute

##### Examples

```javascript
<template>
  <input :disabled={{inputDisabled}}/>
</template>
<script>
    import { disabled } from 'sham-ui-directives';
    import { options } from 'sham-ui-macro/babel.macro';

    class Input extends Template {
        @options inputDisabled = true;

        constructor() {
            super( ...arguments );
            this.directives = {
                ...( this.directives || {} ),
                disabled
            };
        }
    }

    export default Input;
</script>
```
