# Angular Custom Dropdown

> Create simple Angular2+ dropdowns without relying on CSS frameworks.

## Install

```
npm install angular-custom-dropdown
```

## Result

![Dropdown result](/assets/result.png)

## Usage

my-module.module.ts

```
import { DropdownModule } from 'angular-custom-dropdown';

@NgModule({
  imports: [
    ...
    DropdownModule,
  ],
```

my-module.component.ts

```
<a class="dropdown" dropdown>
  <span>Click me to reveal dropdown</span>
  <ul class="dropdown-menu">
    <li><a [routerLink]="['...']">Profile</a></li>
    <li><a [routerLink]="['...']">Log out</a></li>
  </ul>
</a>
```

my-module.component.css

```
/* Show dropdown on click (active class set). */
.dropdown.active > .dropdown-menu {
  display: initial;
}

/* Hide dropdown by default */
ul.dropdown-menu {
  display: none;
  position: absolute;
}
```

## License

MIT © [Gerard Rovira Sánchez](//zurfyx.com)