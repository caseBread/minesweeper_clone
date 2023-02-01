import { Buttons, ConfigurationForm } from './style';
import { IConfigurationView } from './type';

const ConfigurationView = ({ handleSubmit, close, changeWidth, changeHeight, changeMineCount }: IConfigurationView) => {
  return (
    <>
      <ConfigurationForm onSubmit={handleSubmit}>
        <input type="number" placeholder="가로길이" onChange={changeWidth} />
        <input type="number" placeholder="세로길이" onChange={changeHeight} />
        <input type="number" placeholder="지뢰개수" onChange={changeMineCount} />
        <Buttons>
          <button type="button" onClick={close}>
            취소
          </button>
          <button type="submit">설정</button>
        </Buttons>
      </ConfigurationForm>
    </>
  );
};
export default ConfigurationView;
