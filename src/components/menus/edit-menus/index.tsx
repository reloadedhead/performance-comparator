import React, { FunctionComponent } from 'react';
import { Menu, MenuItem } from '@material-ui/core';

interface EditMenuProps {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  options: { label: string; handler: () => void }[];
}

const EditMenu: FunctionComponent<EditMenuProps> = ({ anchorEl, handleClose, options }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {options.map(option => (
        <MenuItem key={option.label} onClick={option.handler}>
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default EditMenu;
