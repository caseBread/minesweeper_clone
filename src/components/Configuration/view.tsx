import * as S from './style';
import { IConfigurationView } from './type';

const ConfigurationView = ({
  handleSubmit,
  close,
  changeWidth,
  changeHeight,
  changeMineCount,
  canSubmitInputs,
}: IConfigurationView) => {
  return (
    <>
      <S.ConfigurationForm onSubmit={handleSubmit}>
        <input type="number" placeholder="가로길이" onChange={changeWidth} />
        <input type="number" placeholder="세로길이" onChange={changeHeight} />
        <input type="number" placeholder="지뢰개수" onChange={changeMineCount} />
        <S.Tooltip verifyInputs={canSubmitInputs}>{`가로길이 * 세로길이 < 지뢰개수 이여야합니다`}</S.Tooltip>
        <S.Buttons>
          <button type="button" onClick={close}>
            취소
          </button>
          <S.SubmitButton type="submit" disabled={!canSubmitInputs}>
            설정
          </S.SubmitButton>
        </S.Buttons>
      </S.ConfigurationForm>
    </>
  );
};
export default ConfigurationView;
