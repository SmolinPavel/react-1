```jsx
import { Frame, Navbar, Menu, MenuItem, Dropdown } from '@lightelligence/react';
<Frame>
  <Navbar>
    <Menu>
      <MenuItem href="https://lightelligence.io">MenuItem 1</MenuItem>
      <MenuItem href="https://lightelligence.io">MenuItem 2</MenuItem>
      <MenuItem href="https://lightelligence.io">MenuItem 3</MenuItem>
      <MenuItem href="https://lightelligence.io">MenuItem 4</MenuItem>
    </Menu>
    <Menu>
      <Dropdown label="Dropdown">
        <Menu>
          <MenuItem href="https://lightelligence.io">MenuItem 1</MenuItem>
          <MenuItem href="https://lightelligence.io">MenuItem 2</MenuItem>
          <MenuItem href="https://lightelligence.io">MenuItem 3</MenuItem>
        </Menu>
      </Dropdown>
    </Menu>
  </Navbar>
</Frame>
```
