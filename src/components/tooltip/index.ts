import TooltipComponent from './tooltip';
import TooltipContent from './subcomponents/tooltip-content';
import TooltipTrigger from './subcomponents/tooltip-trigger';

const Tooltip = Object.assign(TooltipComponent, {
  Content: TooltipContent,
  Trigger: TooltipTrigger
});

export default Tooltip;
