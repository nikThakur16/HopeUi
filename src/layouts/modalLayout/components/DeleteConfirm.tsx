const DeleteConfirm = (props: any) => {
  const { id, onClose, handleDelete, Data } = props;
  console.log(id, "iddd");

  return (
    <div className="space-y-4">
      <p className="text-gray-700">
        Are you sure you want to delete{" "}
        <strong>
          {Data.first_name} {Data.last_name}
        </strong>
        ?
      </p>

      <div className="flex justify-between  gap-3 mt-">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleDelete}
          className="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          yes
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
