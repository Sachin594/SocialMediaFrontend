import { Select } from "antd";

interface GlobalSearchInputFormProps {
  style: Object;
}
const GlobalSearchInputForm = ({ style }: GlobalSearchInputFormProps) => {
  return (
    <div>
      <Select
        style={style}
        showSearch
        placeholder="Select a person"
        optionRender={(option: any) => {}}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: "1", label: "Jack" },
          { value: "2", label: "Lucy" },
          { value: "3", label: "Tom" },
        ]}
      />
    </div>
  );
};

export default GlobalSearchInputForm;
