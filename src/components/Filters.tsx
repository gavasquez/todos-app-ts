import { TODO_FILTERS, FOOTER_FILTERS_BUTTONS } from "../consts";


interface Props {
  filterSelected: typeof TODO_FILTERS[ keyof typeof TODO_FILTERS ];
}


export const Filters = ( { filterSelected, onFilterChange }: Props ) => {
  return (
    <ul>
      <li>
        <a></a>
      </li>
    </ul>
  );
};