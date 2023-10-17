import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export default function Home() {
  return (
    <main className={"container"}>
      <div className={"row"}>
        <div className={"col-6"}>1232</div>
        <div className={"col-6"}>1232</div>
      </div>
      <CheckboxGroup
        label="Select cities"
        defaultValue={["buenos-aires", "london"]}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </CheckboxGroup>
    </main>
  );
}
