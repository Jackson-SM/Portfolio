import * as Select from '@radix-ui/react-select';

import { styled } from '../../../../../config/stitches.config';

export const StyledSelectRoot = styled(Select.Root, {
  outline: 'none',
});
export const StyledSelectTrigger = styled(Select.Trigger, {
  background: '$backgroundLight',
  color: '$text',
  border: 'none',
  padding: '10px 20px',
  fontSize: 14,
  borderRadius: 5,

  display: 'flex',
  alignItems: 'center',
  gap: 10,

  fontFamily: 'Raleway',

  marginRight: 40,
});
export const StyledSelectValue = styled(Select.Value, {});
export const StyledSelectIcon = styled(Select.Icon, {});

export const StyledSelectPortal = styled(Select.Portal, {});
export const StyledSelectContent = styled(Select.Content, {
  background: '$backgroundLight',
  zIndex: 999999,
  padding: 10,
  borderRadius: 5,
});
export const StyledSelectViewport = styled(Select.Viewport, {});
export const StyledSelectGroup = styled(Select.Group, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});
export const StyledSelectLabel = styled(Select.Label, {
  fontSize: 13,
  marginLeft: 10,
  color: '$primaryLight',
});
export const StyledSelectItem = styled(Select.Item, {
  padding: 8,
  fontSize: 15,
  borderRadius: 5,
  cursor: 'pointer',
  outline: 'none',

  '& svg': {
    width: 18,
    height: 18,
  },

  '&:hover': {
    background: '$primary',
  },
});
export const StyledSelectIconIndicator = styled(Select.ItemIndicator, {});
export const StyledSelectItemText = styled(Select.ItemText, {});
