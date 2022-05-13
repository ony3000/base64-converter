import React, { useState, useRef, useEffect, KeyboardEventHandler } from 'react';
import clsx from 'clsx';
import converter from '../../../dist/converter';
import styles from './DemoConverter.module.css';

const tabList = ['encode', 'decode'] as const;

type TabType = typeof tabList[number];

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
 */
function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default function DemoConverter(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('encode');
  const [errorMessage, setErrorMessage] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const inputRef = useRef(null);

  const keyUpHandler: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    const { value: inputValue } = event.currentTarget;

    if (activeTab === 'encode') {
      const convertedValue = converter.base64Encode(inputValue);

      setOutputValue(convertedValue);
    }
    else {
      const convertedValue = converter.base64Decode(inputValue);
      const pattern = new RegExp(escapeRegExp(inputValue) + '=*$');

      if (converter.base64Encode(convertedValue).match(pattern)) {
        setErrorMessage('');
        setOutputValue(convertedValue);
      }
      else {
        setErrorMessage('The input text does not seem to be in base64 format.');
        setOutputValue('');
      }
    }
  }

  useEffect(() => {
    setErrorMessage('');
    setOutputValue('');
    inputRef.current.value = '';
  }, [activeTab]);

  return (
    <section>
      <div className="container">
        <ul className="tabs tabs--block margin-vert--md">
          {tabList.map((tabName) => (
            <li
              key={tabName}
              className={clsx(
                'tabs__item',
                { 'tabs__item--active': tabName === activeTab },
                'text--capitalize',
              )}
              onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </li>
          ))}
        </ul>
        <div>
          <div className="card margin-vert--md">
            <div className="card__header">
              <h3>Input</h3>
            </div>
            <div className="card__body">
              <textarea
                ref={inputRef}
                className={clsx(
                  styles.textarea,
                  { [styles.hasError]: errorMessage },
                )}
                onKeyUp={keyUpHandler}
              />
              {errorMessage && (
                <small className="text--danger">{errorMessage}</small>
              )}
            </div>
          </div>
          <div className="card margin-vert--md">
            <div className="card__header">
              <h3>Output</h3>
            </div>
            <div className="card__body">
              <textarea
                readOnly
                className={styles.textarea}
                value={outputValue}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
