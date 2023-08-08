import { Button } from "core/components/buttons";
import { useDelete } from "core/contexts/api-context/hooks";

interface CategoryItemProps {
  item: any;
  onEdit: (item: any) => void;
  onRemoved?: () => void;
}
const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  onEdit,
  onRemoved,
}) => {
  const [sendRequest, loading] = useDelete("activity.categories.delete", {
    replacements: {
      id: item.id,
    },
  });

  const handleRemove = async () => {
    const { status } = await sendRequest();
    if (status) {
      onRemoved?.();
    }
  };

  return (
    <li>
      <small>{item.id} </small>
      <span>{item.name}</span>
      <Button onClick={() => onEdit(item)}>Edit</Button>
      {loading ? (
        <span>Removing...</span>
      ) : (
        <Button onClick={handleRemove} disabled={loading}>
          Remove
        </Button>
      )}
    </li>
  );
};

export default CategoryItem;
