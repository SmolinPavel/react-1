# Menu

Either pass items as children of type `MenuItem`...

```jsx
import { Menu, MenuItem } from '@lightelligence/react';
const onClick = (event) => {
  console.log('clicked');
};
<Menu>
  <MenuItem to="https://lightelligence.io" target="_blank">MenuItem 1</MenuItem>
  <MenuItem onClick={onClick}>MenuItem 2</MenuItem>
</Menu>
```

...or provide `items` as an array prop.

```jsx
import { Menu } from '@lightelligence/react';
const onClick = (event) => {
  console.log('clicked');
};
<Menu items={[{
  label: 'MenuItem 1',
  to: 'https://lightelligence.io',
  target: '_blank'
},
{
  label: 'MenuItem 2', onClick
},
]}/>
```

Since `MenuItem` uses our router-aware `Link`-Component under the hood, you could pass in routes as well as any other url.


## Submenus

Declare submenus by the corresponding flag `submenu`

```jsx
import { Menu } from '@lightelligence/react';
const onClick = (event) => {
  console.log('clicked');
};
<Menu
  submenu
  items={[{
    label: 'MenuItem 1',
    to: 'https://lightelligence.io',
    target: '_blank'
  }, {
    label: 'MenuItem 2', onClick
  }]}
/>
```
