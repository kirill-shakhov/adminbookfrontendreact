import {FC} from "react";

type Item = {
  name: string;
}

interface RecentItemsSelectorProps {
  chooseItem: (item: string) => void,
  items: Item[]
}

const RecentItemsSelector: FC<RecentItemsSelectorProps> = ({chooseItem, items}) => {

  const handleItemSelected = (item: Item) => {
    chooseItem(item.name);
  }

  return (
    <div>

      <div className="flex gap-2 flex-wrap">
        {items.map((item, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleItemSelected(item)}
            className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 pointer">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentItemsSelector;