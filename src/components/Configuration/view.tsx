import { Buttons, ConfigurationForm } from './style';

const ConfigurationView = () => {
  return (
    <>
      <ConfigurationForm>
        <input type="number" placeholder="가로길이" />
        <input type="number" placeholder="세로길이" />
        <input type="number" placeholder="지뢰개수" />
        <Buttons>
          <button type="button">취소</button>
          <button type="button">설정</button>
        </Buttons>
      </ConfigurationForm>
    </>
  );
};
export default ConfigurationView;
