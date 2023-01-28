import { Buttons, ConfigurationForm } from './style';
import { IConfigurationView } from './type';

const ConfigurationView = ({
  handleSubmit,
  close,
  handleChangeWidth,
  handleChangeHeight,
  handleChangeMineCount,
}: IConfigurationView) => {
  return (
    <>
      <ConfigurationForm onSubmit={handleSubmit}>
        <input type="number" placeholder="가로길이" onChange={handleChangeWidth} />
        <input type="number" placeholder="세로길이" onChange={handleChangeHeight} />
        <input type="number" placeholder="지뢰개수" onChange={handleChangeMineCount} />
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
