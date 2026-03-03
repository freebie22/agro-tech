import { Crop } from "@/src/data/interfaces";

const DeleteModal = ({
  deleteModalRef,
  deleteModal,
  currentCropId,
  cropData,
}: {
  deleteModalRef: React.RefObject<HTMLDivElement | null>;
  deleteModal: () => void;
  currentCropId: number | null;
  cropData: Crop[];
}) => {
  const cropName = cropData.find((crop) => crop.id === currentCropId)?.name;

  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex={-1}
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
      ref={deleteModalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">
              Видалення посіву - {cropName}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Ви впевнені, що хочете видалити даний посів? Ця дія не може бути
            скасована.
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Відміна
            </button>
            <button
              onClick={deleteModal}
              type="button"
              className="btn btn-danger"
              id="confirmDeleteBtn"
            >
              Видалити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
