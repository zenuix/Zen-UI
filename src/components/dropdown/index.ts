import DropdownComponent from './dropdown';
import DropdownContent from './subcomponents/dropdown-content';
import DropdownGroup from './subcomponents/dropdown-group';
import DropdownItem from './subcomponents/dropdown-item';
import DropdownSeparator from './subcomponents/dropdown-separator';
import DropdownTrigger from './subcomponents/dropdown-trigger';

const Dropdown = Object.assign(DropdownComponent, {
  content: DropdownContent,
  trigger: DropdownTrigger,
  group: DropdownGroup,
  item: DropdownItem,
  separator: DropdownSeparator
});
export default Dropdown;
