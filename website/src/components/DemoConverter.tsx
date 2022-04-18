import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './DemoConverter.module.css';

const tabList = ['encode', 'decode'] as const;

type TabType = typeof tabList[number];

export default function DemoConverter(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('encode');

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
                className={styles.textarea}
              />
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
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
