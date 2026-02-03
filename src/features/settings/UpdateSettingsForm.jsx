import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";
import useUpdateSettings from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { settings = {}, isPending } = useSettings();

  const {
    minBookingLength,
    maxGuestsPerBooking,
    maxBookingLength,
    breakfastPrice,
  } = settings;

  const { mutate, isPending: isUpdating } = useUpdateSettings();

  const handleUpdateSetting = (e) => {
    const { id, value } = e.target;

    if (!value) return;
    // if the value is the same, return
    if (Number(value) === settings[id]) return;

    mutate({ [id]: value });
  };

  if (isPending) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          onBlur={handleUpdateSetting}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          onBlur={handleUpdateSetting}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          onBlur={handleUpdateSetting}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          onBlur={handleUpdateSetting}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
