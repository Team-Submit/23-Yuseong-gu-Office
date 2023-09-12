import * as S from "./style";

interface TabProps {
  value: string;
  disabled?: boolean;
  selected: boolean;
}
/** 사용법 : < Tab selected={true / false} value="값" disalbed? />*/
export const Tab = ({
  disabled = false,
  selected,
  value,
}: TabProps) => {
  return (
    <S.Container
      disabled={disabled}
      selected={selected}
    >
      <p>{value}</p>
      <hr />
    </S.Container>
  );
};

export default Tab;
