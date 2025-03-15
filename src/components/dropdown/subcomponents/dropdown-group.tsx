import { forwardRef } from 'react';

type DropdownGroupProps = React.HtmlHTMLAttributes<HTMLUListElement> & {};

const DropdownGroup = forwardRef<HTMLUListElement, DropdownGroupProps>(({ children, ...props }, ref) => {
  return (
    <ul ref={ref} {...props}>
      {children}
    </ul>
  );
});
DropdownGroup.displayName = 'dropdown-group';

export default DropdownGroup;
