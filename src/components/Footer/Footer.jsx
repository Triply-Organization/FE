/* eslint-disable no-unused-vars */
import { Button, Form } from 'antd';
import { Typography } from 'antd';
import { Input } from 'antd';
import { message } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FcTwoSmartphones } from 'react-icons/fc';
import { MdAlternateEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo-white.webp';
import './Footer.scss';

const { Title } = Typography;

export default function Footer() {
  const { t } = useTranslation();
  const footerItem = [
    `${t('footer.contact.privacy')}`,
    `${t('footer.contact.policy')}`,
    `${t('footer.contact.about_us')}`,
    `${t('footer.contact.faq')}`,
    `${t('footer.contact.blog')}`,
  ];

  const services = [
    {
      title: `${t('footer.service.item.hotel')}`,
      link: 'https://yourhometonight.com/',
    },
    {
      title: `${t('footer.service.item.flight')}`,
      link: 'https://www.u2fly.org/',
    },
  ];

  const [formFollowByEmail] = Form.useForm();
  return (
    <footer className="footer__wrapper">
      <div className="section-4">
        <div className="section-4__contact-wrapper">
          <p className="section-4__text">{t('home.banner.telephone')}</p>
          <a href="#" className="section-4__link">
            <span className="section-4__link-icon">
              <FcTwoSmartphones />
            </span>{' '}
            <span className="section-4__link-words">+(84) 1800 - 333 5555</span>
          </a>
        </div>
        <div className="section-4__contact-wrapper">
          <p style={{ opacity: '0' }}>a</p>
          <a href="#" className="section-4__link">
            <span className="section-4__link-icon">
              <MdAlternateEmail />
            </span>{' '}
            <span className="section-4__link-words">
              triplysupport@triply.asia
            </span>
          </a>
        </div>

        <div className="section-4__follow-us">
          <p className="section-4__text">{t('home.banner.follow')}</p>
          <div className="section-4__wrapper-button">
            <Button
              className="section-4__button"
              icon={<BsFacebook />}
              shape="circle"
              size="large"
            />
            <Button
              className="section-4__button"
              icon={<BsTwitter />}
              shape="circle"
              size="large"
            />
            <Button
              className="section-4__button"
              icon={<BsYoutube />}
              size="large"
              shape="circle"
            />
            <Button
              className="section-4__button"
              icon={<BsInstagram />}
              size="large"
              shape="circle"
            />
          </div>
        </div>
      </div>
      <div className="footer__upper">
        <div className="footer__info-wrapper">
          <div className="footer__heading footer__heading--center">
            <img src={logo} alt="" className="footer__info-logo" />
          </div>
          <div className="footer__info-description">
            <span className="footer__info-description-words">
              {t('footer.title')}
            </span>
          </div>
          <div className="footer__direct">
            <div className="footer__info-address">
              <span className="footer__info-address-words">
                Cai Khe Ward, Ninh Kieu District, Can Tho City, Vietnam
              </span>
            </div>
            <Button className="footer__info-view-map-btn" size="large">
              {t('cta.view')}
            </Button>
          </div>
        </div>
        <div className="footer__list-wrapper footer__list-mobile--left">
          <b className="footer__heading">{t('footer.service.title')}</b>
          <ul className="footer__list">
            {services.map((item, index) => {
              return (
                <li className="footer__item" key={index}>
                  <a
                    target="_blank"
                    href={item.link}
                    className="footer__link"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__detail-wrapper">
          <b className="footer__heading">{t('footer.get_update.title')}</b>
          <p className="footer__detail-words">
            {t('footer.get_update.content')}
          </p>
          <div className="footer__detail-form">
            <Form
              data-testid="footer_form"
              form={formFollowByEmail}
              onFinish={e => {
                formFollowByEmail.resetFields();
                message.success(
                  `Thank ${e.followByEmail} for signing up. We will always send you the latest rides`,
                );
              }}
            >
              <Form.Item
                name="followByEmail"
                label=""
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
              >
                <Input
                  data-testid="footer-input"
                  className="footer__detail-input"
                  size="large"
                  placeholder={t('cta.place_holder_input-email')}
                />
              </Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="footer__detail-btn"
              >
                {t('cta.subscribe')}
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__lower-words">
          Copyright © 2022{' '}
          <a href="https://triply.asia/" className="footer__lower-link">
            Triply
          </a>
          . All Rights Reserved.
        </div>
        <ul className="footer__lower-list">
          {footerItem.map((item, index) => (
            <li className="footer__lower-item" key={index}>
              <a href="#" className="footer__low-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
