import React from 'react';
import { useTranslation } from 'react-i18next';

import englishIcon from '../../assets/images/united-kingdom.png';
import vietnameIcon from '../../assets/images/vietnam.png';
import { Select } from '../../components';

const languageOptions = [
  {
    key: 'vi',
    value: 'Vietnamese',
    icon: vietnameIcon,
  },
  {
    key: 'en',
    value: 'English',
    icon: englishIcon,
  },
];

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      defaultValue={languageOptions[1].key}
      options={languageOptions}
      onChange={changeLanguage}
    />
  );
};

export default LanguageSelect;