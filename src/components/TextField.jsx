import "@material/web/textfield/outlined-text-field";

export default function TextField({ label, handlerOnChange }) {
  return <md-outlined-text-field label={label} onChange={handlerOnChange} />;
}
