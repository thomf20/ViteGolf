const ConfirmDelete = ({ onConfirm, onCancel }) => {
  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <p>Är du säker på att du vill ta bort denna runda?</p>
        <button onClick={onConfirm}>Ja</button>
        <button onClick={onCancel}>Nej</button>
      </div>
    </div>
  );
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "5px",
  textAlign: "center",
};

export default ConfirmDelete;
