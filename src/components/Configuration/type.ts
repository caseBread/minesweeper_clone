import React from 'react';

export interface IConfiguration {
  close: () => void;
}

export interface IConfigurationView {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  close: () => void;
  changeWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeHeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeMineCount: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
