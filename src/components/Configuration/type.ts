import React from 'react';

export interface IConfiguration {
  close: () => void;
}

export interface IConfigurationView {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  close: () => void;
  handleChangeWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeHeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMineCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
