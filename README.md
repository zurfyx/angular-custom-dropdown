# Angular Custom Dropdown

[![npm Version](https://img.shields.io/npm/v/angular-custom-dropdown.svg)](https://www.npmjs.com/package/angular-custom-dropdown)
[![Build Status](https://travis-ci.org/zurfyx/angular-custom-dropdown.svg?branch=master)](https://travis-ci.org/zurfyx/angular-custom-dropdown)

> Create simple Angular2+ dropdowns without relying on CSS frameworks.

## Demo

https://zurfyx.github.io/angular-custom-dropdown

## Features

- Light and simple
- No CSS framework tied
- Compatible with [Bootstrap](https://getbootstrap.com/docs/4.0/components/dropdowns/)

## Install

```
npm install angular-custom-dropdown
```

## Getting started

[my-module.module.ts](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.module.ts)

```
import { DropdownModule } from 'angular-custom-dropdown';

@NgModule({
  imports: [
    ...
    DropdownModule,
  ],
```

[my-module.component.ts](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.component.ts)

∅

[my-module.component.html](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.component.html)

```
<div class="dropdown" dropdown>
  <h1 class="dropdown-toggle" dropdownToggle>Angular Custom Dropdown ▼</h1>
  <ul class="dropdown-menu" dropdownMenu>
    <li><a class="neat" href="https://github.com/zurfyx/angular-custom-modal" rel="noopener" target="_blank">Check it out @ GitHub</a></li>
    <li><a class="neat" href="#">...</a></li>
  </ul>
</div>
```

[my-module.component.css](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.component.scss) [Optional]

Styles are optional and up to you. Below are the ones that the demo page uses, but you can also use Bootstrap styles for that, or any other compatible library or framework. For most cases you'll just need to adapt the class names of the HTML snippet above.

If you want to read more about styling see the [next section](#about-styling).

```
.dropdown  {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  display: block;
  align-self: center;
  width: 80%;
  opacity: 0;
  margin: -.25rem 0 0 10%; // -.25rem top (animation).
  padding: 0.25rem;
  list-style-type: none;
  background-color: #fff;
  border-radius: 4px;
  transition: .2s all ease-in;
}

.dropdown-menu li {
  padding: .5rem .5rem;
}

.dropdown-menu li + li {
  border-top: 1px solid #e1e1e1;
  padding-top: .5rem;
}

.dropdown-menu li > a {
  display: block;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  transition: .2s background-color ease-in;
}

.dropdown-menu li > a:hover {
  background-color: #e9e9e9;
}

.dropdown.open .dropdown-menu {
  opacity: 1;
  margin-top: 0;
}

a.neat {
  color: inherit;
  text-decoration: none;
}
```

## About styling

This library carries no predefined styles, which prevents clashing with your own set of styles or CSS frameworks. You can find the demo copy-paste dropdown styles above.

A minimal version (purely dropdown functionality) would look like the following:

```
.dropdown  {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  display: block;
  opacity: 0;
}

.dropdown.open .dropdown-menu {
  opacity: 1;
}
```

You can then add your own set of styles to make it look beautiful, or use a CSS framework. Note that
the classes naming [matches Bootstrap](https://getbootstrap.com/docs/4.0/components/dropdowns/#examples) (and it is actually compatible with it!).

### Aligning

Our demo example is centered with the parent container, and we do so through CSS. You can easy move the `.dropdown-menu` wherever you need it.

**Left**

*By default.*

**Center**

```
.dropdown-menu {
  left: 50%;
  transform: translateX(-50%);
}
```

**Right**

```
.dropdown-menu {
  right: 0;
}
```

## Advanced

All directives are exported using the same selector names, which allows you to access inner methods on your own templates or components.

### Accessing the dropdown reference in your own template

```
<span (click)="myDropdown.toggle()">While the toggle element is outside the dropdown, it has a reference to dropdown.</span>
<div #myDropdown=dropdown dropdown>
  ...
</div>
```

### Accessing the dropdown reference in your own component

All the examples below require the HTML to have a reference such as the following:

```
<div #myDropdown=dropdown dropdown>...</div>
```

Toggle dropdown:

```
import { DropdownDirective } from 'angular-custom-dropdown';
...
@ViewChild('myDropdown') myDropdown: DropdownDirective;

openNow() {
  this.myDropdown.open();
}
```

Subscribing to [dropdown status changes](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.component.ts):

```
import { DropdownDirective, TOGGLE_STATUS } from 'angular-custom-dropdown';
...
@ViewChild('myDropdown') myDropdown: DropdownDirective;

ngOnInit() {
  this.myDropdown.statusChange()
    .subscribe((status: TOGGLE_STATUS) => {
      let statusValue: String;
      if (status === TOGGLE_STATUS.OPEN) {
        statusValue = 'Opened';
      } else if (status === TOGGLE_STATUS.CLOSE) {
        statusValue = 'Closed';
      }
      console.info(`Dropdown status changed to "${statusValue}".`);
    });
}
```

Warning! This example has been shortened for the sake of readability. Subscriptions should always be cleaned up on destroy (see the full source code [here](https://github.com/zurfyx/angular-custom-modal/blob/master/example/app/app.component.ts)).

## Special thanks

To [pleerock](https://github.com/pleerock) for [ngx-dropdown](https://github.com/pleerock/ngx-dropdown), of which I took some design ideas.

## License

MIT © [Gerard Rovira Sánchez](//zurfyx.com)